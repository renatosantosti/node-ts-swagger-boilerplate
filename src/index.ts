import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import liveRouters from "./routes/live/router";
import statusRouters from "./routes/status/router";
import defaultRouter from "./routes/default/router";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'NodeJs +TypeScript + Swagger Api Boilerplate',
    version: '1.0.0',
    description:
      'This is a boilerplate REST API application made with TS + Express + TSoa + Swagger.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Renato Santos',
      url: 'https://github.com/renatosantosti/node-ts-swagger-boilerplate',
    },
  },
};

const swaggerOptions = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions. It applied *.* to accept both .js and .ts extension for dev and after built the project.
  apis: [`${__dirname}/routes/live/*.*`, `${__dirname}/routes/status/*.*`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Define route to api documentation (swagger)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Apply all other routers
app.use(defaultRouter);
app.use(liveRouters);
app.use(statusRouters);

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
