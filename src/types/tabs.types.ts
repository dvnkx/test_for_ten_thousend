export type AssetIcons = 'home' | 'portfolio' | 'search' | 'settings'; // Add all the possible icon names here

export type AssetMap = {
  [key in AssetIcons]: any; // Regular icons
} & {
  [key in `${AssetIcons}Focused`]?: any; // Focused variants are optional
};

export type GetIconProps = {
  focused: boolean;
  size: number;
};

export type BottomTabParamList = {
  Home: undefined;
  Portfolio: undefined;
  Search: undefined;
  Settings: undefined;
};
