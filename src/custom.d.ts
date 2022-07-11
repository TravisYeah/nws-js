declare module "isomorphic-fetch";
declare var URL: typeof globalThis extends { URL: infer URLCtor }
  ? URLCtor
  : typeof import("url").URL;
