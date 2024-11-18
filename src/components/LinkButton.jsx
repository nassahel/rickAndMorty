import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ text, link }) => {
    return (
        <Link to={link} className='border-2 border-green-500 px-3 text-white hover:bg-green-500 duration-200 rounded-full'>
            {text}
        </Link>
    )
}

export default LinkButton