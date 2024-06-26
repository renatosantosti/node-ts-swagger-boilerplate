# NodeJs +TypeScript + Swagger Api Boilerplate
## _A rest api written on TS, Express and Swagger_

This project aims to provide an easier boilerplate to start an simple Rest API on TypeScript.

- TypeScript
- Express
- Swagger
- Morgan
- Docker
  
![image](https://github.com/renatosantosti/node-ts-swagger-boilerplate/assets/16526537/79abe714-7d93-4211-864f-ca04e7e0cb95)

## Features
- Provide TS configuration
- Provide examples for Rest GET Api
- Provide Swagger documentation for GET routers
- Split routers, controllers and interfaces on different folders
- And also you can run project as Docker container

## Installation

This boilerplate requires [Node.js](https://nodejs.org/) v10+ to run.

## Create project 

You can just clone this repo by:
```sh
git clone https://github.com/renatosantosti/node-ts-swagger-api-boilerplate
```
or try by youself from scrach:

#### Creating project 

```sh
mkdir node-ts-swagger-api-boilerplate
cd express-typescript
npm init -y
```

#### Install dependencies
 Install TypeScript: 
 ```sh
 npm i -D typescript
 ```
 
 Add tsconfig.json file
```sh
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./build",
    "strict": true,
    "esModuleInterop": true
  }
}
```

Install Express as dependency and type definitions of node and express as development dependencies.
```sh
npm i -S express
npm i -D @types/express @types/node
```

Adding Express Middlewares
```sh
npm i -S morgan
npm i -D @types/morgan
npm i -S joi
```

Install NodeMon
```sh
npm i -D ts-node nodemon
```

Install Swagger and its dependencies
```sh
npm i -S tsoa swagger-ui-express
npm i -D @types/swagger-ui-express concurrently
```
to that last dependencies just add following settings on tsconfig.json
```sh
{
  "compilerOptions": {
    ...
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

Finally change package.json to this:
```sh
"scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "dev": "nodemon"
  },
```
## Docker

Throught the  node-ts-swagger-api-boilerplate is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd node-ts-swagger-boilerplate
docker build --no-cache -t node-ts-swagger-boilerplate-image .
```

This will create the boilerplate image and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8080:8000 --restart=always --cap-add=SYS_ADMIN --name=node-ts-swagger-boilerplate-container node-ts-swagger-boilerplate-image
```

Verify the deployment by navigating to your server address in
your preferred browser and voila!

```sh
http://127.0.0.1:8080/api-docs/
```

#### See Docker logs for container
```sh
docker logs -f node-ts-swagger-boilerplate-container 
```

#### Entering Docker container 
```sh
docker exec -it node-ts-swagger-boilerplate-container sh
```
#### Check open ports on alpine Linux 
```sh
netstat -lntu
```

## Contributors

| Used Projects | Link |
| ------ | ------ |
| TypeScript | https://www.typescriptlang.org |
| Express | https://expressjs.com |
| Swagger | https://swagger.io |
| Swagger-JsDoc | https://github.com/Surnet/swagger-jsdoc |
| TSoa | https://github.com/lukeautry/tsoa |
| Morgan | https://expressjs.com/en/resources/middleware/morgan.html|
| Docker | https://docs.docker.com |

Additionally read about **JSDoc 3** is an API documentation generator for JavaScript, similar to Javadoc or phpDocumentor: https://swagger.io/specification

And also the **OpenAPI Specification (OAS)** defines a standard, language-agnostic interface to HTTP APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic: https://swagger.io/specification

### References
 - https://medium.com/ms-club-of-sliit/building-rest-api-with-express-js-typescript-and-swagger-387a9c731717
 - https://github.com/ThorstenBux/express-typescript-swagger-boilerplate
 - https://rsbh.dev/blogs/rest-api-with-express-typescript
 - https://chinwendu.medium.com/how-to-dockerize-your-typescript-application-with-multi-stage-build-a-step-by-step-guide-56e7c4274088
 - https://rsbh.dev/blogs/rest-api-express-typescript-docker
 - https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do
 - https://www.linkedin.com/pulse/documenting-nodejs-rest-api-using-swagger-avyavesh-technologies


## License

MIT

**Free Software, Hell Yeah!**
