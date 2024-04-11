import { StorageType, createStorage } from '@src/shared/storages/base';

import { CodeEditorTheme, Theme } from './theme.model';

const storage = createStorage(
  'atlassian-pro-storage',
  {
    theme: Theme.AtlassianDark,
    codeEditorTheme: CodeEditorTheme.AtomOneDark,
  },
  {
    storageType: StorageType.Local,
    liveUpdate: true,
  },
);

const mainStorage = {
  ...storage,
  setTheme: async theme => {
    await storage.set(val => {
      return { ...val, theme };
    });
  },
  setCodeEditorTheme: async codeEditorTheme => {
    await storage.set(val => {
      return { ...val, codeEditorTheme };
    });
  },
};

export default mainStorage;

export const toggleThemeClass = (condition, className) => {
  if (condition) {
    document.body.classList.add(className);
  } else {
    document.body.classList.remove(className);
  }
};

mainStorage.subscribe(async () => {
  if (window.location.host !== 'bitbucket.org') return;
  const storage = await mainStorage.get();
  const theme = storage?.theme;
  const codeEditorTheme = storage?.codeEditorTheme;

  toggleThemeClass(theme === Theme.AtlassianDark, 'atlassian_pro_theme-dark');
  toggleThemeClass(codeEditorTheme === CodeEditorTheme.AtomOneDark, 'atlassian_pro__code-editor-dark');
});
