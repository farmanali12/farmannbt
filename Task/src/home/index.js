import React from 'react'
import { HomeContainer } from './style'

const Home = () => {
    return (
        <HomeContainer>
            <div>
                <span>W</span>ellcome  <span>M</span>ukesh <span>S</span>ingh
            </div>
            <div>
                <button className='btn'> logout</button>
            </div>
        </HomeContainer >
    )
}

export default Home