import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import dbConnector from './db/dbConnector.js';
import notFoundMiddleware from './middleware/notFound.js';
import errorHandlerMiddleware from './middleware/errorHandler.js';

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(cors());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

dbConnector(process.env.MONGO_DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Derver run on porn: ${PORT}`);
    })
  })
  .catch((error) => console.log(error));
