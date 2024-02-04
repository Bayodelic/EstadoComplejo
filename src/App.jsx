import { useState } from "react"

const App = () => {

  const [left,setLeft] = useState(0);

  const [right,setRight] = useState(0);

  const [allClicks,setAll] = useState([]);

  const [total, setTotal] = useState(0);

  const handleLeftClicks = () => {
    setAll(allClicks.concat('L'));
    const updateLeft = left + 1;
    setLeft(updateLeft);
    setTotal(updateLeft + right);
  }
  

  const handleRightClicks = () => {
    setAll(allClicks.concat('R'));
    const updateRight = right + 1;
    setRight(updateRight);
    setTotal(left + updateRight);
  }


  return (
    <div>
      {left}
      <button onClick={handleLeftClicks}>
        left
      </button>
      <button onClick={handleRightClicks}>
        right
      </button>
      {right}

      <p>
        {allClicks.join('  ')}
      </p>
      <p>Numero totales de clicks {total}</p>
    </div>
  )
}

export default App
