import React from 'react';

import Container from '@material-ui/core/Container';

import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = props => {

    return (
        <>
            <Header />
            <Container maxWidth='lg' sx={{ mt: 13, minHeight: 'calc(90vh - 65px)' }}>
                {props.children}
            </Container>
            <Footer />
        </>
    )
};