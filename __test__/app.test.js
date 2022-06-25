'use strict';

import supertest from 'supertest';
import app from '../router/app.js';

const request = supertest(app);

//Finding movie list test
describe('GET/getMovieList', () => {
  it('should return the movie list', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toEqual(200);
  });
});

//Find movie by id test
describe('GET/findMovie', () => {
  it('should find a movie by id', async () => {
    const response = await request.get('/23a74303-a1fe-42b3-946c-0f82abad3eeb');
    expect(response.statusCode).toEqual(200);
  });
  it("should respond with a 404 status if the movie id didn't found", async () => {
    const response = await request.get('/wwwww');
    expect(response.statusCode).toEqual(404);
  });
});

//Creating a new movie test
describe('POST/createMovie', () => {
  it('should creating a new movie', async () => {
    const movie = {
      title: 'RED',
      director: 'Robert Schwentke',
      release_date: '2012-10-22',
    };
    const response = await request.post('/').send(movie);
    expect(response.statusCode).toEqual(200);
    expect.objectContaining({
      title: 'RED',
      director: 'Robert Schwentke',
      release_date: '2012-10-22',
    });
  });
  it('should respond with a 400 status if not complete the requirement of creating a new movie', async () => {
    const response = await request.post('/');
    expect(response.statusCode).toEqual(400);
  });
});

//Delete a movie test
describe('DELETE/deleteMovie', () => {
  it('should deleting a movie', async () => {
    const response = await request.delete(
      '/23a74303-a1fe-42b3-946c-0f82abad3eeb',
    );
    expect(response.statusCode).toEqual(200);
  });
  it('should respond with a 404 status if no movie id found', async () => {
    const response = await request.delete('/');
    expect(response.statusCode).toEqual(404);
  });
});
