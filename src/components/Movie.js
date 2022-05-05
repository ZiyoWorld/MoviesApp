import React, { Component } from 'react';

class Movie extends Component {
    
    state = {  }
    render() { 
        const {Title, Year, imdbID, Type, Poster} = this.props;
        return <div key={imdbID} className="card">
            <div className="card__img">
                <img src={Poster}  alt="" />
            </div>
            <div className="card_info">
                <p>{Type}</p>
                <h2>{Title}</h2>
                <p>{Year}</p>
            </div>
        </div>;
    }
}
 
export default Movie;