import './App.css';

const Hello = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

const Greeting = (props) => {
  return (
    <div>
      <p> 
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  // greeting
  const name = "Peter"
  const age = 10

  return (
    <div className="App">
      <Hello />
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Greeting name="Maya" age={26+10} />
      <Greeting name={name} age={age} />
    </div>
  );
}

export default App;
