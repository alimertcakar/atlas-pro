import '@pages/popup/Popup.css';

import mainStorage from '@root/src/shared/storages/mainStorage';
import { CodeEditorTheme, Theme, ThemeToMainColorsMap } from '@root/src/shared/storages/theme.model';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import withSuspense from '@src/shared/hoc/withSuspense';
import useStorage from '@src/shared/hooks/useStorage';

const ThemeOption = ({
  theme,
  selectedTheme,
  onClick,
}: {
  theme: Theme | CodeEditorTheme;
  selectedTheme: Theme | CodeEditorTheme;
  onClick: (theme: Theme | CodeEditorTheme) => void;
}) => {
  // to display the 3 prominent colors of the theme
  const mainColors = ThemeToMainColorsMap[theme];

  const isSelected = theme === selectedTheme;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="theme-option"
      style={{
        outline: isSelected ? '2px solid #2684FF' : 'none',
      }}
      onClick={() => {
        onClick(theme);
      }}>
      <div className="theme-option__colors-container">
        <div className="theme-option__color" style={{ backgroundColor: mainColors[0] }}></div>
        <div className="theme-option__color" style={{ backgroundColor: mainColors[1] }}></div>
        <div className="theme-option__color" style={{ backgroundColor: mainColors[2] }}></div>
      </div>
      <div className="theme-option__name">{theme}</div>
    </div>
  );
};

const Popup = () => {
  const { theme: selectedTheme, codeEditorTheme } = useStorage(mainStorage);

  return (
    <div className="app">
      <div className="app-inner">
        <div className="app-banner">
          <div className="app-banner-inner">Atlassian Pro v0.1.12 [Standard Edition]</div>
        </div>
        <br />
        <div className="select-title">Color Theme</div>
        <div className="theme-options">
          {Object.values(Theme).map(theme => {
            return (
              <ThemeOption
                key={theme}
                theme={theme}
                selectedTheme={selectedTheme}
                onClick={() => {
                  mainStorage.setTheme(theme);
                }}
              />
            );
          })}
        </div>
        <button className="text-button">+ Create a Theme</button>
        <div className="select-title" style={{ marginTop: 15 }}>
          Code Editor Theme
        </div>
        <div className="theme-options">
          {Object.values(CodeEditorTheme).map(theme => {
            return (
              <ThemeOption
                key={theme}
                theme={theme}
                selectedTheme={codeEditorTheme}
                onClick={() => {
                  mainStorage.setCodeEditorTheme(theme);
                }}
              />
            );
          })}
        </div>
        <button className="text-button">+ Create a Theme</button>
        <br />
        <div className="see-options-button-container">
          <button onClick={() => chrome.runtime.openOptionsPage()} className="see-options-button">
            ⚙️See Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
