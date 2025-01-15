
const Person = ({name,number,buttonfunction}) => 
(
<div>
    Name: {name}
    <p>Number: {number}</p>
    <button onClick={buttonfunction} value={name}>delete</button>
</div>
)
export default Person