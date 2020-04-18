import React from 'react';
import { Helmet } from 'react-helmet';
import { mockData } from './data';

class List extends React.Component {
  constructor(props) {
    super(props);

    const initData = props.initialData || {};
    this.state = {
      page: initData.page,
      fetchData: initData.fetchData,
    };
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
          title: '列表页',
          keywords: 'React 服务端渲染',
          description: 'React 双端同构',
        },
      },
    };
  }

  componentDidMount() {
    console.log('this.state: ', this.state);
    if (!this.state.fetchData) {
      List.getInitialProps().then((res) => {
        this.setState({
          fetchData: res.fetchData,
          page: res.page,
        });
      });
    }
  }

  render() {
    const { code, data } = this.state.fetchData || {};
    const { tdk = {} } = this.state.page || {};
    return (
      <div>
        <Helmet>
          <title>{tdk.title}</title>
          <meta name="description" content={tdk.description} />
          <meta name="keywords" content={tdk.keywords} />
        </Helmet>
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
