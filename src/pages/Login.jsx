import React, { useState } from 'react'
import wallpapper from '../assets/img/wallpapper1.jpg'
import title from '../assets/img/title.png'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import ResgisterForm from '../components/ResgisterForm'


const Login = () => {
    




    return (
        <div className='flex h-screen bg-purple-950'>
            <div className='w-1/2 flex flex-col gap-10 items-center justify-center'>
                <img src={title} alt="Title: Rick and Morty" className='w-[25rem]' />
                <Routes>
                    <Route path='/' element={<LoginForm />} />
                    <Route path='/register' element={<ResgisterForm />} />
                </Routes>
            </div>
            <div className='w-1/2'>
                <img src={wallpapper} alt="" className='h-full ms-auto object-cover' />
            </div>



        </div>
    )
}

export default Login