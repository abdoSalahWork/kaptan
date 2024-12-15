const Button = ({title, icon, onClick, loading = false, color = "dark", ...props}) => {
    return (
        <button onClick={onClick} {...props} className={`btn btn-${color} btn-label waves-effect waves-light text-uppercase btn-load mx-3`}>
            {
                loading ?
                (
                    <span>
                        <i className="label-icon align-middle fs-16 me-2">
                            <span className="spinner-border flex-shrink-0" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </span>
                        </i>
                        Loading...
                    </span>
                ) :
                (
                    <span>
                        <i className={`bx ${icon} label-icon align-middle fs-16 me-2`}></i>
                        {title}
                    </span>
                )
            }
        </button>
    );
}


export default Button;
