class IRI {
  /** @type {string} */  #str;
  constructor(str) {
    this.#str = str;
  }
  toString() {
    return this.#str;
  }
}

export { IRI };
