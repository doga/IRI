import { punycode } from "../deps.mjs";

class UniformResourceLocator extends URL {
  /** 
   * Creates a URL object.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL}
   **/
  constructor(url, base){
    super(url, base);
  }
  // constructor(str){
  //   super(str);
  //   this.#str = str;
  // }

  /** 
   * Shows the original URL string that created this object.
   * Fixes a bug in the `toString` method of the default URL class that returns 
   * an ASCII-encoded version of the URL string.
   * @returns {string} 
   * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier}
   **/
  toString(){
    return `${super.protocol}//${this._host}${this._pathname}${this._search}${this._hash}`;
  }

  get _hostname(){
    return punycode.toUnicode(super.hostname);
  }

  get _host(){
    if (super.port === '') {
      return this._hostname;
    }
    return `${this._hostname}:${super.port}`
  }

  get _pathname(){
    return super.pathname.split('/').map(p => decodeURIComponent(p)).join('/');
  }

  get _hash(){
    return decodeURIComponent(super.hash);
  }

  get _search(){
    return decodeURIComponent(super.search);
  }

}

export {UniformResourceLocator};
