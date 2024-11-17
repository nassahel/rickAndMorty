import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import CharCard from '../components/CharCard';

const Home = () => {
    const [charactersData, setCharactersData] = useState(null);
    const [localCharacters, setLocalCharacters] = useState([]); 
    const [searchInput, setSearchInput] = useState("");
    const [page, setPage] = useState(1);
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');

    let spe = species !== '' ? `&species=${species}` : '';
    let gen = gender !== '' ? `&gender=${gender}` : '';

    const filteredCharacters = charactersData
        ? charactersData.results.filter(character =>
            character.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        : [];

    useEffect(() => {
        const fetchCharacters = async () => {
            const data = await fetchData(page, spe, gen);
            if (data) setCharactersData(data);
        };

        const storedCharacters = JSON.parse(localStorage.getItem('addedCharacters')) || [];
        setLocalCharacters(storedCharacters);

        fetchCharacters();
    }, [page, species, gender]);

    const combinedCharacters = [...filteredCharacters, ...localCharacters];

    const nextPage = () => {
        page < charactersData.info.pages && setPage(page + 1);
    };

    const previousPage = () => {
        page > 1 && setPage(page - 1);
    };

    

    return (
        <div className='bg-purple-950 min-h-screen text-white flex flex-col'>
            <Header searchInput={searchInput} setSearchInput={setSearchInput} />
            <div className='flex flex-col lg:flex-row gap-4 items-center justify-between mt-10 px-4'>
                <div className='flex flex-col lg:flex-row items-center gap-4'>
                    <p>Filtrar por :</p>
                    <select
                        name="especie"
                        value={species}
                        onChange={(e) => setSpecies(e.target.value)}
                        id="especie"
                        className='border text-black border-neutral-500 w-56 rounded-full px-2'
                    >
                        <option value="">Especie</option>
                        <option value="human">Humano</option>
                        <option value="humanoid">Humanoide</option>
                        <option value="alien">Alien</option>
                    </select>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        name="genero"
                        id="genero"
                        className='border text-black border-neutral-500 w-56 rounded-full px-2'
                    >
                        <option value="">Genero</option>
                        <option value="male">Hombre</option>
                        <option value="female">Mujer</option>
                        <option value="genderless">Sin genero</option>
                        <option value="unknown">Desconocido</option>
                    </select>

                    {(species !== '' || gender !== '') && (
                        <button
                            onClick={() => {
                                setGender('');
                                setSpecies('');
                            }}
                            className='border px-3 hover:bg-green-500 duration-150 border-neutral-600 rounded-full'
                        >
                            Limpiar filtros
                        </button>
                    )}
                </div>
                <Link to="/add" className='border border-neutral-600 px-3 hover:bg-green-500 duration-200 rounded-full'>
                    Agregar/Editar personajes
                </Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4'>
                {combinedCharacters.map((item, i) => (
                    <CharCard item={item} key={i} />
                ))}
            </div>

            <div className='flex mx-auto mt-auto w-fit py-5 font-semibold'>
                <button className='hover:text-green-400' onClick={previousPage}>Anterior</button>
                <p className='bg-neutral-200 px-3 text-black flex items-center w-5 justify-center mx-2 text-sm rounded-full'>{page}</p>
                <button className='hover:text-green-400' onClick={nextPage}>Siguiente</button>
            </div>
        </div>
    );
};

export default Home;
