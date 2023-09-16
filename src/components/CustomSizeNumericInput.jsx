import { useState } from "react";


function CustomSizeNumericInput({ startingValue, submitNewValue }) {

    const [inputValue, setInputValue] = useState(startingValue)

    function handleInputBlur(event) {
        submitNewValue(event.target.value)
        return
    }
    function handleInputKeyDown(event) {
        if (event.key == "Enter") {
            submitNewValue(event.target.value)
        }
        return
    }
    function handleOnChange(event) {
        setInputValue(event.target.value)
    }

    return (
        <input
            value={inputValue}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            onChange={handleOnChange}
            className='settings-input'
            type="number"
        />
    )
}

export default CustomSizeNumericInput