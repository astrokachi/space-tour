import React from 'react'
import Navbar from './Navbar'

const Destination = ({ state, handleClick, tags, activeId, setItem}) => {
    return (
        <div className='destination container'>
            <Navbar state={state} handleClick={handleClick} tags={tags} activeId={activeId} setItem={setItem}/>
        </div>
    )
}

export default Destination
