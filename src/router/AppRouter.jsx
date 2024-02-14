import { Navigate, Route, Routes } from 'react-router-dom'

import { MarvelPage } from '../heroes/pages/MarvelPage'
import { DcPages } from '../heroes/pages/DcPages'
import { LoginPage } from '../auth/pages/LoginPage'
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DcPages/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='/' element={<Navigate to="/marvel"/>}/>
        </Routes>
    </>
  )
}