import React from 'react';
import Request from './Request'
/*import rqdata from '../assets/requerimientos.json';*/
import Grid from '@material-ui/core/Grid';




function Requirements() {

  const [requeriments, setRequirements] = React.useState([])

  React.useEffect(() => {
    async function getRequirements() {
      try {
        const data = await fetch('http://localhost:3000/requiriments')
        const dataRequirements = await data.json()

        setRequirements(dataRequirements)
        
      } catch(e) {
        console.error(e);
      };
    }

    getRequirements();
  }, []);

  return(
    <>
      {
        requeriments.map(rq => 
          <Grid item xs={12} sm={6} md={6} lg={3} key={ rq.id }>
            <Request {...rq} />
          </Grid>
        )
      }
    </>
  )
}

export default Requirements;
