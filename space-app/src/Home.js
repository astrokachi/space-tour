import React from 'react'
import Navbar from './Navbar'

const Home = ({ state, handleClick, tags, activeId, setItem }) => {
    return (
        <div className='home container'>
            <div></div>
            <Navbar state={state} handleClick={handleClick} tags={tags} activeId={activeId} setItem={setItem}/>
        </div>
    )
}

export default Home
