import React from 'react';

import Typography from '@material-ui/core/Typography';

export const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
        <Typography align='center' sx={{ height: 5 }}>
            © {getYear()} Fake Pokemon Limited. All Rights Reserved.
        </Typography>
    );
};