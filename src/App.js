import './App.less';
import RouterList from './router/index'
import { Layout, Button } from 'antd'
import Header from './components/Header/index'

function App() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Button type='primary'>按钮</Button>
        <RouterList />
      </Layout.Content>
    </Layout>
  );
}

export default App;
