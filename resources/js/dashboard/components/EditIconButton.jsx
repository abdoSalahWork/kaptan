import {getTranslation} from "../helpers/general_functions.js";
import {Link} from "@inertiajs/react";

const EditIconButton = ({href, ...props}) => {
    return (
        <Link className="btn btn-info btn-icon waves-effect waves-light mx-2" type="button" as="button" href={href} data-toggle="tooltip" title={getTranslation("edit")} {...props}>
            <i className="bx bx-edit"></i>
        </Link>
    );
}

export default EditIconButton;
