/**
 * A parser/serialiser for IRIs (URLs, URNs). In contrast to standard URL parsers, this parser keeps URLs in their original Unicode form, which remains readable even for URLs with non-English characters.
 * @author Doğa Armangil <doga.armangil@gmail.com>
 * @license Apache-2.0 <https://www.apache.org/licenses/LICENSE-2.0>
 * @example How to parse a URL or URN in JavaScript.
 * ```javascript
 * import { iri, irl, urn, url, IRI, IRL, URN} from 'https://cdn.jsdelivr.net/gh/doga/IRI@3.1.11/dist/mod.mjs';
 * const
 * host = 'çağlayan.info',
 * irl1 = iri`https://${host}/résumé`, // an IRL (Unicode-aware variant of URL) and IRI instance
 * irl2 = irl`https://${host}/résumé`, // an IRL and IRI instance
 * url1 = irl1.url,                    // a URL instance
 * url2 = url`https://${host}/résumé`, // a URL instance
 * urn1 = iri`urn:ietf:rfc:3987`,      // a URN and IRI instance
 * urn2 = urn`urn:ietf:rfc:3987`;      // a URN and IRI instance
 * 
 * irl1.host;              // 'çağlayan.info'
 * irl1.url.host;          // 'xn--alayan-vua36b.info'
 * irl1.pathname;          // '/résumé'
 * irl1.url.pathname;      // '/r%C3%A9sum%C3%A9'
 * urn1.namespace;         // 'ietf'
 * urn1.namespaceSpecific; // 'rfc:3987'
 * ```
 * @example How to parse a URL or URN in TypeScript.
 * ```typescript
 * import { iri, irl, urn, url, IRI, IRL, URN} from 'https://cdn.jsdelivr.net/gh/doga/IRI@3.1.11/dist/mod.mjs';
 * const
 * host = 'çağlayan.info',
 * irl1: IRL = iri`https://${host}/résumé`,
 * irl2: IRL = irl`https://${host}/résumé`,
 * url1: URL = irl1.url,
 * url2: URL = url`https://${host}/résumé`,
 * urn1: URN = iri`urn:ietf:rfc:3987`,
 * urn2: URN = urn`urn:ietf:rfc:3987`;
 * 
 * irl1.host;              // 'çağlayan.info'
 * irl1.url.host;          // 'xn--alayan-vua36b.info'
 * irl1.pathname;          // '/résumé'
 * irl1.url.pathname;      // '/r%C3%A9sum%C3%A9'
 * urn1.namespace;         // 'ietf'
 * urn1.namespaceSpecific; // 'rfc:3987'
 * ```
 * @see {@link https://github.com/doga/IRI | GitHub repository}
 * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier | Internationalized Resource Identifier on Wikipedia}
 * @see {@link https://www.ietf.org/rfc/rfc3987.txt | RFC 3987: Internationalized Resource Identifiers (IRIs)}
 */

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
