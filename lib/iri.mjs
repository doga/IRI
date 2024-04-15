import {UniformResourceName} from './uniform-resource-name.mjs';

class IRI {
  /** 
   * Reads up to `count` models from the given RDF `datasets` datasets. 
   * Each dataset must conform to the DatasetCore interface.
   * The nodes must match the RDF `types`. If `types` is not specified, then all types are matched.
   * If `modelClass` is provided, then it is used instead of `Model` to create a model.
   * `modelClass` should be a subclass of `Model`.
   * @param {(object|object[]|Set.<object>)} datasets
   * @param {({
  *   types:      (URL|UniformResourceName|URL[]|UniformResourceName[]|Set.<URL>|Set.<UniformResourceName>|null|undefined)
  *   modelClass: (function|null|undefined),
  *   count:      (number|null|undefined)
  * }|null|undefined)} config
  * @returns {Promise.<Model[]>} 
  * @async
  * @static
  **/
  static parse(str){
    try {
      return new UniformResourceName(str);
    } catch (error) {
      return new URL(str);
    }
  }
}

export {IRI};
