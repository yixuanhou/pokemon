import React, { useState, useEffect } from 'react';

import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Stack from '@material-ui/core/Stack';
import Typography from '@material-ui/core/Typography';

import { WaitSkeleton } from '../../components/Skeleton';

const Detail = (props) => {
    const [data, setData] = useState();
    const [pending, setPending] = useState(true);
    const { name } = props.match.params


    useEffect(() => {
        const baseUrl = "https://pokeapi.co/api/v2/pokemon/"
        let api = baseUrl + name
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
        // eslint-disable-next-line
    }, []);


    return (
        <Container maxWidth='md'>
            {pending &&
                <WaitSkeleton />
            }
            {!pending && data &&
                <>
                    <Typography align='center' variant='h4'>{name.charAt(0).toUpperCase() + name.slice(1)}</Typography>
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
