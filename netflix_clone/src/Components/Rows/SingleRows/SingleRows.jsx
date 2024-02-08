import React, { useEffect, useState } from 'react'
import './SingleRows.css'


// base image url https://image.tmdb.org/t/p/original/

function SingleRows({type,title}) {
    const[list,setList] = useState([])
    const[trailer,setTrailer] = useState('')
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3${type}`)
        .then((res)=>res.json())
        .then((data)=>setList(data.results))
    },[])
   console.log(list);

  return (
    <>
    <div className='movie_list_wrapper_outside'>   
          <h2>{title}</h2>
    <div className='movie_list_wrapper'>
{
    list.map((current,index)=>{
        console.log(current.poster_path);
        let row = (
            <div className='movie_list' key={index}>
                <div className='images_Wrapper '>
                    <div className='Single_image'><img src={`https://image.tmdb.org/t/p/original/${current.poster_path}`} alt="" /></div>
                </div>
            </div>
        )
        return row
    })
}
</div>
</div>
    </>
  )
}

export default SingleRows