import { useRoutes } from 'react-router-dom'
import routes from '@/router';
import { Layout } from 'antd';
const { Content } = Layout;
const GetRoutes = () => {
    return useRoutes(routes);
}
function AppMain() {
    return (
        <Content style={{ background: 'skyblue' }}>
            <GetRoutes />
        </Content>
    )
}

export default AppMain;