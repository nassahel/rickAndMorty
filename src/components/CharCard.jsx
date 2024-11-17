import React from 'react'

const CharCard = ({ item, editable = false, handleEdit }) => {
    return (
        <div className='flex text-sm relative bg-gradient-to-r from-purple-900 to-purple-700 text-white  shadow-md hover:scale-105 duration-200 hover:shadow-lg'>
            <div className='w-[10rem]'>
                <img src={item.image} alt={item.name} className='w-full object-cover h-full' />
            </div>
            <div className='p-3'>
                <h2 className='text-lg font-semibold'>{item.name}</h2>
                <p><span className='font-semibold text-lime-300'>Especie: </span>{item.species}</p>
                <p><span className='font-semibold text-lime-300'>Género: </span>{item.gender}</p>
                <p><span className='font-semibold text-lime-300'>Planeta: </span>{item.location.name}</p>
                {editable && <button onClick={handleEdit} className='bg-white px-3 absolute bottom-2 right-2 text-neutral-700'>Editar</button>}
            </div>
        </div>
    )
}

export default CharCard