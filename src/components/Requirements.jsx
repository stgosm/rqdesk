import React from 'react';
import Request from './Request';
import Grid from '@material-ui/core/Grid';

import { gql, useQuery, useLazyQuery } from '@apollo/client';

const ALL_REQUIREMENTS = gql`
query {
  requirements {
    _id
    rqName
    rqArea {
      areaName
    }
    rqDescription
  }
}
`

const FIND_REQUIREMENT = gql`
  query findRequirementById($requirementToSearch: String!) {
    findRequirement(_id: $requirementToSearch){
      rqName
      rqDescription
      rqArea
      rqStatus
      rqTags
      rqUploaded
      rqUser
    }
  }
`


function Requirements() {

  const [getRequirement, resultRequirement] = useLazyQuery(FIND_REQUIREMENT);
  const [requirement, setRequirement] = React.useState([]);
  const showRequirement = (_id) => {    
    getRequirement({ variables: { requirementToSearch: _id } })  
  }
  React.useEffect(() => {    
      if (resultRequirement.data) {      
        setRequirement(resultRequirement.data.findRequirement)    
    }  
  }, [resultRequirement])

  const result = useQuery(ALL_REQUIREMENTS);

  // React.useEffect(() => {
  //   async function getRequirements() {
  //     try {
  //       const data = await fetch('http://localhost:3000/requiriments')
  //       const dataRequirements = await data.json()

  //       setRequirements(dataRequirements)
        
  //     } catch(e) {
  //       console.error(e);
  //     };
  //   }

  //   getRequirements();
  // }, []);

  if (result.loading)  {
    return <div>loading...</div>
  }

  return(
    <>
      {
        result.data.requirements.map(rq => 
          <Grid item xs={12} sm={6} md={6} lg={3} key={ rq._id }>
            <Request {...rq} />
          </Grid>
        )
      }
    </>
  )
}

export default Requirements;
