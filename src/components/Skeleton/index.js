import React from 'react';

import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/core/Skeleton';

export const WaitSkeleton = () => {

    return (
        <Box>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
        </Box>
    )
};
