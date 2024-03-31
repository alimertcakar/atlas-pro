import '@pages/popup/Popup.css';

import mainStorage from '@root/src/shared/storages/mainStorage';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import withSuspense from '@src/shared/hoc/withSuspense';
import useStorage from '@src/shared/hooks/useStorage';

const Popup = () => {
  const { isEnabled } = useStorage(mainStorage);

  return (
    <div className="app">
      <div>
        Current Mode:{' '}
        {isEnabled ? (
          <span className="app-highlight-text">Light</span>
        ) : (
          <span className="app-highlight-text">Dark</span>
        )}
      </div>
      <button onClick={mainStorage.toggle}>Toggle Dark Mode</button>
      <br />
      <label htmlFor="themes">Choose Color Scheme</label>
      <select name="schemes" id="schemes" className="app__select">
        <option value="Atlassian Dark">Atlassian Dark</option>
        <option value="Atlassian Light">Atlassian Light</option>
      </select>
      <br />
      <label htmlFor="themes">Choose Code Highlight Theme</label>
      <select name="themes" id="themes" className="app__select">
        <option value="Atom One Dark">AtomOneDark</option>
        <option value="Atom One Light">AtomOneLight</option>
      </select>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
