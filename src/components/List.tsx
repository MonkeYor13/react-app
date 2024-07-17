//aqui aprendioemos como recibir los datos de una lista desde le padre como props
//aprendemos como capturar un dato atraves de un evento

type Props = {
  data: string[];
};

//recuerda que cada lista o array debe llevar una id (key) unico al usar .map, en esta caso como no vienen de una DB le colocaremos el mismo nombre como key(element)

function List({ data }: Props) {
  const handleClick = (e: string) => {
    console.log(e);
  };

  return (
    <ul className="list-group">
      {data.map((element) => (
        <li
          onClick={() => handleClick(element)}
          key={element}
          className="list-group-item"
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
