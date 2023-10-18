// import { useState } from 'react'
import Header from './components/Header.jsx'
import Info from './components/Info.jsx'
import Footer from './components/Footer.jsx'
import data from './data.js'
import './index.css'

function App() {
  console.log(data)
     const info = data.map(items=>{
      return(
        <Info
          key = {items.id}
          {...items}
        />
      )
    })
    console.log(info)

  return (
    <div>
      <Header/>
      <section className='section'>
      {info}
      </section>
      <Footer/>
    </div>
  )
}

export default App
