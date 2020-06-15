import React, {Fragment} from 'react';
import Movie from './Movie.js'

const MoviesList = (props) => {

  const movieNodes = props.movies.map((movie, index) => {
    return <Movie movie={movie} key={index}/>
  });

  return(
    <Fragment>
      {movieNodes}
    </Fragment>
  )
}

export default MoviesList;
