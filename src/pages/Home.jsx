import React from 'react'
import Navbar from '../components/Navbar'
import { Container } from 'react-bootstrap'

function Home(){
    return(
        <>
        <Navbar/>
        <Container>
            <h1>Home 🏠</h1>
        </Container>     
        </>
    );
}

export default Home;