
export default function Wrapper({children}) {
    return (
        <div>
            <div id="preloader">
                <div id="status">
                    <div className="spinner-border text-primary avatar-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
            <div className="vertical-overlay"></div>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
