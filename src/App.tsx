import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["person1", "person2", "person3"];

  return (
    <Card>
      <CardBody title="hola" text="este es el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;
