import { useState } from 'react'
const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
  
  }
  const getRandom =()=> {
    return Math.floor(Math.random() * 8);
  }
  const Display = ({text,votes,mostvotes,selected,vote}) => {
  const copy = [...votes]
  if (vote == 1) {
    copy[selected] += 1
  }
  if (mostvotes === -1) {
  return(
    <p>no anecdote has any votes yet</p>
  ) 
  }
  if (votes[selected]>mostvotes) {
    mostvotes=votes[selected]
  }
  return(
    <div>
    <p>
      {text}
    </p>
    <p>
      has {votes[mostvotes]} votes
    </p>
    </div>
  )
  }
  
const App = () => {
  const votes = Array(8).fill(0)
  let mostvotes = -1
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote , setVote] = useState(0)

  return (
    <div>

      
    <p>{anecdotes[selected]}</p>
    <Button handleClick= {() => setSelected(getRandom)} text="next anecdote"/>
    <Button handleClick={() => setVote(1)} text="vote"/>
    <Display text={anecdotes[mostvotes]} votes = {votes} mostvotes ={mostvotes} selected={selected} vote = {vote}/>
    </div>
  )
}

export default App
/*
const anecdotes = [
    
    {a:'If it hurts, do it more often.',votes:0},
    {a:'Adding manpower to a late software project makes it later!',votes:0},
    {a:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',votes:0},
    {a:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',votes:0},
    {a:'Premature optimization is the root of all evil.',votes:0},
    {a:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',votes:0},
    {a:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',votes:0},
    {a:'The only way to go fast, is to go well.',votes:0}
  ]
    */