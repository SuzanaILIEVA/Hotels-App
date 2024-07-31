import React from 'react'
import Container from '../container'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='border-b'> 
    <Container designs='flex justify-between p-5'>
    <div className='flex gap-10 items-center'>
      <h1 className='text-2xl font-bold'>Tripster</h1>

      <nav className='flex gap-5 items-center font-semibold'>
        <Link to="/">Oteller</Link>
        <Link to="/popular" className='max-md:hidden'>Popüler</Link>
        <Link to="/admin/create">Oluştur</Link>
      </nav>
    </div>

    <div className='flex gap-3 items-center '>
        <button className='border border-blue-500 rounded-full py-1 px-5 max-md:hidden' >Kayıt Ol</button>
        <button  className='border bg-blue-500 text-white rounded-full py-1 px-5 '>Giriş Yap</button>
      </div>
    </Container>
    </header>
  )
}

export default Header
