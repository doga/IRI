export declare class IRI {
  constructor(str: string);
  equals(other: unknown): boolean;
  toString(): string;
}

/**
 * An "internationalised resource locator" (a Unicode version of a URL).
 * IRLs are non-standard but they should be, because they are a fix for URLs.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL|URL}
 * 
 */
export declare class IRL {
  /**
   * Creates an IRL instance.
   */
  constructor(url: unknown, base: URL | IRL | undefined);

  /**
   * A Unicode string containing a '#' followed by the fragment identifier of the IRL.
   */
  hash: string;

  /**
   * A string containing the domain (that is the hostname) followed by (if a port was specified) a ':' and the port of the IRL.
   */
  host: string;

  /**
   * A Unicode string containing the domain of the IRL.
   */
  hostname: string;

  /**
   * A stringifier that returns a Unicode string containing the whole IRL.
   */
  href: string;

  /**
   * Returns a Unicode string containing the origin of the IRL, that is its scheme, its domain and its port.
   */
  origin: string;

  /**
   * A Unicode string containing the password specified before the domain name.
   */
  password: string;

  /**
   * A Unicode string containing an initial '/' followed by the path of the IRL, not including the query string or fragment.
   */
  pathname: string;

  /**
   * A Unicode string containing the port number of the IRL.
   */
  port: string;

  /**
   * A Unicode string containing the protocol scheme of the IRL, including the final ':'.
   */
  protocol: string;

  /**
   * A Unicode string indicating the IRL's parameter string; if any parameters are provided, this string includes all of them, beginning with the leading ? character.
   */
  search: string;

  /**
   * A Unicode string containing the username specified before the domain name.
   */
  username: string;

  /**
   * The IRL encoded in ASCII.
   */
  url: URL;

  /** Returns `true` if `other` represents the same IRL. */
  equals(other: unknown): boolean;

  /** Returns a Unicode string containing the whole IRL. */
  toString(): string;
}

/**
 * Uniform Resource Name.
 * @example JavaScript example
 * ```javascript
 * const urn1 = new URN('urn:ietf:rfc:2648');
 * urn1.namespace;         // 'ietf'
 * urn1.namespaceSpecific; // 'rfc:2648'
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Uniform_Resource_Name | Uniform Resource Name}
 */
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
 * @example JavaScript example
 * ```javascript
 * const 
 * irl1 = iri`https://url.example`,
 * urn1 = iri`urn:ietf:rfc:2648`;
 * ```
 * @example TypeScript example
 * ```typescript
 * const
 * irl1:IRI = iri`https://url.example`, // an IRL
 * urn1:IRI = iri`urn:ietf:rfc:2648`;   // a URN
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier|Internationalized Resource Identifier}
 */
export declare function iri(strings: string[], ...values: unknown[]): IRI | null;

/** 
 * Tagged template parser for IRLs.
 * @example JavaScript example
 * ```javascript
 * const irl1 = iri`https://url.example`;
 * ```
 * @example TypeScript example
 * ```typescript
 * const irl1: IRL = iri`https://url.example`;
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier|Internationalized Resource Identifier}
 */
export declare function irl(strings: string[], ...values: unknown[]): IRL | null;

/** 
 * Tagged template parser for URNs.
 * @example JavaScript example
 * ```javascript
 * const urn1 = urn`urn:ietf:rfc:2648`;
 * ```
 * @example TypeScript example
 * ```typescript
 * const urn1: IRL = urn`urn:ietf:rfc:2648`;
 * ```
 * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier|Internationalized Resource Identifier}
 */
export declare function urn(strings: string[], ...values: unknown[]): URN | null;

/** 
 * Tagged template parser for URLs.
 * @example JavaScript example
 * ```javascript
 * const url1 = url`https://çağlayan.info`;
 * url1.href; // "https://xn--alayan-vua36b.info"
 * ```
 * @example TypeScript example
 * ```typescript
 * const url1: URL = url`https://url.example`;
 * url1.href; // "https://xn--alayan-vua36b.info"
 * ```
 * @returns {(URL|null)}
 * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier|Internationalized Resource Identifier}
 */
export declare function url(strings: string[], ...values: unknown[]): URL | null;

/**
 * An IRI parser.
 * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier|Internationalized Resource Identifier}
 */
export declare class IriParser {
  /** 
   * Parses an IRI. All arguments will be stringified if they are not already strings.
   **/
  static parse(iri: unknown, base: unknown): IRI;
}
