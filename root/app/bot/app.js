// Discord Nano Faucet bot
require('log-timestamp');
const { Worker, isMainThread, parentPort } = require('worker_threads');
// Main thread code
if (isMainThread) {
const worker = new Worker(__filename);
const Discord = require('discord.js');
const client = new Discord.Client();
const NanoCurrency = require('nanocurrency');
const BigNumber = require('bignumber.js');
const level = require('level');
const fetch = require('node-fetch');
const userdb = level('/config/userdb','accounts');
const faucetdb = level('/config/faucetdb','byid');
const rawconv = {from:'raw',to:'Nano'};
const nanoconv = {from:'Nano',to:'raw'};

// Settings from env
const walleturl = process.env.WALLET_URL;
const rpcurl = process.env.RPC_URL;
const privatekey = process.env.FAUCET_KEY;
const discordkey = process.env.DISCORD_KEY;
const faucetamount = process.env.FAUCET_AMOUNT;


// Notify Discord bot connected
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// RPC call
async function rpcall(payload){
  const Init = { method:'POST',body: JSON.stringify(payload)};
  const res = await fetch(rpcurl,Init);
  const data = await res.json();
  return data;
}

// Discord bot message ingestion
client.on('message', msg => {
  // Register Address
  if (msg.content.startsWith('!register-address')) {
    const userid = msg.author.id;
    const address = msg.content.split(' ')[1];
    if (NanoCurrency.checkAddress(address)){
      userdb.get(userid, function (err, value) {
        if (err){
          userdb.put(userid,address);
          msg.reply('Registered ' + address + ' to ' + userid);
        }
        else{
          msg.reply(value + ' is already registered to ' + userid + ' if you lost this account you are SOL');
        }  
      });
    }
    else{
      msg.reply(address + ' is not a valid address');
    }
  }
  // Send funds to registered address
  if (msg.content.startsWith('!faucet')) {
    const userid = msg.author.id;
    userdb.get(userid, function (err, destination) {
      if (err){
        msg.reply(userid + ' has not registered a nano address please go to ' + walleturl + ' and click Generate Wallet then use !register-address with your address');
      }
      else{
        faucetdb.get(userid, async function (err, block) {
          if (err){
            if (hasfunds == true){
              if (readytosend == true){
                readytosend = 'transacting';
                const block = NanoCurrency.createBlock(privatekey, {
                  work: pow,
                  previous: frontier,
                  representative: representative,
                  balance: balance,
                  link: destination
                });
                const send = {};
                send['action'] = 'process';
                send['json_block'] = 'true';
                send['subtype'] = 'send';
                send['block'] = block.block;
                const sendres = await rpcall(send);
                if (NanoCurrency.checkHash(sendres.hash)){
                  msg.reply(faucetamount + ' Nano has been sent to ' + destination + ' ' + walleturl + 'block/' + sendres.hash);
                  faucetdb.put(userid,sendres.hash);
                  readytosend = false;
                }
                else{
                  msg.reply('Unable to process send');
                  readytosend = false;
                }
              }
              else{
                msg.reply('I am busy please try again later');
              }
            }
            else{
              msg.reply('I am out of funds');
            }
          }
          else{
            msg.reply(destination + ' has already been sent funds ' + walleturl + 'block/' + block);
          }
        });
      } 
    });
  }
});

// Login to Discord
client.login(discordkey);

// Background loop to set globals with worker checks back every second
global.readytosend = false;
global.senderpublickey = NanoCurrency.derivePublicKey(privatekey);
global.sender = NanoCurrency.deriveAddress(senderpublickey,{useNanoPrefix:true});
global.amount = NanoCurrency.convert(faucetamount, nanoconv);
global.pow = '';
global.balance = '';
global.frontier = '';
global.representative = '';
global.hasfunds = '';
async function updatework() {
  if (readytosend == false){
    readytosend = 'working';
    const info = {};
    info['action'] = 'account_info'
    info['representative'] = 'true'
    info['account'] = sender
    const res = await rpcall(info);
    if (res.frontier){
      const balanceBN = new BigNumber(res.balance).minus(new BigNumber(amount));
      balance = balanceBN.toFixed();
      if (balanceBN.isNegative()){
        readytosend = false;
        hasfunds = false;
      }
      else{
        hasfunds = true;
        frontier = res.frontier;
        representative = res.representative;
        console.log('need to calculate pow for ' + sender + ' frontier block');
        worker.postMessage(frontier);
      }
    }
    else{
      readytosend = false;
    }
  }
}
setInterval(updatework, 1000);

// The worker is done let a send occur
worker.on('message', (msg) => { 
  pow = msg;
  console.log('pow calculated ' + pow);
  readytosend = true;
});

// Worker thread to do pow in the background
} else {
const NanoCurrency = require('nanocurrency');

parentPort.on("message", async message => {
  const pow = await NanoCurrency.computeWork(message);
  parentPort.postMessage(pow);
});

}
