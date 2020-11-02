import './App.less';
import RouterList from './router/index'
import {Button} from 'antd'

function App() {
  return (
    <div>
      <Button type='primary'>按钮</Button>
      <RouterList />
    </div>
  );
}

export default App;
