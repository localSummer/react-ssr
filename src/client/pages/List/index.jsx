import React from 'react';
import { mockData } from './data';

class List extends React.Component {
  constructor(props) {
    super(props);

    let initialData = null; // 初始化数据
    // webpack 定义的变量
    if (__SERVER__) {
      // 如果是当然是服务端执行
      initialData = props.staticContext.initialData || {};
    } else {
      console.log('props: ', props);
      //客户端渲染
      initialData = props.initialData || {};
    }

    this.state = initialData;
  }

  static async getInitialProps() {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            code: 0,
            data: mockData,
          });
        }, 500);
      });
    };

    let res = await fetchData();
    return {
      fetchData: res,
      page: {
        tdk: {
          title: '首页',
          keyword: 'React 服务端渲染',
          description: 'React 双端同构'
        }
      }
    };
  }

  componentDidMount() {
    // 客户端接管后，如果默认进入 Index 页面，那么在客户端组件上并不会添加initialData属性，需要手动拉取一下
    if (!this.state.data) {
      List.getInitialProps().then(res => {
        this.setState({
          data: res.fetchData.data || []
        });
      })
    }
  }
  

  render() {
    const { code, data } = this.state;
    return (
      <div>
        {data &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        {!data && <div>暂无数据</div>}
      </div>
    );
  }
}

export default List;
