import Head from 'next/head'

import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import SiteItem from '../components/SiteItem';

import data from '../data/frontendPrepData.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Prep</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&display=swap" rel="stylesheet" />
      </Head>
      <div className='dark-bg'>
        <Navbar list={data}/>
        <Container className='center-items'>
          <div className='title'>
            <h1>Frontend Prep</h1>
          </div>
          <SiteItem list={data}/>
        </Container>
      </div>
    </>
  )
}
