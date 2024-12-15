import {useContext, useEffect, useState} from 'react';
import { usePage } from '@inertiajs/react'
const Alert = () => {
    const {props:{alert}} = usePage();

    if (!alert) {
        return '';
    }

    return (
        <div className={`alert alert-${alert.type} alert-dismissible alert-additional fade show material-shadow`} role="alert">
            <div className="alert-body">
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                        <i className={`${alert.icon} fs-16 align-middle`}></i>
                    </div>
                    <div className="flex-grow-1">
                        <h5 className="alert-heading">{alert.title}</h5>
                        <p className="mb-0">{alert.subTitle}</p>
                    </div>
                </div>
            </div>
            <div className="alert-content">
                <p className="mb-0">{alert.body}</p>
            </div>
        </div>
    );
}


export default Alert;
