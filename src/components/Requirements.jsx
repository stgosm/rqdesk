import React from 'react';
import Request from './Request'
import rqdata from '../assets/requerimientos.json';
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
        <>
          {
            this.state.requirements.map(rq => 
              <Grid item xs={12} sm={6} md={6} lg={3} key={ rq.id }>
                <Request {...rq} />
              </Grid>
            )
          }
        </>
    )
  }
}

export default Requirements;
