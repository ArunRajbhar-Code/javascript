import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)

      })
      .catch((error) => {
        console.log(error);


      })
  })
  return (
    <><h1>Jokes Application</h1>
      {jokes.map((joker) => (
        <div key={joker.id}>{joker.joke}</div>
      ))}

    </>
  )
}

export default App
