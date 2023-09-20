
import './App.css';
import Navbar from './Navbar';
import dataset from "./data";
import Card from "./Card"

console.log(dataset)
function App() {
const cards=dataset.map((data) =>{
  return(
    <Card
    key={data.id}
    {...data}

    />

    
  )
})


  return (
    <div className="App">
      
       
        <Navbar/>
    <section className="cards-list">
      {cards}
    </section>
    </div>
  );
}

export default App;










