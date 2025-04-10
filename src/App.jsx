import { data } from "./data";
import "./index.css"

function App() {
  return (
    <div className="app">
    <Header/>
    <Form />
    <List />
    <Summary />
    </div>
  );
}

function Header() {
  return (
    <h1>🛒 Shopping List</h1>
  );
}

function Form() {
  return (
    <form>
      <input type="text" placeholder="Ürün adını giriniz" />
      <select>
        {Array.from({length:10},(v,i) => i + 1)
        .map(num => <option key={num} value={num}>{num}</option>)
        }
      </select>
      <button type="submit">Ekle</button>
     </form>
  );
}

function List() {
  return (
    <div className="list">
      {data.map((i, index) => (
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
