
const Checkbox = ({checked=0, label='', ...props}) => {
    return (
        <div className="form-check form-switch form-switch-md">
            <input className="form-check-input" {...props} type="checkbox" role="switch" id="SwitchCheck1" checked={checked} />
            <label className="form-check-label" htmlFor="SwitchCheck1">{label}</label>
        </div>
    );
}

export default Checkbox;
