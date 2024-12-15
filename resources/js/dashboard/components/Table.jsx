import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import SearchComponent from "./SearchComponent";
import { usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';

const SubHeaderComponent = ({ subHeaderComponent = '', ...props }) => {
    return (
        <>
            <SearchComponent {...props} />
            {subHeaderComponent}
        </>
    );
};

const Table = ({ data, columns, searchServer = false, subHeaderComponent, ...props }) => {
    console.log(data?.data)
    const { props: { queries } } = usePage();
    return (
        <>
            <DataTable
                {...props}
                data={data?.data || []}
                columns={columns}
                highlightOnHover={true}
                pagination={true}
                subHeader={true}
                subHeaderComponent={
                    <SubHeaderComponent
                        originalData={data}
                        queries={queries}
                        subHeaderComponent={subHeaderComponent}
                    />
                }
                paginationTotalRows={data?.total || 0}
                paginationPerPage={data?.per_page || 10}
                paginationServer={true}
                paginationDefaultPage={data?.current_page || 1}
                onChangePage={(page, totalRows) => {
                    if (data?.path) {
                        router.get(data.path, { page: page, ...queries });
                    }
                }}
                onChangeRowsPerPage={(currentRowsPerPage, currentPage) => {
                    if (data?.path) {
                        router.get(data.path, { page: currentPage, perpage: currentRowsPerPage, ...queries });
                    }
                }}
            />
        </>
    );
};

export default Table;
