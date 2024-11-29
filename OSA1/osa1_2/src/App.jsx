import { useState } from 'react'
const StatisticLine = ({item,text}) => {
  console.log(item, text)
  return(
    <tr>
    <td>
      {text}
      </td>
      <td>
      {item}
    </td>
    </tr>
  )
}
const Button = ({handleClick, text}) => {
return(
  <button onClick={handleClick}>
    {text}
  </button>
)
}
const Statistics =({good,neutral,bad}) => {
  let all = good+neutral+bad
  let avrg = (good-bad)/all
  let pospc = good/all
  pospc = (100*pospc)+' %'
  if (all ===0) {
  return(
    "No feedback given"
  )
  }
  return(
    <table>
  <tbody>
    <StatisticLine item={good} text = "good"/>
    <StatisticLine item={neutral} text = "neutral"/>
    <StatisticLine item={bad} text = "bad"/>
    <StatisticLine item={all} text ="all"/>
    <StatisticLine item={avrg} text ="average"/>
    <StatisticLine item={pospc} text ="positive"/>
  </tbody>
  </table>
  )
  
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <>
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text = {"good"}/>
      <Button handleClick={() =>setNeutral(neutral+1)} text = {"neutral"}/>
      <Button handleClick={() => setBad(bad+1)} text = {"bad"}/>
      <h1>Statistics</h1>
    </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App