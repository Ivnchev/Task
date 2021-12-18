import React, { Fragment } from 'react';
import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const alertStyles = makeStyles((theme: Theme) =>
    createStyles({
        alert: {
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    })
);


const AlertMessage = ({
    data
}: any) => {

    const classes = alertStyles();

    return (
        <Fragment>
            <Stack  spacing={2} className={classes.alert}>
                <Alert severity="error">{data}</Alert>
            </Stack>
        </Fragment>
    );
}

export default AlertMessage;