import Select from 'react-select'

const SelectComponent = (props) => {
    return (
        <Select {...props} theme={theme => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary: '#405189',
                    primary25: '#E4E6EF'
                }})}
            />
    );
}

export default SelectComponent;
