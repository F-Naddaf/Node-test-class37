'use strict'

import { v4 as uuidv4 } from 'uuid'

export const movies = [{
  id: uuidv4(),
  title: 'Inception',
  director: 'Christopher Nolan',
  release_date: '2010-07-16'
},
{
  id: uuidv4(),
  title: 'The Irishman',
  director: 'Martin Scorsese',
  release_date: '2019-09-27'
}]