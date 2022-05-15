import {Link} from "react-router-dom";
import {useState} from "react";
import '../../css/App.css'



function Second() {
  const [name, setName] = useState('Johny')
  // let name = "Johny"
  function onClick() {
    console.log('I clicked a button')
    setName('Gregory')
  }

  return (
    <>
      <h3>
        This is the second page. Welcome {name}
      </h3>
      <Link to={'/'}>Go to first</Link>
      <button onClick={onClick}>Click</button>
    </>
  );
}

export default Second;