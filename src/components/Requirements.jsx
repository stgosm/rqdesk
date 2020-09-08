import React from 'react';
import Request from './Request'
import rqdata from '../assets/requerimientos.json';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


class Requirements extends React.Component {
  state = {
    requirements: []
  }

  componentDidMount(){
    this.setState({ requirements: rqdata});
  }

  render(){
    return(
      <Container fixed>
        {
          this.state.requirements.map(rq => 
            <Request key={ rq.id } {...rq} />
          )
        }
      </Container>
    )
  }
}

export default Requirements;
