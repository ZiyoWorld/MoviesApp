import React, { Component } from 'react';
import Movies from '../components/Movies';
import SearchBar from '../components/SearchBar';
class Main extends Component {

    state = { 
        movies: []
     }

     componentDidMount(){
         fetch("https://www.omdbapi.com/?i=tt3896198&apikey=4c870ec6&s=batman")
           .then((response) => response.json())
           .then( (data) => this.setState({movies: data.Search}))
     }
      
     searchMovies = (movie, type = "all") =>{
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=4c870ec6&s=${movie}${
            type !== "all" ? `$type=${type}` : " "}`
            )
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