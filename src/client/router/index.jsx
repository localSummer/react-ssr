import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../app/layout';

function Page404() {
  return <div>404拉 </div>;
}

// 服务端也会用到所以通过参数的方式将配置传递进来
const App = ({ routeList }) => {
  return (
    <Layout>
      <Switch>
        {routeList.map((item) => {
          return item.initialData ? (
            <Route
              key={item.path}
              exact={item.exact}
              path={item.path}
              render={(props) => {
                props.initialData = item.initialData;
                return <item.component {...props} />;
              }}
            />
          ) : (
            <Route key={item.path} {...item} />
          );
        })}
        <Route to="*" component={Page404}></Route>
      </Switch>
    </Layout>
  );
};

export default App;
