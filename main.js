import { dataConnect } from './app.js'
import { createMovie } from '@movie-app/movies'

try {
  const result = await createMovie(dataConnect, {
    title: 'New Records',
    genre: 'Action',
    imageUrl:
      'https://fastly.picsum.photos/id/534/200/200.jpg?hmac=fFEUULhOfD3o0WvBKAcTIKeSps59JC49BsTEBu5Z3eI',
  })
  console.log(result.data)
} catch (error) {
  console.error(error)
}