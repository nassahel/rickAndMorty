import React from 'react'
import title from '../assets/img/title.png'
import rmgif from '../assets/img/rm.gif'



const Header = ({ searchInput, setSearchInput }) => {
    return (
        <div className='flex items-end justify-between pe-5 py-5 text-black bg-neutral-900'>
            <div className='flex items-center'>
                <img src={title} alt="Title: Rick and Morty" className='w-[15rem]' />
                <img src={rmgif} alt="rik and morty" className='w-24' />
            </div>
            <div className=' w-[20rem]'>
                <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    type="text"
                    placeholder='Buscar personaje...'
                    className=' w-full border border-neutral-700 px-2 py-1 outline-none'
                />
            </div>
        </div>
    )
}

export default Header