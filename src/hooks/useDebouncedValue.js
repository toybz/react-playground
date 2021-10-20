import {useCallback, useEffect, useState} from 'react';
import _debounce from 'lodash/debounce';

export const useDebouncedValue = (value, ms = 100) => {
    const [debounced, setDebounced] = useState(value)
    const updateDebounce =  (value)=>{
        setDebounced(value)
    }

 const debounce = useCallback(_debounce(updateDebounce, ms), [])


    return {debounced,  debounce}
}