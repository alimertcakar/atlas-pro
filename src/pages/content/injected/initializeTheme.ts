import mainStorage from '@root/src/shared/storages/mainStorage';
import { CodeEditorTheme, Theme } from '@root/src/shared/storages/theme.model';

// Doing this here is faster because it loads on page load therefore enabling faster switching to dark mode
export const toggleThemeClass = (condition, className) => {
  if (condition) {
    document.body.classList.add(className);
  } else {
    document.body.classList.remove(className);
  }
};

const toggleAllThemes = async () => {
  if (window.location.host !== 'bitbucket.org') return;
  const storage = await mainStorage.get();
  const theme = storage?.theme;
  const codeEditorTheme = storage?.codeEditorTheme;

  toggleThemeClass(theme === Theme.Dark, 'atlas_pro_theme-dark');
  // toggleThemeClass(theme === Theme.Purple, 'atlas_pro_theme-purple');
  toggleThemeClass(codeEditorTheme === CodeEditorTheme.AtomOneDark, 'atlas_pro__code-editor-dark');
};

// initial run
toggleAllThemes();
// watch changes
mainStorage.subscribe(async () => {
  toggleAllThemes();
});
