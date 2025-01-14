import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Content } from '../components/Content'

export const SearchPage = () => {

  const [search, setSearch] = useState('')
  const [type, setType] = useState('movie')
  const inputSearch = useRef()

  const urlSearch = `https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&query=${search}&page=${1}`;
  
  return (
    <div className='search flex items-center flex-col gap-4 mt-4'>
      <div className='border-2 border-blue-500 rounded-1g w-max2'>
        < input ref={inputSearch} type="text" className='outline-none px-3 border-r-2 border-blue-500 py-2 bg-transparent' />
        <button onClick={() => setSearch(inputSearch.current.value)} className='px-2'>Keresés</button>
      </div>
      <div className='flex gap-4'>
        <button className={`${type == "movie" ? "border-b-2" : "border-b-0"} border-blue-500 p-2 duration-100 transition-all`} onClick={() => setType('movie')}>Movies</button>
        <button className={`${type == "tv" ? "border - b - 2" : "border - b - 0"} border-blue-500 p-2 duration-100 transition-all`} onClick={() => setType('tv')}>TV Series</button>
      </div >
      {search == '' ?
        type == "movie" ?
          <p>Search for a movie</p>
          :
          <p>Search for a series</p>
        :
        <Content url={urlSearch} />
      }
    </div >
  )
}



