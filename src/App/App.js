import React from 'react'
import './App.css'
import google from '../img/google-button.jfif'
import apple from '../img/apple.jfif'
import mobile from '../img/mobile.png'

const App = () => {
  return (
    <div className='app'>
       <div className='App-left'>
              <h1>Download our app to get most out of it</h1>
              <p>Thrown moon shy donate ten ladies though ask so or boy to he going think order event music in incommed so intention 
                     defective add convinced let income months itself and houses you</p>

              <div className="download">
                     <img src={google} className='google'/>
                      <img src={apple} className='apple'/>
              </div>
       </div>

       <div className='App-right'>
         <img src={mobile}/>
       </div>
      
    </div>
  )
}

export default App
