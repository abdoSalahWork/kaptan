import { Link } from '@inertiajs/react'

export default function Topbar({children, title, breadcrumb=[]})  {

    const BreadcrumbRender = () => {
        if (!breadcrumb.length) {
            return '';
        }
        return (
            <ul className="breadcrumb m-0">
                {breadcrumb.map((bread, i) => {
                    return (
                        <li className="breadcrumb-item" key={i}>
                            <Link className="text-muted" href={bread.href}>{bread.title}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">Page Title</h4>

                    <div className="page-title-right">
                        <BreadcrumbRender />
                    </div>

                </div>
            </div>
        </div>
    );
}
