import { useState } from 'react';

const History = (props) => {
  if (props.allClicks.length == 0) {
    return (
      <div>
        The app is used by pressing the buttons.
      </div>
    )
  }
  return (
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [ clicks, setClicks ] = useState({
    left: 0,
    right: 0
  })

  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    /*
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
    */

    // setClicks({...clicks, left: clicks.left + 1})
    
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    /*
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
    */

    // setClicks({...clicks, right: clicks.right + 1})
    //
    setAll(allClicks.concat('R'))
    setLeft(right + 1)
  }

  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {clicks.right}
      <p>{allClicks.join(' ')}</p>
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
