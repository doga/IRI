/**
 * IRI is a library for parsing URLs and URNs.
 * @module IRI (Internationalized Resource Identifier)
 * @author Doğa Armangil <d.armangil@gmail.com>
 * @license Apache-2.0 <https://www.apache.org/licenses/LICENSE-2.0>
 * @example How to parse a URL or URN.
 * ```javascript
 * import { iri, IRI, IRL, URN} from 'https://esm.sh/gh/doga/IRI@3.1.4/mod.mjs';
 * const
 * host  = 'çağlayan.info',
 * anIrl = iri`https://${host}/résumé`, // an IRL (Unicode-aware variant of URL) and IRI instance
 * aUrl  = anIrl.url,                   // a URL instance
 * aUrn  = iri`urn:ietf:rfc:3987`;      // a URN and IRI instance
 * 
 * anIrl.host;             // 'çağlayan.info'
 * anIrl.url.host;         // 'xn--alayan-vua36b.info'
 * anIrl.pathname;         // '/résumé'
 * anIrl.url.pathname;     // '/r%C3%A9sum%C3%A9'
 * aUrn.namespace;         // 'ietf'
 * aUrn.namespaceSpecific; // 'rfc:3987'
 * ```
 * @see {@link https://github.com/doga/IRI | GitHub repository}
 * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier | Internationalized Resource Identifier on Wikipedia}
 * @see {@link https://www.ietf.org/rfc/rfc3987.txt | IETF specification: Internationalized Resource Identifiers (IRIs)}
 */

export {IRI} from './lib/iri.mjs';
export {IRL, irl, url} from './lib/irl.mjs';
export {URN, urn} from './lib/urn.mjs';
export {IriParser, iri} from './lib/iri-parser.mjs';
