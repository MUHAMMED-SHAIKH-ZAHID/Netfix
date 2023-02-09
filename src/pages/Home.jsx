import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
     <Main />
     
     <Row rowID='1'  title='Popular' fetchURL={requests.Popular} />
     <Row rowID='2' title='Similar Movies' fetchURL={requests.watchProvider} />
     <Row rowID='3' title='Trending' fetchURL={requests.Trending} />
     <Row rowID='4' title='People'fetchURL={requests.requestTopRated} />
     <Row rowID='5' title='Tv Shows' fetchURL={requests.requestUpcoming} />
    </>
  )
}

export default Home