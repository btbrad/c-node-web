import './App.less';
import RouterList from './router/index'
import { Layout } from 'antd'
import Header from './components/Header/index'
import { useSelector } from 'react-redux'
function App() {

  console.log(useSelector(state => state))

  return (
    <Layout>
      <Header />
      <Layout.Content>
        {/* <Button type='primary'>按钮</Button> */}
        <RouterList />
      </Layout.Content>
    </Layout>
  );
}

export default App;
