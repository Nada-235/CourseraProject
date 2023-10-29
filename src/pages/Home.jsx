import React from 'react'
import Styles from './Home.module.css'
import Heroe from '../components/home/Heroe'
import WeekSpecials from '../components/home/WeekSpecials'

function Home() {
  return (
    <div className={Styles.homeContainer}>
      <Heroe />
      <WeekSpecials/>
    </div>
  )
}

export default Home