'use strict';

import express from 'express';
import { movies } from '../src/data.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());

//get the movie list in the form of JSON
export const getMovieList = (_req, res) => {
  res.status(200).send(movies);
};

//finding a movie by id in the form of JSON
export const findMovie = (req, res) => {
  const { id } = req.params;
  const findMovie = movies.find((movie) => movie.id === id);
  if (!findMovie) {
    res.status(404).json({
      message: `No movie with the id ${id} found`,
    });
  } else {
    res.status(200).json(movies.filter((movie) => movie.id === id));
  }
};

//add movie to the list
export const createMovie = (req, res) => {
  const movie = req.body;
  const newMovie = {
    id: uuidv4(),
    title: movie.title,
    director: movie.director,
    release_date: movie.release_date,
  };
  if (!newMovie.title || !newMovie.director || !newMovie.release_date) {
    return res.status(400).json({
      message: 'Please include the movie title, director and/or release date',
    });
  }
  movies.push(newMovie);
  res.status(200).json({
    message: `The movie with a id: ${newMovie.id} has been add it to the list!`,
  });
};

//deleting a movie from the list
export const deleteMovie = (req, res) => {
  const { id } = req.params;
  const findMovie = movies.find((movie) => movie.id === id);

  if (!findMovie) {
    res.status(404).json({
      message: `No movie with the id: ${id} found`,
    });
  } else {
    res.status(200).json({
      message: `The movie with a id: ${id} is deleted from the list`,
      movies: movies.filter((movie) => movie.id !== id),
    });
  }
};

// {
// "title": "Die Hard 4",
// "director": "Len Wiseman",
// "release_date": "2007-06-22"
// }
