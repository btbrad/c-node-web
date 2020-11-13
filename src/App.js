import './App.less';
import RouterList from './router/index'
import { Layout } from 'antd'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

function App() {

  return (
    <Layout>
      <Header />
      <Layout.Content className="container">
        {/* <Button type='primary'>按钮</Button> */}
        <div className="wrapper">
          <RouterList />
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;
