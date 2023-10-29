import React from 'react'
import Styles from './Home.module.css'
import Heroe from '../components/home/Heroe'

function Home() {
  return (
    <div className={Styles.homeContainer}>
      <Heroe/>
    </div>
  )
}

export default Home