import {UniformResourceLocator} from './uniform-resource-locator.mjs';
import {UniformResourceName} from './uniform-resource-name.mjs';

class IRI {
  /** 
   * Parses an IRI.
   * @param {string} str
   * @returns {(URL|UniformResourceName)} 
   * @throws {TypeError}
   * @static
   * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier}
   **/
  static parse(str){
    try {
      return new UniformResourceName(str);
    } catch (error) {
      return new UniformResourceLocator(str);
    }
  }

  /** 
   * Returns `true` if the call argument is an IRI.
   * @param {string} str
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
