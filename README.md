# SPA_menv


Single page application (crud) with Node+Express+Vue+MongoDB

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
go to http://localhost:3333

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

#### Run

```
npm run serve
```
go to http://localhost:3333

## Acknowledgments

#### Remove containers:
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

#### Remove all images:
docker rmi $(docker images -a -q)

