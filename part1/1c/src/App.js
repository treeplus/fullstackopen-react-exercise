import { useState } from 'react'

const Hello = (props) => {
  /*
  const name = props.name
  const age = props.age 
  */

  const {name, age} = props 

  /*
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  */

  const bornYear = () => new Date().getFullYear() - age 

  return (
    <div>
      <p>
        Hello {name},  you are {age} years old.
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Counter = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

/*
const App = () => {
  const name = 'Peter'
  const age = 10
  let counter = 1

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <p>
        Counter: <Counter counter={counter} />
      </p>
    </div>
  )
}*/

// Stateful component
// Event Handling
// Event handler is a function
const App = () => {
  const [ counter, setCounter ] = useState(0)
  /*
  const handleClick = () => {
    console.log('clicked')
  }*/

  /*
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )*/

  const increaseByOne = () => {
    setCounter(counter + 1)
  }

  const setToZero = () => {
    setCounter(0)
  }
  
  return (
    <div>
        <div>{counter}</div>
        <button onClick={increaseByOne}>
          plus
        </button>
        <button onClick={setToZero}>
          zero 
        </button>
    </div>
  )
}

export default App;
