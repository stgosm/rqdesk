import React from 'react';
import '../css/App.css';
import Request from './Request'
import rqdata from '../assets/requerimientos.json';

class Requirements extends React.Component {
  state = {
    requirements: []
  }

  componentDidMount(){
    this.setState({ requirements: rqdata});
  }

  render(){
    return(
      this.state.requirements.map(rq => 
        <Request key={ rq.id } {...rq} />
      )
    )
  }
}

export default Requirements;
