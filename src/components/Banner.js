import React, { useEffect, useState } from 'react'
import instance from '../requestApis/baseurl'
import './Banner.css'


function Banner({ fetchurl }) {
  const baseurl = "https:image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([])

  const accessMovies = async () => {
    const result = await instance.get(fetchurl)
    setMovies(result.data.results[Math.floor(Math.random() * (result.data.results.length - 1))]);
  }
  console.log(movies);

  useEffect(() => {
    accessMovies()
  }, [])

  return (
    <div className='banner'
      style={{ backgroundImage: `url(${baseurl}${movies.backdrop_path})` }}>
      {movies?<div>
        <h1 className='title'>{movies?.title}</h1>
        <div className='overview'>
          <h3>
            {movies.overview?.length > 270 ? movies.overview.slice(0, 270) + "..." : movies.overview}
          </h3>
        </div>

      </div>:<h1>Loading</h1>}

    </div>


  )
}

export default Banner