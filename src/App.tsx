import { useState } from "react";
import Button from "./components/Button"
import Card, { CardBody } from "./components/Card";
import List from "./components/List";


function App() {
  const [data, setData] = useState(["person1", "person2", "person3"]);

  const [isLoding, setIsLoding] = useState(false)
  const handleClick = ()=> setIsLoding(!isLoding)

  const addMinios = ()=> setData([...data, 'Minion'])
  const delMinios = ()=> setData(data.slice(0, -1))


  return (
    <Card>
      <CardBody title="hola" text="este es el texto" />
      <Button onClick= {addMinios} >Agregar</Button>
      <Button onClick= {delMinios} >Eliminar</Button>
      <List data={data} />
      <Button isLoding={isLoding} onClick= {handleClick} >Hola mundo</Button>
    </Card>
  );
}

export default App;
