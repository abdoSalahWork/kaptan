import Layout from "./../../layouts/Layout";
import Topbar from './../../layouts/Topbar';
import Content from "./../../layouts/Content";
import AccordionsComponent from "../../components/AccordionsComponent.jsx";
import Button from "../../components/Button.jsx";
import Alert from "../../components/Alert.jsx";
import Checkbox from "../../components/Checkbox.jsx";
import {useState} from "react";
import EditIconButton from "../../components/EditIconButton.jsx";
import DeleteIconButton from "../../components/DeleteIconButton.jsx";
import ImageUploader from "../../components/ImageUploader.jsx";
import ImageUploaders from "../../components/ImageUploaders.jsx";
import SelectComponent from "../../components/Select.jsx";
import {getTranslation} from "../../helpers/general_functions.js";
import Table from "../../components/Table.jsx";

const Components = (props) => {
    const {roles} = props;
    const items = [
        {
            title: "Tab 1",
            body: "Table 1 Body"
        },
        {
            title: "Tab 2",
            body: "Table 2 Body"
        },
        {
            title: "Tab 3",
            body: "Table 3 Body"
        }
    ];
    const options = [
        {
            id: 1,
            label: "Label 1"
        },
        {
            id: 2,
            label: "Label 2"
        },
        {
            id: 3,
            label: "Label 3"
        }
    ];
    const columns = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true,
        },
        {
            name: "Type",
            selector: row => row.type,
            sortable: false,
        },
        {
            name: "Name",
            selector: row => row.name_en,
            sortable: false,
        },
        {
            name: "Actions",
            cell: (row) => {
                return (
                    <>
                        <EditIconButton href={route("dashboard.index")}/>
                        <DeleteIconButton id={row.id} onConfirm={() => console.log(row) } />
                    </>
                )
            }
        }
    ];


    const [checked, setChecked] = useState(true)
    const [checked2, setChecked2] = useState(true)
    const [option, setOption] = useState(1)
    const [moption, setMoption] = useState([])
    const [selected, setSelected] = useState([]);

    return (
        <>
            <Topbar title={"Topbar"} breadcrumb={[]} />
            <Content>
                <div className="col-xxl-6">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">AccordionsComponent</h4>
                        </div>
                        <div className="card-body">
                            <AccordionsComponent items={items} id={'general'}/>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">AddButton</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <Button onClick={() => {}} title={getTranslation("add_new")} icon={"bxs-plus-square"}/>
                                </div>
                                <div className="col-3">
                                    <Button onClick={() => {}} title={getTranslation("add_new")} icon={"bxs-plus-square"} loading={true}/>
                                </div>
                                <div className="col-3">
                                    <Button onClick={() => {}} title={getTranslation("add_new")} icon={"bxs-plus-square"} color={"primary"}/>
                                </div>
                                <div className="col-3">
                                    <Button onClick={() => {}} title={getTranslation("add_new")} icon={"bxs-plus-square"} color={"primary"} loading={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Alert</h4>
                        </div>
                        <div className="card-body">
                            <Alert />
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Buttons</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <Checkbox checked={checked} label="CheckBox" onChange={(e) => setChecked(e.target.checked)}/>
                                </div>
                                <div className="col-3">
                                    <Checkbox checked={checked2} disabled={true} label="CheckBox" onChange={(e) => setChecked2(e.target.checked)}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-3">
                                    <EditIconButton href={route("dashboard.index")} />
                                </div>
                                <div className="col-3">
                                    <DeleteIconButton id={1} onConfirm={() => { console.log("Confirm Action") }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Image Uploader</h4>
                        </div>
                        <div className="card-body">
                            <ImageUploader setImage={(image) => console.log(image)} />
                            <span className="form-text text-muted">Allowed file types:  png, jpg, jpeg.</span>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Image Uploaders</h4>
                        </div>
                        <div className="card-body">
                            <ImageUploaders maxFiles={3} setImages={(images) => console.log(images)} />
                            <span className="form-text text-muted">Allowed file types:  png, jpg, jpeg.</span>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Select</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-4">
                                <SelectComponent
                                    getOptionLabel={(o) => o.label}
                                    getOptionValue={(o) => o.id}
                                    onChange={(e) => setOption(e.id)}
                                    options={options}
                                    value={options.filter(o => o.id == option)}
                                />
                            </div>
                            <div className="mb-4">
                                <SelectComponent
                                    isMulti={true}
                                    getOptionLabel={(o) => o.label}
                                    getOptionValue={(o) => o.id}
                                    onChange={(e) => setMoption(e)}
                                    options={options}
                                    value={options.filter(o => moption.map(oo => oo.id).includes(o.id))}
                                />
                            </div>
                            <div className="mb-4">
                                <SelectComponent
                                    isMulti={true}
                                    isRtl={true}
                                    getOptionLabel={(o) => o.label}
                                    getOptionValue={(o) => o.id}
                                    onChange={(e) => setMoption(e)}
                                    options={options}
                                    value={options.filter(o => moption.map(oo => oo.id).includes(o.id))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-12">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Table</h4>
                        </div>
                        <div className="card-body">
                            <Table
                                noHeader={true}
                                columns={columns}
                                data={roles}
                                keyField={'id'}
                                subHeaderComponent={<Button onClick={() => {}} title={"Delete All"} icon={"ri-delete-bin-5-line"} loading={false} color={"danger"} />}
                                selectableRows={true}
                                selectableRowsHighlight={true}
                                noContextMenu={true}
                                onSelectedRowsChange={(s) => {
                                    let selectedRowsId = []
                                    if (s.selectedCount) {
                                        selectedRowsId = s.selectedRows.map((r) => r.id)
                                    }
                                    setSelected(selectedRowsId);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Content>
        </>
    );
}


Components.layout = page => <Layout children={page}/>

export default Components;
