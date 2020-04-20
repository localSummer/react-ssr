import React from 'react';
import { Helmet } from 'react-helmet';
//action  获取初始化数据
import { getInitialData } from './redux/index';
import isoConnect from '../../common/components/IsoConnect';
import styles from './index.less';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ store }) {
    return store.dispatch(getInitialData());
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

const mapStateToProps = (state) => ({
  initialData: state.listPage,
});

const mapDispatchToProps = (dispatch) => ({
  getInitialData() {
    console.log('dispath fetch data');
    return dispatch(getInitialData());
  },
});

export default isoConnect({
  styles,
  mapStateToProps,
  mapDispatchToProps
}, List);
