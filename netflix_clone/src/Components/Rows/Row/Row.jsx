import React from 'react'
import SingleRows from '../SingleRows/SingleRows'
import requests from '../../../Utils/requests';

function Row() {

  return (
    <>
    <SingleRows type={requests.fetchTrading} title='Trending'/>
    <SingleRows type={requests.fetchRomanceMovies} title='Animation'/>
    <SingleRows type={requests.fetchActionMovies} title='Action'/>
    <SingleRows type={requests.fetchComedyMovies} title='Comedy'/>
    <SingleRows type={requests.fetchDocumentaries} title='Crime'/>
    <SingleRows type={requests.fetchNetflixOriginal} title='Original'/>
    </>
  )
}

export default Row