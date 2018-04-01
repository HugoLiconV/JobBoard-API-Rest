'use strict'
import express from 'express'
// import cors from 'cors'
// import compression from 'compression'
// import morgan from 'morgan'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'
// import { env } from '../../config'

export default (routes) => {
	const app = express();

/* 	if (env === 'production' || env === 'development') {
		app.use(cors())
		// app.use(compression())
		// app.use(morgan('dev'))
	} */

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use('/api', routes);
	app.use(queryErrorHandler())
	app.use(bodyErrorHandler())
	return app;
};

