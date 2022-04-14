import React, { Component } from 'react';

class Movie extends Component {
     
    state = {  }
    render() {
        const {Title, Year, imdbID, Type, Poster } = this.props; 
        return <div key={imdbID} className='card'>
            <div className="card-img">
                <img src={Poster} alt="" />
            </div>
            <div className='card-info'>
              <p>{Type}</p>
              <h3>{Title}</h3>
              <p>{Year}</p>
            </div> 

        </div>
    }
}
 
export default Movie;