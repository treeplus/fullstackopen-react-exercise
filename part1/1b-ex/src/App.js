const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercise1}/>
      <Part part={props.part2} exercise={props.exercise2}/>
      <Part part={props.part3} exercise={props.exercise3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.val1 + props.val2 + props.val3}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} exercise1={course.parts[0].exercises} part2={course.parts[1].name} exercise2={course.parts[1].exercises} part3={course.parts[2].name} exercise3={course.parts[2].exercises} />
      <Total val1={course.parts[0].exercises} val2={course.parts[1].exercises} val3={course.parts[2].exercises}/>
    </div>
  )
}

export default App;
