import Person from './Person'
import { useState , useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])
  const [persons, setPersons] = useState([])
const [newNumber, setNewNumber] = useState('')

  const [newName, setNewName] = useState('')
  const handleNumberAddition = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNameAddition = (event) => {
  setNewName(event.target.value)
  }
  const hasName=(Person)=> {
    return Person.name
  }
  const addName = (event) => {
    event.preventDefault()
    console.log("button Clicked", event.target)
    const Person={
    name:newName,
    number:newNumber
    }
    //console.log(Person,persons)
    const found =persons.find((element) => hasName(element) === newName);
    //console.log("found:",found)
    if (found === undefined) {
      setPersons(persons.concat(Person))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }
  const [newFilter, setNewFilter] = useState('')
  const handleFilter = (event) => {
    setNewFilter(event.target.value)
    console.log("filter",newFilter)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter names:<input
        value={newFilter}
        onChange={handleFilter}
        />
      </div>
      <h2>Add New</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
          value ={newName}
          onChange={handleNameAddition}
          />
        </div>
        <div>number: <input
        value={newNumber}
        onChange={handleNumberAddition}
         />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase())).map(filteredperson => 
        <Person key={filteredperson.name} name ={filteredperson.name} number ={filteredperson.number} />
      )}
      <div>debug: {newNumber}</div>
    </div>
    
  )

}

export default App