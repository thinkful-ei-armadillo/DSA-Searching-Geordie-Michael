import React, {Component} from 'react';

export default class Results extends Component{
  render(){
    if(!this.props.results){
      return ''
    }
    return(
      <section className="results">
        Linear Search Tries: {this.props.results}
      </section>
    )
  }
}