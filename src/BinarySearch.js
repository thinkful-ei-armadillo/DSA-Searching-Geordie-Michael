import React, {Component} from 'react';

export default class BinarySearch extends Component{
  setResults = (results) => {
    this.props.result(results)
  }
  
  binarySearch(arr, value, start, end){
    start = start === undefined ? 0 : start;
    end = end === undefined ? arr.length : end;
    if(start > end){
      return -1;
    }
    const idx = Math.floor((start + end) / 2);
    const item = arr[idx];

    if(item == value){
      this.setResults(arr[idx]);
      return;
    }
    else if(item < value){
      return this.binarySearch(arr, value, idx + 1, end);
    }
    else if(item > value){
      return this.binarySearch(arr, value, start, idx - 1);
    }
  }

  onFormSubmit = e => {
    e.preventDefault();
    const data = 
      [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50,
      13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88,
      27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38,
      67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82,
      6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17,
      69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87,
      49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
    
    let input = document.getElementById("input").value;
    let sorted = data.sort();
    this.binarySearch(sorted, input);
  }
  
  render(){
    return(
      <div className="search">
        <form onSubmit={this.onFormSubmit}>
          <label>
            Binary Search: <input type="text" id="input" required />
          </label>
          <button className="searchButton" type="submit">Search</button>
        </form>
      </div>
    )
  }
}