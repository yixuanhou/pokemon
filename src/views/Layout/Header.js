import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Stack from '@material-ui/core/Stack';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {

    return (
        <AppBar>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Stack direction='row' spacing={2}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} data-cy='site-name'>
                        Pokemon-Demo
                    </Typography>
                    <Button variant="text" component={RouterLink} to={`/`}
                        sx={{
                            color: '#FFFFFF',
                            '&:hover': {
                                background: '#CCC9C0'
                            }
                        }}
                        data-cy='menu-item'
                    >
                        Home
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
};