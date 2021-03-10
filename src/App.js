import numberFormat from './utilities/numberFormat'
import ExchangeCrypto from './components/ExchangeCrypto/index'
// Using Modal Hook
import useModalState from './hooks/useModalState'

function App() {
  const { onToggle, isOpen} = useModalState()

  const handleModalClick = () => {
    onToggle();
  }

  return (
    <div className="App">
      {/* Testing of Number Format Intl Object */}
      {numberFormat(50000)}
      {numberFormat(150000)}
      {/* Testing of Exchange Crypto */}
      <ExchangeCrypto />
      {/* Testing Modal Hook */}
      <button onClick={() => handleModalClick()}>Open Modal</button>
      <div>Modal State: {isOpen ? 'open' : 'close'}</div>
    </div>
  );
}

export default App;
