import {useState, useEffect, useRef} from 'react';
import { router } from '@inertiajs/react'
import debounce from 'lodash.debounce';

const SearchComponent = ({originalData, queries}) => {
    const [text, setText] = useState(queries?.s || '');
    const searchInput = useRef()

    useEffect(() => {
        if (queries?.s) {
            searchInput.current.focus();
        }
        return () => handleSearchWithDebounce.cancel()
    }, [])

    const handleSearchWithDebounce = debounce((value) => {
        setText(value)
        router.get(originalData.path, {s: value})
    }, 100);

    const handleChange = (e) => {
        handleSearchWithDebounce(e.target.value);
    }

    return (
        <div>
            <input
                ref={searchInput}
                className={'form-control'}
                type="text"
                value={text}
                onChange={handleChange}
                placeholder={'search...'}
            />
        </div>
    );
}

export default SearchComponent;
