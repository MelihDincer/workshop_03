import { useState } from "react";
import "./index.css"

function App() {
  const [items,setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);

  }
  return (
    <div className="app">
    <Header/>
    <Form onAddItem={handleAddItem}/>
    <List items={items}/>
    <Summary />
    </div>
  );
}

function Header() {
  return (
    <h1>🛒 Shopping List</h1>
  );
}

function Form({onAddItem}) {

  const [title, setTitle] = useState("aaa");
  const [quantity, setQuantity] = useState(1);
  
  function handleFormSubmit(e) {

    e.preventDefault();
    const item = {id: Date.now(), title, quantity, completed:false};
    console.log(item);

    onAddItem(item);
    setTitle('');
    setQuantity(1);
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Ürün adını giriniz" value={title} onChange={(e) => setTitle(e.target.value)} />
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({length:10},(v,i) => i + 1)
        .map(num => <option key={num} value={num}>{num}</option>)
        }
      </select>
      <button type="submit">Ekle</button>
     </form>
  );
}

function List({items}) {
  return (
    <div className="list">
      {items.map((i, index) => (
        <Item item={i} key={index}/>
      ))}
    </div>
  );
}

function Item({item}) {
  return (
    <li>
      <span style={item.completed ? {textDecoration:"line-through"} : {}}>{item.quantity} {item.title}</span>
      <button>X</button>
    </li>
  );
}

function Summary() {
  return (
    <footer className="summary">Alışveriş sepetinizde 10 ürün bulunmaktadır.</footer>
  );
}

export default App
