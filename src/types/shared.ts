export const FlexDirection = {
  Row: 'row',
  Column: 'column',
  RowReverse: 'row-reverse',
  ColumnReverse: 'column-reverse',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FlexDirection = typeof FlexDirection[keyof typeof FlexDirection];

export const JustifyContent = {
  FlexStart: 'flex-start',
  FlexEnd: 'flex-end',
  Center: 'center',
  SpaceBetween: 'space-between',
  SpaceAround: 'space-around',
  SpaceEvenly: 'space-evenly',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type JustifyContent = typeof JustifyContent[keyof typeof JustifyContent];

export const AlignItems = {
  FlexStart: 'flex-start',
  FlexEnd: 'flex-end',
  Center: 'center',
  Stretch: 'stretch',
  Baseline: 'baseline',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlignItems = typeof AlignItems[keyof typeof AlignItems];

export const FlexWrap = {
  NoWrap: 'no-wrap',
  Wrap: 'wrap',
  WrapReverse: 'wrap-reverse',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FlexWrap = typeof FlexWrap[keyof typeof FlexWrap];

export const AlignContent = {
  Normal: 'normal',
  FlexStart: 'flex-start',
  FlexEnd: 'flex-end',
  Center: 'center',
  SpaceBetween: 'space-between',
  SpaceAround: 'space-around',
  SpaceEvenly: 'space-evenly',
  Stretch: 'stretch',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlignContent = typeof AlignContent[keyof typeof AlignContent];

export type AlignSelf = AlignItems;

export const Viewport = {
  Mobile: 'Mobile',
  Tablet: 'Tablet',
  Desktop: 'Desktop',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Viewport = keyof typeof Viewport;
