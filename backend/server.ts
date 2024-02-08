
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { expressLogger } from 'express-loggerr';
import "./src/configs/env.config.js";
import v1Router from './src/routes/v1/routes.js';


const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(expressLogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('json spaces', 2);

app.use('/api/v1', v1Router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


export default app;