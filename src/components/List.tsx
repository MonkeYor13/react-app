//aqui aprendioemos como recibir los datos de una lista desde le padre como props
//aprendemos como capturar un dato atraves de un evento

import { useState } from "react";

type Props = {
  data: string[];
};

//recuerda que cada lista o array debe llevar una id (key) unico al usar .map, en esta caso como no vienen de una DB le colocaremos el mismo nombre como key(element)

function List({ data }: Props) {
  const [index, setIndex] = useState(1);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i)}
          key={element}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
