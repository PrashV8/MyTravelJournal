import './App.css';
import Navbar from './Navbar';
import dataset from "./data";
import Card from "./Card"

function chunkArray(arr, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
}

function App() {
    const chunkedCards = chunkArray(dataset, 3);

    const rows = chunkedCards.map((row, rowIndex) => (
        <div key={rowIndex} className="cards-list">
            {row.map((data) => (
                <Card key={data.id} {...data} />
            ))}
        </div>
    ));

    return (
        <div className="App">
            <Navbar />
            {rows}
        </div>
    );
}

export default App;












