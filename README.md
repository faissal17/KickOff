# Overview for KickOff

KickOff is mobile application created to keep you on the last update of the football matches, the application containe mathces, matches details, player, and players details, you can fillter the match by which leugue you like
# PreRequest

before starting with PayUnionPro you need some requirement

- Node.js and npm installed on your machine.
- Git installed on your machine.
- Expo installed (optional)
- android studio emalutor (optional if your **_expoGo_** app on your device didn't work)

# Getting started

1. Follow these simple steps to get a local copy up and running.

```bash
git clone https://github.com/faissal17/kickOff.git
```

2. navigate the project

```bash
cd KickOff
```

3.  Install dependencies using npm

```bash
npm install
```


# Docker

## configuration
You should have installed
`docker` to run this application with docker. 'Docker is an open platform for developing, shipping, and running applications.'
1. Build a Docker image:
 after creating your first docker image run the following command to create it 
 ```
 docker build -t app_name
 ```
 2. Run the Docker container

you can go straight to your docker app and run the image to a container

 3. you should know the main purpose of docker in this app. Instead of running each server at a time we created a file to run them at the same time, mainly used for a team work it doesn't matter what dependencies you have or what version all what your node is clone the images and run the following command 
```
docker-compose up
```
the command should run after creating "docker-compose.yaml"
and connect the front-end and backend

 4. run the following command to stop the containers 

```
docker-compose down
```