import {UniformResourceLocator} from './uniform-resource-locator.mjs';
import {UniformResourceName} from './uniform-resource-name.mjs';

class IRI {
  /** 
   * Parses an IRI.
   * All arguments will be stringified if they are not already strings.
   * @returns {(URL|UniformResourceName)} 
   * @throws {TypeError}
   * @static
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL/URL}
   * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier}
   **/
  static parse(iri, base){
    try {
      return new UniformResourceName(iri);
    } catch (_error) {
      try {
        return new UniformResourceLocator(iri, base);
      } catch (_error) {
        if (base) throw new TypeError(`Invalid IRI: '${iri}' with base '${base}'`);
        throw new TypeError(`Invalid IRI: '${iri}'`);
      }
    }
  }

  /** 
   * Returns `true` if the call argument is an IRI.
   * @returns {boolean} 
   * @static
   * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier}
   **/
  static isIRI(object){
    return (
      object instanceof URL || 
      ( // UniformResourceName?
        typeof object                   === 'object' &&
        typeof object.namespace         === 'string' &&
        typeof object.namespaceSpecific === 'string' &&
        typeof object.toString          === 'function' &&
        typeof object.toString()        === 'string' &&
        object.objectType               === 'UniformResourceName'
      )
    );
  }
}

export {IRI};
