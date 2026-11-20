export declare class IRI {
  constructor(str: string);
  equals(other: unknown): boolean;
  toString(): string;
}

/**
 * IRL
 */
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

/** 
 * Tagged template parser for IRIs.
 * @example
 * ```javascript
 * const anIri = iri`https://url.example`;
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier|Internationalized Resource Identifier}
 **/
export declare function iri(strings: string[], ...values: unknown[]): IRI | null;
export declare function irl(strings: string[], ...values: unknown[]): IRL | null;
export declare function urn(strings: string[], ...values: unknown[]): URN | null;
export declare function url(strings: string[], ...values: unknown[]): URL | null;

/**
 * An IRI parser.
 * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier|Internationalized Resource Identifier}
 */
export declare class IriParser {
  /** 
   * Parses an IRI. All arguments will be stringified if they are not already strings.
   * @throws {TypeError}
   **/
  static parse(iri: unknown, base: unknown): IRI;
}
