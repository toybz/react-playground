import {useDebouncedValue} from "../hooks/useDebouncedValue";
import {useState} from "react";


export const DebouncePage = ()=>{

    const [inputValue, setInputValue] = useState('')

    const {debounced, debounce} = useDebouncedValue(inputValue, 1000)


   const inputChangeHandler = (event)=>{
        const value = event.target.value
       setInputValue(value)
       debounce(value)
   }

    return (
        <>
        <p>Debouced Test is {debounced}</p>

            <input value={inputValue} onChange={inputChangeHandler}/>
        </>

    )
}