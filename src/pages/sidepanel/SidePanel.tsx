import '@pages/sidepanel/SidePanel.css';

import mainStorage from '@root/src/shared/storages/mainStorage';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import withSuspense from '@src/shared/hoc/withSuspense';
import useStorage from '@src/shared/hooks/useStorage';
import React from 'react';

const SidePanel = () => {
  const { isEnabled } = useStorage(mainStorage);

  return (
    <div className="App" style={{}}>
      <div>{isEnabled ? 'light' : 'dark'}</div>
      <button
        style={{
          backgroundColor: isEnabled ? '#fff' : '#000',
          color: isEnabled ? '#000' : '#fff',
        }}
        onClick={mainStorage.toggle}>
        Toggle theme
      </button>
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
