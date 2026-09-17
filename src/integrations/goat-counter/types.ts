export interface GoatCounterParams {
  path?: string | ((path: string) => string | null);
  title?: string | ((title: string) => string | null);
  referrer?: string | ((referrer: string) => string | null);
  event?: boolean;
  noSession?: boolean;
  screen?: number | ((width: number) => number | null);
  query?: string | ((query: string) => string | null);
  bot?: number | ((bot: number) => number | null);
}

export interface GoatCounterOptions {
  /** Full URL of the GoatCounter `/count` endpoint. */
  endpoint?: string;
  /** Enable the client integration. @default true */
  enabled?: boolean;
  /** Track the initial page and successful client navigations. @default true */
  autoPageviews?: boolean;
  /** Include URL hashes in automatically tracked paths. @default false */
  hashMode?: boolean;
  /** Allow tracking on local and private addresses. @default false */
  allowLocal?: boolean;
  /** Allow tracking when the application runs inside a frame. @default false */
  allowFrame?: boolean;
  /** Serializable default GoatCounter parameters. */
  params?: Partial<GoatCounterParams>;
}

export interface ResolvedGoatCounterOptions {
  endpoint: string;
  enabled: boolean;
  autoPageviews: boolean;
  hashMode: boolean;
  allowLocal: boolean;
  allowFrame: boolean;
  params: Partial<GoatCounterParams>;
}