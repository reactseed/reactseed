interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_PORT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
