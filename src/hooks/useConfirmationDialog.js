import { useState, useCallback } from 'react'

const ConfirmationDialog = ({
    headerText,
    bodyText,
    isOpen,
    confirmationButtonText,
    onCancelClick
}) => (
    <div>
        {isOpen ? (
            <div>
                <h2>{headerText}</h2>
                <p>{bodyText}</p>
                <button onClick={() => onCancelClick()}>{confirmationButtonText}</button>
            </div>
        ): null}
    </div>
)

const useConfirmationDialog = ({
    headerText,
    bodyText,
    confirmationButtonText,
    onConfirmClick
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => setIsOpen(true)

    const Dialog = useCallback(
        () => (
            <ConfirmationDialog
                headerText={headerText}
                bodyText={bodyText}
                isOpen={isOpen}
                onConfirmClick={onConfirmClick}
                onCancelClick={() => setIsOpen(false)}
                confirmationButtonText={confirmationButtonText}
            />
        ),
        [isOpen]
    )

    return {
        onOpen,
        Dialog
    }
}

export default useConfirmationDialog