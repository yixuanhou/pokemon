import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/ListItemButton';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

import { WaitSkeleton } from '../../components/Skeleton';

const Home = () => {
    const [data, setData] = useState();
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const api = 'https://pokeapi.co/api/v2/pokemon?limit=150'
        fetch(api)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(result => {
                setPending(false)
                setData(result.results)
            })
            .catch(error => {
                console.log("Error Fetching Data: ", error)
            })
    }, []);


    return (
        <>
            <Typography align='center' variant="h3" data-cy='title'>My Pokedex</Typography>
            {pending &&
                <WaitSkeleton />
            }
            {!pending && data &&
                <>
                    <List>
                        <Grid container spacing={1}>
                            {data.map((item, id) =>
                                <Grid item xs={3} key={id}>
                                    <ListItem>
                                        <ListItemButton
                                            component={RouterLink}
                                            to={{
                                                pathname: `/pokemon/${item.name}`,
                                                state: { title: item.name.charAt(0).toUpperCase() + item.name.slice(1), api: item.url }
                                            }}
                                        >
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                        </ListItemButton>
                                    </ListItem>
                                </Grid>
                            )
                            }
                        </Grid>
                    </List>
                </>
            }
        </>
    )
};

export default Home;
