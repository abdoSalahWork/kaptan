import Layout from "./../../layouts/Layout";
import Topbar from './../../layouts/Topbar';
import Content from "./../../layouts/Content";

const Dashboard = (props) => {
    return (
        <>
            <Topbar title={"Topbar"} breadcrumb={[]} />
            <Content>
                Dashboard
            </Content>
        </>
    );
}


Dashboard.layout = page => <Layout children={page}/>

export default Dashboard;
