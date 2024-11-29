const Header = (props) =>{
  console.log(props)
  console.log(props.course.name)
  return (
    <h1>
      {props.course.name}
    </h1>
  )
  }
  const Content = (props) => { 
    console.log(props)
    return(
  <div>
    <Part part={props.parts[0].name} exe={props.parts[0].exercises} />
    <Part part={props.parts[1].name} exe={props.parts[1].exercises} />
    <Part part={props.parts[2].name} exe={props.parts[2].exercises} />
  </div>
    )
  }
const Part = (props) => {
    console.log(props)
  return(
    <p>
      {props.part} {props.exe}
    </p>
  )
}
const Total =(props) => {
let total = 0
let ar = [props.parts[2].exercises,props.parts[2].exercises,props.parts[2].exercises]
ar.forEach(value=> {
  total += value
  console.log(total,value)
});
console.log(total)
  return(
    <div>
      <p>
      {total}
      </p>
    </div>
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
    <>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total  parts={course.parts} />
      </>
  )
}


export default App