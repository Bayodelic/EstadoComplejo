import { useState } from "react"

const History = (props) => {
  console.log(props);
  if(props.allClicks.length === 0){
    return(
      <div>
        <p>The app will start pressing de buttons</p>
      </div>
    )
  }
  {
    return(    
      <div>
        <p> The history of clicks is {props.allClicks.join('  ')} </p>
      </div>
    )
  }
}

const Button = ({handleClicks,text}) => {
  return(
    <button onClick={handleClicks}>
      {text}
    </button>
  )
}

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
      <Button handleClicks={handleLeftClicks} text='left'/>
      <Button handleClicks={handleRightClicks} text='right'/>
      
      {right}


      <History allClicks={allClicks}/>
      <p>Numero totales de clicks {total}</p>
    </div>
  )
}

export default App
