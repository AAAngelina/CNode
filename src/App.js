import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import {routes} from './router';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Layout id="page">
      <Header />
      <Layout.Content className="wrap" id="content">
        <Switch >
          {
            routes.map((route, index) => {
              return (<Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props) => {              // 路由组件：props获取路由信息
                  return route.render(props)
                }} />)
            })
          }
        </Switch>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;
