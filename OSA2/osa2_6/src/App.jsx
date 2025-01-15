import Filter1 from './Filter1'
import { useState , useEffect} from 'react'
import Listpeople from './Listpeople'
import pbService from './services/Phonebook'
import Notification from './Notification'
const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [alertMessage, setAlertMessage] = useState(null)
  const [persons, setPersons] = useState([])
  useEffect(()=>{
    pbService
    .getAll()
    .then(initialPersons =>{
      setPersons(initialPersons)
    })
  }, [])
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
  const hasNumber=(Person)=> {
    return Person.number
  }
  const addPerson = (event) => {
    event.preventDefault()
    console.log("button Clicked", event.target)
    const newPerson={
      name:newName,
      number:newNumber
    }
    const found1 =persons.find((element) => hasName(element) === newName);
    console.log("found:",found1)
    if (found1 === undefined) {
      pbService
      .create(newPerson)
      .then(returnedPersons => {
        setPersons(persons.concat(returnedPersons))
      setNewName('')
      setNewNumber('')
      })
      
    } else {
      const found2 =persons.find((element) => hasNumber(element) === newNumber);
    
      if (found2 === undefined) {
      pbService
      .update(found1.id, newPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !==  found1.id ? person :returnedPerson))
      })
      .catch(error => {
        console.log( `${newPerson.name} was already deleted from the server`)
        setErrorMessage( `${newPerson.name} was already deleted from the server`)
        setTimeout(() => {  setErrorMessage(null) }, 5000)
        setPersons(persons.filter(p => p.id !== dPerson.id))
      
      })
    
      } else {
        setAlertMessage( `${newname} is already added to phonebook`)
        setTimeout(() => {  setErrorMessage(null) }, 5000) 
      }
      
    }
    
  }

  const[newFilter, setNewFilter] = useState('')
  const handleFilter = (event) => {
    setNewFilter(event.target.value)
    console.log("filter",newFilter)
  }

  const FilteredPeople = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))
  //console.log(FilteredPeople)
  const deletePerson = (event) =>{
    event.preventDefault()
    console.log("deleting..!",event.currentTarget.value)
    const dPerson = persons.find(p => p.name ===event.currentTarget.value)
    if (window.confirm(`do you want to delete ${dPerson.name}`)) {
      pbService
      .pbdelete(dPerson.id)
      .then(updatedPersons => { 
        setPersons(
          persons.filter(person=> person.id !== updatedPersons.id)
        )
        console.log(updatedPersons)
      })
      .catch(error => {
        console.log( `${newPerson.name} was already deleted from the server`)
      setErrorMessage( `${dPerson.name} was already deleted from the server`)
      setTimeout(() => {  setErrorMessage(null) }, 5000)
      setPersons(persons.filter(p => p.id !== dPerson.id))
      })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
      <Notification message={alertMessage} />
      <div>
       <Filter1 value={newFilter} handler={handleFilter}></Filter1>
      </div>
      <h2>Add New</h2>
      <form onSubmit={addPerson}>
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
        <button type='submit'>add</button>
        <div>
        </div>
      </form>
      <h2>Numbers</h2>
      <Listpeople list={FilteredPeople} buttontype={deletePerson}></Listpeople>
    </div>
    
  )

}

export default App