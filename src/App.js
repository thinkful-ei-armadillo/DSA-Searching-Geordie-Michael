import React, {Component} from 'react';
import Search from './Search';
// import BinarySearch from './BinarySearch';
import Results from './Results';

export default class App extends Component {
  state = {
    linearResults: null,
    binaryResults: null
  }

  handleLinearResults = (result) => {
    this.setState({linearResults: result})
  }

  handleBinaryResults = (result) => {
    this.setState({binaryResults: result})
  }
  
  render(){
    return (
      <main className='App'>
        <Search results={this.handleLinearResults} />
        {/* <BinarySearch results={this.handleBinaryResults} /> */}
        <Results results={this.state.linearResults} />
      </main>
    );
  }
}