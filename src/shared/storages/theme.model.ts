export enum Theme {
  AtlassianDark = 'Atlassian Dark',
  AtlassianLight = 'Atlassian Light',
  Purple = 'Purple',
}

export enum CodeEditorTheme {
  AtomOneDark = 'Atom One Dark',
  AtomOneLight = 'Atom One Light',
  Default = 'Default',
}

export const ThemeToMainColorsMap = {
  [Theme.AtlassianDark]: ['#172B4D', '#394B59', '#42526E'],
  [Theme.AtlassianLight]: ['#0052CC', '#2684FF', '#E4F0F6'],
  [Theme.Purple]: ['#5C3FA3', '#7A5FF7', '#A78BFA'],
  [CodeEditorTheme.AtomOneDark]: ['#282c34', '#e06c75', '#e5c07b'],
  [CodeEditorTheme.AtomOneLight]: ['#CFD0D1', '#e06c75', '#E4F0F6'],
  [CodeEditorTheme.Default]: ['#0052CC', '#2684FF', '#E4F0F6'],
};
