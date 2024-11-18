import React from 'react'

const CharCard = ({ item, editable = false, handleEdit }) => {

    const spanClass = 'font-semibold text-lime-300'

    return (
        <div className='flex text-sm relative bg-gradient-to-r h-[10rem] rounded-xl overflow-hidden from-purple-900 to-purple-700 text-white  shadow-md hover:scale-105 duration-200 hover:shadow-lg'>
            <div className='w-[10rem]'>
                <img src={item.image} alt={item.name} className='object-cover w-full h-full' />
            </div>
            <div className='p-3'>
                <h2 className='text-lg font-semibold'>{item.name}</h2>
                <p><span className={spanClass}>Especie: </span>{item.species}</p>
                <p><span className={spanClass}>Género: </span>{item.gender}</p>
                <p><span className={spanClass}>Planeta: </span>{item.location.name}</p>
                {editable && <button onClick={handleEdit} className='bg-white px-3 rounded-full absolute bottom-2 right-2 text-neutral-700'>Editar</button>}
            </div>
        </div>
    )
}

export default CharCard