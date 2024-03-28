import '@pages/popup/Popup.css';

import logo from '@assets/img/logo.svg';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import withSuspense from '@src/shared/hoc/withSuspense';
import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import React from 'react';

const Popup = () => {
  const values = useStorage(exampleThemeStorage);

  return (
    <div
      className="App"
      style={{
        backgroundColor: values.isEnabled ? '#fff' : '#000',
      }}>
      <header className="App-header" style={{ color: values.isEnabled ? '#000' : '#fff' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
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
          onClick={exampleThemeStorage.toggle}>
          Toggle theme
        </button>
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
