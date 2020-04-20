import { mockData } from '../data';

export const ACTION_TYPE = {
  changeList: 'list/changelist',
};

// 用于更新状态 action creater
const changeList = (data) => ({
  type: ACTION_TYPE.changeList,
  data,
});

//默认数据
const defaultState = {
  fetchData: {},
  page: {},
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPE.changeList:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

// 异步获得数据 【副作用】 返回Promise类型
export const getInitialData = (props) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      // 延迟 500ms 返回数据
      setTimeout(() => {
        const data = {
          fetchData: {
            code: 0,
            data: mockData,
          },
          page: {
            tdk: {
              title: '列表页 - koa-react-ssr',
              keywords: '关键词 koa-react-ssr',
              description: '描述 koa-react-ssr',
            },
          },
        };
        resolve(data);
        //更新状态
        dispatch(changeList(data));
      }, 500);
    });
  };
};
