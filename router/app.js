'use strict';

import express from 'express';
import {
  getMovieList,
  findMovie,
  createMovie,
  deleteMovie,
} from '../controllers/controller.js';

const app = express();
app.use(express.json());

//Getting all the movie list
app.get('/', getMovieList);

//Finding a movie by title
app.get('/:id', findMovie);

//Creating a new movie
app.post('/', createMovie);

//Delete a movie specified by title
app.delete('/:id', deleteMovie);

export default app;
