import Layout from "./../../../layouts/Layout";
import Topbar from './../../../layouts/Topbar';
import Content from "./../../../layouts/Content";

const Create = (props) => {
    return (
        <>
            <Topbar title={"Topbar"} breadcrumb={[]} />
            <Content>
                Create Admin
            </Content>
        </>
    );
}


Create.layout = page => <Layout children={page}/>

export default Create;
