import React from 'react'
import Navbar from './Navbar'

const Crew = ({ state, handleClick, tags, activeId, setItem}) => {
    return (
        <div className='crew container'>
            <Navbar state={state} handleClick={handleClick} tags={tags} activeId={activeId} setItem={setItem}/>
        </div>
    )
}

export default Crew
