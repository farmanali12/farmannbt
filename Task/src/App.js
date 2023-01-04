import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from './App.style'
import Error from './Error'
import Home from './home'
import Login from './userAuth/login'

const App = () => {

    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='*' element={<Error />} />
                    <Route path='/error' element={<Error />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Container>
    )
}
export default App