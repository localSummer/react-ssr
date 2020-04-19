import React from 'react';
import { Helmet } from 'react-helmet';
import { mockData } from './data';
import PageContainer from '../../common/components/PageContainer'

class List extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    const { fetchData = {}, page = {} } = this.props.initialData || {};
    const { tdk = {} } = page;
    return (
      <div>
        <Helmet>
          <title>{tdk.title}</title>
          <meta name="description" content={tdk.description} />
          <meta name="keywords" content={tdk.keywords} />
        </Helmet>
        {fetchData.data &&
          fetchData.data.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        {!fetchData.data && <div>暂无数据</div>}
      </div>
    );
  }
}

export default PageContainer(List);
