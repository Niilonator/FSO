

const Header = (props) =>{
    console.log("head",props)
    return (
      <h1>
        {props.course.name}
      </h1>
    )
    }
    const Content = (props) => { 
      console.log("props",props)
      let texts=[]
      let i = 0
      let propList = props.parts
      console.log("proplist",propList)
      propList.forEach(part => {
        let text=<>
        <Part name={part.name} exe ={part.exercises}/>
        </>
        texts[i]=text
        console.log("proptext",texts)
        i+=1
      });
      return(
        texts.map(text => <>{text}</>)
      )
    }
  const Part = (props) => {
      console.log("part",props)
    return(
      <p>
        {props.name} {props.exe}
      </p>
    )
  }
  const Total =(props) => {
    
  let total = 0
  let start = 0
  let ar = props.parts
  console.log("ar",ar)
  total = ar.reduce((s, p) => s + p.exercises ,start
  );
  console.log('total',total)
    return(
      <div>
        <strong>
        total of {total} exercises
        </strong>
      </div>
    )
  }

const Course = (props) => {
    let texts=[]
    let i = 0
    console.log("Course props",props)
    let courses = props.course
    console.log("course",courses)
  courses.forEach(course => {
    let text=<>
    <Header course={course}/>
    <div>
    <Content parts={course.parts}/>
    </div>
    <Total  parts={course.parts} />
    </>
    texts[i]=text
    console.log("text",texts)
    i+=1
  });
    return (
      texts.map(text => <>{text}</>)
    )
    





  }
  export default Course