import React from 'react'
import Navbar from './Navbar'

const Technology = ({ state, handleClick, tags, activeId, setItem}) => {
    return (
        <div className='technology container'>
            <Navbar state={state} handleClick={handleClick} tags={tags} activeId={activeId} setItem={setItem}/>
        </div>
    )
}

export default Technology