import React, { useState, useEffect } from 'react';

import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Stack from '@material-ui/core/Stack';
import Typography from '@material-ui/core/Typography';
import { useLocation } from 'react-router-dom';

import { WaitSkeleton } from '../../components/Skeleton';

const Detail = () => {
    const [data, setData] = useState();
    const [pending, setPending] = useState(true);
    const location = useLocation();
    const { title, api } = location.state;

    useEffect(() => {
        fetch(api)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(result => {
                setPending(false)
                setData(result.types)
            })
            .catch(error => {
                console.log("Error Fetching Data: ", error)
            })
    }, [api]);


    return (
        <Container maxWidth='md'>
            {pending &&
                <WaitSkeleton />
            }
            {!pending && data &&
                <>
                    <Typography align='center' variant='h4'>{title}</Typography>
                    <Stack direction="row" spacing={1} alignItems='center'>
                        <Typography variant='body1'>Types:</Typography>
                        {data.map(type =>
                            <Chip color='primary' variant="outlined" label={type.type.name} />
                        )
                        }
                    </Stack>
                </>
            }
        </Container>
    )
};

export default Detail;
