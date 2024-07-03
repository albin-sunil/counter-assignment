import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Typography id="header" variant="h1">
          Counter
        </Typography>
        <br />
        <br />
        <Typography id="counter" variant="h2">
          {count}
        </Typography>
        <br />
        <br />
        <Button
          onClick={() => {
            setCount(--count);
          }}
          id="btminus"
          variant="contained"
        >
          _
        </Button>
        <Button
          onClick={() => {
            setCount(++count);
          }}
          id="btplus"
          variant="contained"
        >
          +
        </Button>
      </div>
    </>
  )
}

export default App
