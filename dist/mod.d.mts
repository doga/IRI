export declare class IRI {
  constructor(str: string);
  equals(other: unknown): boolean;
  toString(): string;
}

export declare class IRL {
  constructor(url: unknown, base: URL | IRL | undefined);
  hash: string;
  host: string;
  hostname: string;
  href: string;
  origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  username: string;
  equals(other: unknown): boolean;
  toString(): string;
}

export declare class URN {
  constructor(str: string);
  get namespace(): string;
  get namespaceSpecific(): string;
  get query(): string;
  get resolver(): string;
  get fragment(): string;
  equals(other: unknown): boolean;
  toString(): string;
}

export declare function iri(strings: string[], ...values: unknown[]): IRI | null;
export declare function irl(strings: string[], ...values: unknown[]): IRL | null;
export declare function urn(strings: string[], ...values: unknown[]): URN | null;
export declare function url(strings: string[], ...values: unknown[]): URL | null;

export declare class IriParser {
  /**
   * @throws {TypeError}
   */
  static parse(iri: unknown, base: unknown): IRI;
}
