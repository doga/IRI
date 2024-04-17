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
