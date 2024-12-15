import Layout from "./../../../layouts/Layout";
import Topbar from './../../../layouts/Topbar';
import Content from "./../../../layouts/Content";

const List = (props) => {
    return (
        <>
            <Topbar title={"Topbar"} breadcrumb={[]} />
            <Content>
                Admin List
            </Content>
        </>
    );
}


List.layout = page => <Layout children={page}/>

export default List;
