[![linuxserver.io](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/linuxserver_medium.png)](https://linuxserver.io)

[![Blog](https://img.shields.io/static/v1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=Blog)](https://blog.linuxserver.io "all the things you can do with our containers including How-To guides, opinions and much more!")
[![Discord](https://img.shields.io/discord/354974912613449730.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=Discord&logo=discord)](https://discord.gg/YWrKVTn "realtime support / chat with the community and the team.")
[![Discourse](https://img.shields.io/discourse/https/discourse.linuxserver.io/topics.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&logo=discourse)](https://discourse.linuxserver.io "post on our community forum.")
[![Fleet](https://img.shields.io/static/v1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=Fleet)](https://fleet.linuxserver.io "an online web interface which displays all of our maintained images.")
[![GitHub](https://img.shields.io/static/v1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=GitHub&logo=github)](https://github.com/lsiodev "view the source for all of our repositories.")
[![Open Collective](https://img.shields.io/opencollective/all/lsiodev.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=Supporters&logo=open%20collective)](https://opencollective.com/lsiodev "please consider helping us by either donating or contributing to our budget")

The [LinuxServer.io](https://linuxserver.io) team brings you another container release featuring:

 * regular and timely application updates
 * easy user mappings (PGID, PUID)
 * custom base image with s6 overlay
 * weekly base OS updates with common layers across the entire LinuxServer.io ecosystem to minimise space usage, down time and bandwidth
 * regular security updates

Find us at:
* [Blog](https://blog.linuxserver.io) - all the things you can do with our containers including How-To guides, opinions and much more!
* [Discord](https://discord.gg/YWrKVTn) - realtime support / chat with the community and the team.
* [Discourse](https://discourse.linuxserver.io) - post on our community forum.
* [Fleet](https://fleet.linuxserver.io) - an online web interface which displays all of our maintained images.
* [GitHub](https://github.com/lsiodev) - view the source for all of our repositories.
* [Open Collective](https://opencollective.com/lsiodev) - please consider helping us by either donating or contributing to our budget

# [lsiodev/nano-discord-bot](https://github.com/linuxserver/docker-nano-discord-bot)

[![GitHub Stars](https://img.shields.io/github/stars/lsiodev/docker-nano-discord-bot.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&logo=github)](https://github.com/linuxserver/docker-nano-discord-bot)
[![GitHub Release](https://img.shields.io/github/release/lsiodev/docker-nano-discord-bot.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&logo=github)](https://github.com/linuxserver/docker-nano-discord-bot/releases)
[![GitHub Package Repository](https://img.shields.io/static/v1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=GitHub%20Package&logo=github)](https://github.com/linuxserver/docker-nano-discord-bot/packages)
[![GitLab Container Registry](https://img.shields.io/static/v1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=GitLab%20Registry&logo=gitlab)](https://gitlab.com/Linuxserver.io/docker-nano-discord-bot/container_registry)
[![MicroBadger Layers](https://img.shields.io/microbadger/layers/lsiodev/nano-discord-bot.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge)](https://microbadger.com/images/lsiodev/nano-discord-bot "Get your own version badge on microbadger.com")
[![Docker Pulls](https://img.shields.io/docker/pulls/lsiodev/nano-discord-bot.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=pulls&logo=docker)](https://hub.docker.com/r/lsiodev/nano-discord-bot)
[![Docker Stars](https://img.shields.io/docker/stars/lsiodev/nano-discord-bot.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=stars&logo=docker)](https://hub.docker.com/r/lsiodev/nano-discord-bot)
[![Jenkins Build](https://img.shields.io/jenkins/build?labelColor=555555&logoColor=ffffff&style=for-the-badge&jobUrl=https%3A%2F%2Fci.linuxserver.io%2Fjob%2FDocker-Pipeline-Builders%2Fjob%2Fdocker-nano-discord-bot%2Fjob%2Fmaster%2F&logo=jenkins)](https://ci.linuxserver.io/job/Docker-Pipeline-Builders/job/docker-nano-discord-bot/job/master/)
[![LSIO CI](https://img.shields.io/badge/dynamic/yaml?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=CI&query=CI&url=https%3A%2F%2Flsio-ci.ams3.digitaloceanspaces.com%2Flinuxserver%2Fnano-discord-bot%2Flatest%2Fci-status.yml)](https://lsio-ci.ams3.digitaloceanspaces.com/lsiodev/nano-discord-bot/latest/index.html)

[Nano-discord-bot](https://discord.com/developers/docs/intro) - A bot used to hook into a [self hosted Nano RPC endpoint](https://hub.docker.com/r/linuxserver/nano) and discord server to Distribute funds from a faucet account.


[![nano-discord-bot](https://discord.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png)](https://discord.com/developers/docs/intro)

## Supported Architectures

Our images support multiple architectures such as `x86-64`, `arm64` and `armhf`. We utilise the docker manifest for multi-platform awareness. More information is available from docker [here](https://github.com/docker/distribution/blob/master/docs/spec/manifest-v2-2.md#manifest-list) and our announcement [here](https://blog.linuxserver.io/2019/02/21/the-lsio-pipeline-project/).

Simply pulling `lsiodev/nano-discord-bot` should retrieve the correct image for your arch, but you can also pull specific arch images via tags.

The architectures supported by this image are:

| Architecture | Tag |
| :----: | --- |
| x86-64 | amd64-latest |
| arm64 | arm64v8-latest |
| armhf | arm32v7-latest |


## Usage

Here are some example snippets to help you get started creating a container.

### docker

```
docker create \
  --name=nano-discord-bot \
  -e PUID=1000 \
  -e PGID=1000 \
  -e WALLET_URL=https://wallet.linuxserver.io/#/nano.linuxserver.io/ \
  -e RPC_URL=https://nano.linuxserver.io:7077 \
  -e FAUCET_KEY=XXXXXXXXXXXXX \
  -e DISCORD_KEY=XXXXXXXXXXXXX \
  -e FAUCET_AMOUNT="1000" \
  -v /path/to/data:/config \
  --restart unless-stopped \
  lsiodev/nano-discord-bot
```


### docker-compose

Compatible with docker-compose v2 schemas.

```
---
version: "2.1"
services:
  nano-discord-bot:
    image: lsiodev/nano-discord-bot
    container_name: nano-discord-bot
    environment:
      - PUID=1000
      - PGID=1000
      - WALLET_URL=https://wallet.linuxserver.io/#/nano.linuxserver.io/
      - RPC_URL=https://nano.linuxserver.io:7077
      - FAUCET_KEY=XXXXXXXXXXXXX
      - DISCORD_KEY=XXXXXXXXXXXXX
      - FAUCET_AMOUNT="1000"
    volumes:
      - /path/to/data:/config
    restart: unless-stopped
```

## Parameters

Container images are configured using parameters passed at runtime (such as those above). These parameters are separated by a colon and indicate `<external>:<internal>` respectively. For example, `-p 8080:80` would expose port `80` from inside the container to be accessible from the host's IP on port `8080` outside the container.

| Parameter | Function |
| :----: | --- |
| `-e PUID=1000` | for UserID - see below for explanation |
| `-e PGID=1000` | for GroupID - see below for explanation |
| `-e WALLET_URL=https://wallet.linuxserver.io/#/nano.linuxserver.io/` | Hosted wallet endpoint to use. |
| `-e RPC_URL=https://nano.linuxserver.io:7077` | RPC endpoint to publish blocks to and ingest account information. |
| `-e FAUCET_KEY=XXXXXXXXXXXXX` | The private key for your faucet account. |
| `-e DISCORD_KEY=XXXXXXXXXXXXX` | Discord api key for the bot. |
| `-e FAUCET_AMOUNT="1000"` | Amount to distribute to individual Discord users in Nano. |
| `-v /config` | Database and Radarr configs |

## Environment variables from files (Docker secrets)

You can set any environment variable from a file by using a special prepend `FILE__`.

As an example:

```
-e FILE__PASSWORD=/run/secrets/mysecretpassword
```

Will set the environment variable `PASSWORD` based on the contents of the `/run/secrets/mysecretpassword` file.

## Umask for running applications

For all of our images we provide the ability to override the default umask settings for services started within the containers using the optional `-e UMASK=022` setting.
Keep in mind umask is not chmod it subtracts from permissions based on it's value it does not add. Please read up [here](https://en.wikipedia.org/wiki/Umask) before asking for support.

## User / Group Identifiers

When using volumes (`-v` flags) permissions issues can arise between the host OS and the container, we avoid this issue by allowing you to specify the user `PUID` and group `PGID`.

Ensure any volume directories on the host are owned by the same user you specify and any permissions issues will vanish like magic.

In this instance `PUID=1000` and `PGID=1000`, to find yours use `id user` as below:

```
  $ id username
    uid=1000(dockeruser) gid=1000(dockergroup) groups=1000(dockergroup)
```


&nbsp;
## Application Setup

With the proper environment variables passed to this container it will automatically reach out to your Nano RPC server and Discord Server.
More about setting up a hosted Nano network [here](https://hub.docker.com/r/linuxserver/nano) .


## Docker Mods
[![Docker Mods](https://img.shields.io/badge/dynamic/yaml?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=mods&query=%24.mods%5B%27nano-discord-bot%27%5D.mod_count&url=https%3A%2F%2Fraw.githubusercontent.com%2Flinuxserver%2Fdocker-mods%2Fmaster%2Fmod-list.yml)](https://mods.linuxserver.io/?mod=nano-discord-bot "view available mods for this container.")

We publish various [Docker Mods](https://github.com/linuxserver/docker-mods) to enable additional functionality within the containers. The list of Mods available for this image (if any) can be accessed via the dynamic badge above.


## Support Info

* Shell access whilst the container is running: `docker exec -it nano-discord-bot /bin/bash`
* To monitor the logs of the container in realtime: `docker logs -f nano-discord-bot`
* container version number
  * `docker inspect -f '{{ index .Config.Labels "build_version" }}' nano-discord-bot`
* image version number
  * `docker inspect -f '{{ index .Config.Labels "build_version" }}' lsiodev/nano-discord-bot`

## Updating Info

Most of our images are static, versioned, and require an image update and container recreation to update the app inside. With some exceptions (ie. nextcloud, plex), we do not recommend or support updating apps inside the container. Please consult the [Application Setup](#application-setup) section above to see if it is recommended for the image.

Below are the instructions for updating containers:

### Via Docker Run/Create
* Update the image: `docker pull lsiodev/nano-discord-bot`
* Stop the running container: `docker stop nano-discord-bot`
* Delete the container: `docker rm nano-discord-bot`
* Recreate a new container with the same docker create parameters as instructed above (if mapped correctly to a host folder, your `/config` folder and settings will be preserved)
* Start the new container: `docker start nano-discord-bot`
* You can also remove the old dangling images: `docker image prune`

### Via Docker Compose
* Update all images: `docker-compose pull`
  * or update a single image: `docker-compose pull nano-discord-bot`
* Let compose update all containers as necessary: `docker-compose up -d`
  * or update a single container: `docker-compose up -d nano-discord-bot`
* You can also remove the old dangling images: `docker image prune`

### Via Watchtower auto-updater (especially useful if you don't remember the original parameters)
* Pull the latest image at its tag and replace it with the same env variables in one run:
  ```
  docker run --rm \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --run-once nano-discord-bot
  ```

**Note:** We do not endorse the use of Watchtower as a solution to automated updates of existing Docker containers. In fact we generally discourage automated updates. However, this is a useful tool for one-time manual updates of containers where you have forgotten the original parameters. In the long term, we highly recommend using Docker Compose.

* You can also remove the old dangling images: `docker image prune`

## Building locally

If you want to make local modifications to these images for development purposes or just to customize the logic:
```
git clone https://github.com/lsiodev/docker-nano-discord-bot.git
cd docker-nano-discord-bot
docker build \
  --no-cache \
  --pull \
  -t lsiodev/nano-discord-bot:latest .
```

The ARM variants can be built on x86_64 hardware using `multiarch/qemu-user-static`
```
docker run --rm --privileged multiarch/qemu-user-static:register --reset
```

Once registered you can define the dockerfile to use with `-f Dockerfile.aarch64`.

## Versions

* **25.05.20:** - Initial Release.
