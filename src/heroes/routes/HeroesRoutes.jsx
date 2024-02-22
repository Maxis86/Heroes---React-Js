import React from 'react'
import { Navbar } from '../../ui/components'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage } from '../pages/MarvelPage'
import { DcPages } from '../pages/DcPages'
import { Hero } from '../pages/HeroPage'
import { SearchPage } from '../pages/SearchPage'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className='container'>

        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPages />} />
          
          <Route path='search' element={<SearchPage />} />
          <Route path='hero/:id' element={<Hero />} />
          
          <Route path='/' element={<Navigate to="/marvel" />} />
        </Routes>

      </div>
    </>
  )
}
