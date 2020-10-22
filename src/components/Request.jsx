import React from 'react';
import '../css/request.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
    cardRequest: {
        padding: '15px 15px',
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
    },
})

function Request({ rqName, rqArea, rqDescription }) {
    const classes = useStyle();
    return (
        <Card className={ classes.cardRequest }>
            <Typography variant='h6'>
                { rqName }
            </Typography>
            <Typography variant="overline" color='secondary'>
                { rqArea.areaName }
            </Typography>
            <Typography variant="body1">
                { rqDescription }
            </Typography>
        </Card>           
  )
}

export default Request;