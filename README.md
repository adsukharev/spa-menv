# SPA_menv


Single page application (crud) with Node+Express+Vue+MongoDB+Docker

## Getting Started

### **Prerequisites**

- node.js v10.15.3
- npm v6.4.1
- MongoDb v4.0.3


#### Install node and npm
```
brew install node
```
#### Dowloand project

```
git clone https://github.com/AndreiSukharev/SPA_menv.git spa_menv
cd spa_menv
```

## Installation
### Using Docker

#### Install docker compose

```
https://docs.docker.com/compose/install/
```
#### Build
In project directory:
```
docker-compose build
```
#### Run
```
docker-compose up
```
go to http://localhost:3222

#### Note
if your port 3222 is busy change only this line in file .env
```
PORT_MACHINE=3222
```

### **Or**

### For MacOs with Homebrew


#### Install and start mongodb
```
brew tap mongodb/brew
brew install mongodb-community@4.0
brew services start mongodb-community@4.0
```
#### Install dependencies
```
npm i
```
#### Note

If you don't use docker,
change in file .env
```
MONGO_HOST=mongo
```
to
```
MONGO_HOST=localhost
```

Why? See explanations here:
```
https://stackoverflow.com/questions/51011552/mongodb-on-with-docker-failed-to-connect-to-server-localhost27017-on-first-c
```

#### Run

```
npm run serve
```
go to http://localhost:3222

if your port 3222 is busy change both of these lines in file .env
```
PORT_MACHINE=3222
PORT_DOCKER=3222
```

## Test

API Swagger documentation

``
http://localhost:3222/api-docs
``

## Acknowledgments

### List of docker containers
docker container ls -a
### List of docker images
docker images

### Remove containers:
#### one container
docker stop CONTAINER

docker rm CONTAINER
#### all containers
docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)

### Remove images:
#### one image
docker image rm IMAGE
#### all images
docker rmi $(docker images -a -q)

