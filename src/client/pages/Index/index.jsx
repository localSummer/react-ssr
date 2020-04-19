import React from 'react';
import { Helmet } from 'react-helmet';
import PageContainer from '../../common/components/PageContainer'
import './index.less';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    return {
      page: {
        tdk: {
          title: '首页 - react ssr',
          keywords: '前端技术江湖',
          description: '关键词',
        },
      },
    };
  }

  handleClick() {
    alert('一起来玩 react ssr 呀,点我有反应吗？');
  }

  render() {
    const { page = {} } = this.props.initialData || {};
    const { tdk = {} } = page;
    return (
      <div className="page-index-box">
        <Helmet>
          <title>{tdk.title}</title>
          <meta name="description" content={tdk.description} />
          <meta name="keywords" content={tdk.keywords} />
        </Helmet>
        <span onClick={ this.handleClick }>首页</span>
        <p>首页主视觉</p>
      </div>
    );
  }
}

export default PageContainer(Index);
