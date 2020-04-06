import React from 'react';
import Searcher from "./modules/searcher"
import Result from "./modules/result"
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {

  state = {
    term: "",
    images: []
  }

  API = () => {
    const tmp = this.state.term
    const url = `https://pixabay.com/api/?key=15908431-b6034a52872cd060420174a7e&q=${tmp}&per_page=30`

    fetch(url)
      .then(res => res.json())
      .then(result => this.setState({images: result.hits}))

    //console.log('URL -->', url)
  }


  dataSearch = (term) => {
    this.setState({
      term
    },() => {
      this.API()
    })
    //console.log(term)
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="load text-center">
            Searcher Images
          </p>
          <Searcher message={this.dataSearch}/>
        </div>
      <Result images={this.state.images}/>
      </div>
    );
  }

}

export default App;
