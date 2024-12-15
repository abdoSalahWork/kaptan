import React from "react";
import { getTranslation } from "../helpers/general_functions.js";

const DeleteIconButton = ({ id, onConfirm, ...props }) => {
    return (
        <span>
            {/* Delete Button */}
            <button
                className="btn btn-danger btn-icon waves-effect waves-light"
                data-bs-toggle="modal"
                data-bs-target={`#delete-modal-${id}`}
                title={getTranslation("delete")}
                {...props}
            >
                <span className="ri-delete-bin-5-line"></span>
            </button>

            {/* Modal */}
            <div
                id={`delete-modal-${id}`}
                className="modal fade"
                tabIndex="-1"
                aria-labelledby={`delete-modal-label-${id}`}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-bottom-right">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`delete-modal-label-${id}`}>
                                {getTranslation("confirm_title_delete_action", "Confirm Action")}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            <lord-icon
                                src="https://cdn.lordicon.com/tdrtiskw.json"
                                trigger="loop"
                                colors="primary:#f7b84b,secondary:#405189"
                                style={{ width: "130px", height: "130px" }}
                            ></lord-icon>
                            <div className="">
                                <h5 className="fs-15 text-danger">
                                    {getTranslation(
                                        "confirm_body_delete_action",
                                        "Are you sure you want to delete this item? This action cannot be undone."
                                    )}
                                </h5>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-light"
                                data-bs-dismiss="modal"
                            >
                                {getTranslation("close", "Close")}
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => {
                                    onConfirm();
                                    // Dismiss the modal programmatically after confirmation
                                    document.getElementById(`delete-modal-${id}`).click();
                                }}
                            >
                                {getTranslation("confirm_delete", "Confirm")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    );
};

export default DeleteIconButton;
