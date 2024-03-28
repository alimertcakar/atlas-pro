import '@pages/sidepanel/SidePanel.css';

import logo from '@assets/img/logo.svg';
import mainStorage from '@root/src/shared/storages/mainStorage';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import withSuspense from '@src/shared/hoc/withSuspense';
import useStorage from '@src/shared/hooks/useStorage';
import React from 'react';

const SidePanel = () => {
  const values = useStorage(mainStorage);

  return (
    <div
      className="App"
      style={{
        backgroundColor: values.isEnabled ? '#fff' : '#000',
      }}>
      <header className="App-header" style={{ color: values.isEnabled ? '#000' : '#fff' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/sidepanel/SidePanel.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: values.isEnabled && '#0281dc', marginBottom: '10px' }}>
          Learn React!
        </a>
        <button
          style={{
            backgroundColor: values.isEnabled ? '#fff' : '#000',
            color: values.isEnabled ? '#000' : '#fff',
          }}
          onClick={mainStorage.toggle}>
          Toggle theme
        </button>
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
