import './App.css';

const Hello = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div className="App">
      <Hello />
      <p>
        {a} plus {b} is {a+b}
      </p>
    </div>
  );
}

export default App;
