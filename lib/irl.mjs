import { punycode } from "../deps.mjs";
import { isUndefined } from "./util.mjs";

/**
 * An "internationalised resource locator" (a Unicode version of a URL).
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL|URL}
 * 
 */
class IRL{
  /**
   * Creates an IRL instance.
   * @param {*} url 
   * @param {(URL|IRL|undefined)} base 
   * @throws {TypeError}
   */
  constructor(url, base){
    if(!isUndefined(base)) base = new URL(`${base}`);
    url = new URL(`${url}`, base);
    
    this.protocol = url.protocol;
    this.username = url.username;
    this.password = url.password;
    this.hostname = punycode.toUnicode(url.hostname);
    this.port = url.port;
    this.host = this.port ? `${this.hostname}:${this.port}` : this.hostname;
    this.origin = `${this.protocol}//${this.host}`;
    this.pathname = decodeURIComponent(url.pathname);
    this.search = decodeURIComponent(url.search);
    this.hash = decodeURIComponent(url.hash);
    const credentials = url.username ? (url.password ? `${url.username}:${url.password}@` : `${url.username}@`) : '';
    this.href = `${this.protocol}//${credentials}${this.host}${this.pathname}${this.search}${this.hash}`;

    this.url = url;
  }
  toString(){
    return this.href;
  }
  toJSON(){
    return this.toString();
  }
}




// class IRL extends URL {
//   /** 
//    * Creates a URL object.
//    **/
//   constructor(url, base){
//     super(url, base);
//   }
//   // constructor(str){
//   //   super(str);
//   //   this.#str = str;
//   // }

//   /** 
//    * Shows the original URL string that created this object.
//    * Fixes a bug in the `toString` method of the default URL class that returns 
//    * an ASCII-encoded version of the URL string.
//    * @returns {string} 
//    * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier|Internationalized Resource Identifier}
//    **/
//   toString(){
//     return `${super.protocol}//${this._host}${this._pathname}${this._search}${this._hash}`;
//   }

//   /**
//    * @ignore
//    */
//   get _hostname(){
//     return punycode.toUnicode(super.hostname);
//   }

//   /**
//    * @ignore
//    */
//   get _host(){
//     if (super.port === '') {
//       return this._hostname;
//     }
//     return `${this._hostname}:${super.port}`
//   }

//   /**
//    * @ignore
//    */
//   get _pathname(){
//     return super.pathname.split('/').map(p => decodeURIComponent(p)).join('/');
//   }

//   /**
//    * @ignore
//    */
//   get _hash(){
//     return decodeURIComponent(super.hash);
//   }

//   /**
//    * @ignore
//    */
//   get _search(){
//     return decodeURIComponent(super.search);
//   }

// }

export {IRL};
