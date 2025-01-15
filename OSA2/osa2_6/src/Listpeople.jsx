import Person from "./Person";
const Listpeople = (props) =>{
const ListItems = props.list.map(person => <li key={person.name}>
     <Person id={person.id} name={person.name} number={person.number} buttonfunction={props.buttontype}></Person>
     </li>)
return (
    <ul>{ListItems}</ul>
)
}
export default Listpeople