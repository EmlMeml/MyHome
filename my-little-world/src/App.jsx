import { useState } from 'react'
import profileImage from './assets/profile.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="top">
        <div id="top-left">
          <h1>Hi, I'm Melli</h1>
          <p>I'm a web developer and designer. I love to create beautiful and functional websites.</p>
        </div>
        <div id="top-right">
          <img src={profileImage} alt="Melli" style={{ width: '50%', height: 'auto' }} />
        </div>
      </section>
      
      <section id="center">
        <div id="center-content">
          <h2>My Skills</h2>
          <p>Here are some of the technologies I'm proficient in:</p>
        </div>
      </section>


      <section id="spacer">
        <div id="spacer-content">
          <h2>Projects</h2>
          <p>Check out some of my recent projects below.</p>
        </div>
      </section>
    </>
  )
}

export default App
