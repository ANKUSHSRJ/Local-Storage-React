import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom";

import { useState } from "react";


function App() {
  const [isList, setIsList] = useState(false);
  const [isSubList, setIsSubList] = useState(4);
  const navigate = useNavigate();
  const authincared = JSON.parse(window.localStorage.getItem('authincared'));
  if (!authincared) {
    // this.navigate('/Login')
  }

 

  async function getData () {
    const response = await fetch(' https://hoblist.com/api/movieList', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      })
    })
    let json = await response.json()
    console.log('hi', json)
    console.log(json.result[0].voted)
  }
  
  useEffect(() => {

    getData()
     
  }, [ ])


  


  return (
    <div>
      <nav>
        <Link to='/SignUp'>Signup</Link>
        <Link to='/Login'>Login</Link>
        {/* <Link to='/GetDetails'>Login</Link> */}
        
      </nav>
      <tex>hey mama</tex>


    </div>
  )

}
export default App
