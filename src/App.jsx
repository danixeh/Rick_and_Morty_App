import  { useState, useEffect } from 'react'
import style from './Style.css'
import axios from 'axios'
import ResidentInfo from './components/ResidentInfo.jsx'
import Location from './components/Location'
import SecondSTree from './components/SecondSTree'
import useCounter from './hooks/useCounter'
import useFetch from './hooks/useFetch'

function App() {

  const [location, setLocation] = useState()
  const [searchLoc, setSearchLoc] = useState()
  const [searchInput, setSearchInput] = useState('')  

  let numberLocation = Math.floor(Math.random() * (126 - 1) + 1)

  useEffect(() => {
    let numberLocation
    if (searchInput === '') {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1)      
    } else {
      numberLocation = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))    
    }, [searchInput]);
    

    const handleSubmit = e => {
      e.preventDefault()
      setSearchInput(e.target.search.value);
    }



  return (   
    <div className="App"> 
      <header className="img-hdr">
      <img className="img-hr" src="/images/picture1.png" alt="" />
      <img className="img-hr-on" src="/images/picture2.png" alt="" />
      </header>
      <body>  
        <form onSubmit={handleSubmit}> 
       
       <a href="https://rickandmortyapi.com/" target="_blank"><img className="ico" url="https://rickandmortyapi.com/" src="/images/ico.png" alt="" /></a>
        <input id='search' type="text" />
        <button className="btn-bd" >Search</button>
      </form>
      <Location location={location} />           
      <div className="class-container" >  
        {
          location?.residents.map(url =>(
          <ResidentInfo key={url} url={url} />
    ))
      }         
   
        </div>
            
      </body>
    </div>
)
}


export default App
