/// <reference types="react-scripts" />

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const svg: any;
  export default svg;
}
