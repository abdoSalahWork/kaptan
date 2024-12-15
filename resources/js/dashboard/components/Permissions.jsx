import { usePage } from '@inertiajs/react'

const Permissions = ({hasPermissions=[], children}) => {
    const { user:{permissions} } = usePage().props;

    for (let i = 0; i < hasPermissions.length; i++) {
        if (!permissions.includes(hasPermissions[i])) {
            return '';
        }
    }

    return (children);
}

export default Permissions;
