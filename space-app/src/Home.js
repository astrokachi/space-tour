import React from 'react'
import Navbar from './Navbar'

const Home = ({ state, handleClick, tags, activeId, setActiveId }) => {
    return (
        <div className='home container'>
            <div></div>
            <Navbar state={state} handleClick={handleClick} tags={tags} activeId={activeId} setActiveId={setActiveId}/>
        </div>
    )
}

export default Home
