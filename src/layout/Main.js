import React, { Component } from 'react';
import Movies from '../components/Movies';
import SearchBar from '../components/SearchBar';
class Main extends Component {

    state = { 
        movies: []
     }

     componentDidMount(){
         fetch("http://www.omdbapi.com/?i=tt3896198&apikey=4c870ec6&s=gentlemen")
           .then((response) => response.json())
           .then( (data) => this.setState({movies: data.Search}))
     }
      
     searchMovies = (movie) =>{
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4c870ec6&s=${movie}`)
        .then((response) => response.json())
        .then( (data) => this.setState({movies: data.Search}))
     }

    render() { 
        return <div className='container'>
            <SearchBar searchMovies={this.searchMovies} />
            <Movies movies={this.state.movies} />
        </div>
    }
}
 
export default Main;