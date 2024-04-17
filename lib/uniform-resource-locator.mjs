import { punycode } from "../deps.mjs";

class UniformResourceLocator extends URL {
  #str;

  /** 
   * Creates a URL object.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL}
   **/
  constructor(str){
    super(str);
    this.#str = str;
  }

  get hostname(){
    return punycode.toUnicode(super.hostname);
  }

  get host(){
    if (super.port === '') {
      return this.hostname;
    }
    return `${this.hostname}:${super.port}`
  }

  get pathname(){
    return super.pathname.split('/').map(p => decodeURIComponent(p)).join('/');
  }

  get hash(){
    return decodeURIComponent(super.hash);
  }

  get search(){
    return decodeURIComponent(super.search);
  }

  /** 
   * Shows the original URL string that created this object.
   * Fixes a bug in the `toString` method of the default URL class that returns 
   * an ASCII-encoded version of the URL string.
   * @returns {string} 
   * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier}
   **/
  toString(){
    return this.#str;
  }
}

export {UniformResourceLocator};
