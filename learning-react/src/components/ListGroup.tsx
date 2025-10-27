import { type MouseEvent, useState } from "react";

// i prop sono i parametri in input. non dovrebbero mai essere modificati internamente
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
  // tool builtin di react per creare hook che modificano la pagina dinamicamente. nello specifico questo è uno hook di 'stato'
  // ogni component avrà il suo stato, ovvero non viene condiviso tra component dello stesso tipo
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /* 
  // questo non va bene perché c'è ripetizione del titolo
  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No items</p>
      </>
    ); */

  const getMessage = () => {
    return props.items.length === 0 && <p>No item found</p>; // questo funziona perché 'true && stringa' ritorna la stringa, mentre 'false && stringa' ritorna false
  };

  // event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1 onClick={handleClick}>{props.heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
