import React, {Component} from 'react';

export default class App extends Component {
  state = {
    data: [
      89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50,
      13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88,
      27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38,
      67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82,
      6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17,
      69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87,
      49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
    ],
    sortedData: [
      1, 11, 13, 13, 13, 14, 14, 15, 16, 16, 17, 2, 21, 22,
      23, 24, 25, 25, 26, 26, 27, 27, 27, 28, 28, 28, 3, 30,
      31, 32, 32, 33, 34, 38, 38, 39, 40, 40, 42, 42, 43, 44,
      45, 46, 46, 46, 48, 49, 5, 50, 51, 51, 53, 53, 54, 55,
      56, 6, 6, 6, 62, 63, 64, 64, 64, 65, 67, 68, 69, 69, 7,
      7, 70, 70, 72, 72, 73, 73, 76, 78, 78, 80, 81, 82, 83,
      84, 85, 87, 87, 88, 88, 89, 9, 9, 90, 91, 93, 97, 98, 98
    ],
    results: null,
    input: ''
  }

  linearSearch(arr, value){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == value){
        return i + 1;
      }
    }
    return -1;
  }

  binarySearch(array, value, start, end, count = 1){
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if (start > end) {
      return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];
    if (item == value) { // double equal instead of triple because input is string
        return count;
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end, count + 1);
    }
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1, count + 1);
    }
  }
  
  handleLinear = e => {
    e.preventDefault();
    let results = this.linearSearch(this.state.data, this.state.input);
    this.setState({results});
  }

  handleBinary = e => {
    e.preventDefault();
    let results = this.binarySearch(this.state.sortedData, this.state.input);
    this.setState({results});
  }

  updateInput = e => {this.setState({input: e.target.value})}

  render(){
    return (
      <main className='App'>
        <form>
          <label>
            Search: <input type="number" id="input" value={this.state.input} onChange={this.updateInput} />
          </label>
          <button onClick={(e) => {this.handleLinear(e)}}>Linear Search</button>
          <button onClick={(e) => {this.handleBinary(e)}}>Binary Search</button>
        </form>
        <p>Tries: {this.state.results}</p>
      </main>
    );
  }
}