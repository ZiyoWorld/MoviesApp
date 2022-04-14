import React,{Component} from 'react';
// eslint-disable-next-line no-unused-vars
import Movie from './Movie';

class Movies extends Component {
    
    state = {  }
    render() {
        const {movies } = this.props;
        
        return <div className='movies' >
              {
                  movies.map((movie)=> (
                      <Movie key={movie.imdbID} {...movie} />
                  ))
              }
        </div>  ;
    }
}
 
export default Movies;
