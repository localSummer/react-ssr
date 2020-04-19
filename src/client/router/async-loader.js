import React from 'react';

import AsyncBundle from './async-bundle';
import proConfig from '../../share/pro-config';

function AsyncLoader(loader) {
  function AsyncComponent(props) {
    return (
      <AsyncBundle load={loader}>{(Comp) => <Comp {...props} />}</AsyncBundle>
    );
  }

  AsyncComponent[proConfig.asyncComponentKey] = true;

  return AsyncComponent;
}

export default AsyncLoader;
