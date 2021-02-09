import numberFormat from './utilities/numberFormat'

function App() {
  return (
    <div className="App">
      {numberFormat(50000)}
      {numberFormat(150000)}
    </div>
  );
}

export default App;
