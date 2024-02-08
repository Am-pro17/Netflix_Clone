import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../../Utils/requests'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';


// base url for image https://image.tmdb.org/t/p/original/

function Banner() {
    let random = Math.floor(Math.random()*20)
    // const [movie,setMovie] = useState({})
    const [trend,setTrending] = useState([])
    useEffect(()=>{
        // (async() => {
        //     try{
        //         const request = await axios.get(requests.fetchNetflixOriginal)
        //         console.log(request);
        //         setMovie(request.data.results[
        //             Math.floor(Math.random()*request.data.results.length)
        //         ])
        //     } catch (err){
        //         console.log(err);
        //     }
        // }
        // )

        fetch(`https://api.themoviedb.org/3${requests.fetchDocumentaries}`)
        .then((res)=>res.json())
        .then((data)=>{
            setTrending(data.results[random])
        })
    },[])

function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + '...' : str
}

// console.log(requests.fetchNetflixOriginal);


// console.log(trend);

  return (
    <div className='banner' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${trend.backdrop_path})`}}>
        <div className="bannerInside">
        <h1 className='banner_Name'>{trend.name||trend.title}</h1>
        <div>
        <button type="button" className="btn btn-light m-3"><PlayArrowIcon/> Play</button>
         <button type="button" className="btn btn-secondary m-3"><PlaylistAddCheckIcon/> MY LISTS</button>
        </div>
        <div className='banner_description'>{truncate(trend.overview,130)}</div>
        <div className='banner_fade'></div>
        </div>
    </div>
  )
}

export default Banner
