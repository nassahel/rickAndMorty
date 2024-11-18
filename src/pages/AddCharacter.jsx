import React, { useState, useEffect } from 'react';
import CharCard from '../components/CharCard';
import { Link } from 'react-router-dom';
import LinkButton from '../components/LinkButton';

const AddCharacter = () => {
    const [character, setCharacter] = useState({
        name: '',
        species: '',
        gender: '',
        location: { name: '' },
        image: '',
    });
    const [addedCharacters, setAddedCharacters] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);    

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'locationName') {
            setCharacter((prev) => ({
                ...prev,
                location: { ...prev.location, name: value },
            }));
        } else {
            setCharacter((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSave = () => {
        if (character.name !== '' && character.species !== '' && character.gender !== '' && character.location.name !== '' && character.image !== '') {
            const updatedCharacters = [...addedCharacters];
            if (editingIndex !== null) {
                updatedCharacters[editingIndex] = character;
            } else {
                updatedCharacters.push(character);
            }
            localStorage.setItem('addedCharacters', JSON.stringify(updatedCharacters));
            setAddedCharacters(updatedCharacters);
            setCharacter({ name: '', species: '', gender: '', location: { name: '' }, image: '' });
            setEditingIndex(null);
        }
    };

    const handleEdit = (index) => {
        setCharacter(addedCharacters[index]);
        setEditingIndex(index);
    };

    useEffect(() => {
        const storedCharacters = JSON.parse(localStorage.getItem('addedCharacters')) || [];
        setAddedCharacters(storedCharacters);
    }, []);

    return (
        <div className="flex flex-col items-center bg-purple-950 min-h-screen p-4">
            <h1 className='text-white text-4xl font-semibold mb-10'>Agregar/ Editar personajes</h1>
            <div className="flex flex-col items-center border-2 border-neutral-200 bg-purple-500 py-2 px-2 xl:px-10 rounded-xl ">
                <h2 className="text-center mb-2 font-semibold">
                    {editingIndex !== null ? 'Editar Personaje' : 'Agregar Personaje'}
                </h2>
                <div className="flex flex-col lg:flex-row flex-wrap gap-4 my-3">
                    <input
                        type="text"
                        name="name"
                        value={character.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className='rounded-full px-2'
                        required
                        maxLength={100}
                    />
                    <input
                        type="text"
                        name="locationName"
                        value={character.location.name}
                        onChange={handleChange}
                        placeholder="Planeta"
                        className='rounded-full px-2'
                        required
                        maxLength={100}
                    />
                    <select required name="species" value={character.species} onChange={handleChange} className='rounded-full px-2' >
                        <option value="">Seleccionar Especie</option>
                        <option value="human">Humano</option>
                        <option value="humanoid">Humanoide</option>
                        <option value="alien">Alien</option>
                    </select>
                    <select required name="gender" value={character.gender} onChange={handleChange} className='rounded-full px-2'>
                        <option value="">Seleccionar Género</option>
                        <option value="male">Hombre</option>
                        <option value="female">Mujer</option>
                        <option value="genderless">Sin genero</option>
                        <option value="unknown">Desconocido</option>
                    </select>
                    <input
                        type="text"
                        name="image"
                        value={character.image}
                        onChange={handleChange}
                        placeholder="Link de Imagen"
                        className='rounded-full px-2'
                        required
                    />
                </div>
                <div className='flex w-full justify-between items-center mt-4 gap-4'>
                    <LinkButton
                        text='Volver al Home'
                        link='/home'
                    />
                    <button className="border bg-purple-700 text-white border-neutral-600  px-3 rounded-full" onClick={handleSave}>
                        {editingIndex !== null ? 'Guardar Cambios' : 'Agregar Personaje'}
                    </button>
                </div>
            </div>
            <div className="w-full">
                <h2 className='text-center text-white mt-14 mb-6 text-3xl font-semibold'>Lista de Personajes agregados</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4'>
                    {addedCharacters.length === 0 ? (
                        <p className='text-center mt-10 text-white'>No hay personajes agregados.</p>
                    ) : (
                        addedCharacters.map((item, index) => (
                            <CharCard
                                key={index}
                                editable
                                item={item}
                                handleEdit={() => handleEdit(index)}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddCharacter;
