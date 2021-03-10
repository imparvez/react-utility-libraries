import { useEffect, useState } from 'react'
import numberFormat from './utilities/numberFormat'
import ExchangeCrypto from './components/ExchangeCrypto/index'
// Using Modal Hook
import useModalState from './hooks/useModalState'
import useConfirmationDialog from './hooks/useConfirmationDialog'
import useDebounce from './hooks/useDebounce'

function App() {
  {/* Testing Modal Hook */}
  const { onToggle, isOpen} = useModalState()
  {/* Testing Debounce Hook */}
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 1000)
  {/* Testing Confirmation Modal Hook */}
  const handleDeleteConfirm = () => {
    // Delete Action
  }
  const { Dialog, onOpen } = useConfirmationDialog({
    headerText: 'Delete this record?',
    bodyText: 'Are you sure you want to delete this record ? This can\'t be undone',
    onConfirmClick: handleDeleteConfirm,
    confirmationButtonText: 'Yes, Delete',
  })
  const handleDeleteClick = () => {
    onOpen()
  }

  {/* Testing Modal Hook */}
  const handleModalClick = () => {
    onToggle();
  }

  useEffect(() => {
    if(debouncedSearchTerm) {
      console.log('debouncedSearchTerm ', debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

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
      {/* Testing Confirmation Modal Hook */}
      <Dialog />
      <button onClick={() => handleDeleteClick()}>Initiate Delete Confirmation Modal</button>
      {/* Testing Debounce Hook */}
      <input
        type='text'
        placeholder='Search for context'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default App;
