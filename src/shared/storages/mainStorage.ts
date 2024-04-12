import { StorageType, createStorage } from '@src/shared/storages/base';

import { CodeEditorTheme, Theme } from './theme.model';

const storage = createStorage(
  'atlas-pro-storage',
  {
    theme: Theme.Dark,
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
