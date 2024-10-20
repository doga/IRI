class URN {
  static regexp = /^urn:(?<nid>[^:]+):(?<nss>[^?]+)(?<resolv>[?][+][^?#]*)?(?<query>[?][=][^#]*)?(?<frag>[#].*)?$/; 

  #namespace;
  #namespaceSpecific;
  #query;
  #resolver;
  #fragment;

  constructor(str){
    if(!str) throw new TypeError('Not a Uniform Resource Name');
    str = `${str}`;
    const match = str.match(URN.regexp);
    if(!match) throw new TypeError('Format does not match a Uniform Resource Name');

    this.#namespace         = match.groups.nid;
    this.#namespaceSpecific = match.groups.nss;
    this.#query             = match.groups.query;
    this.#resolver          = match.groups.resolv;
    this.#fragment          = match.groups.frag;
  }

  get namespace(){return this.#namespace;}
  get namespaceSpecific(){return this.#namespaceSpecific;}
  get query(){return this.#query;}
  get resolver(){return this.#resolver;}
  get fragment(){return this.#fragment;}

  toString(){
    return `urn:${this.namespace}:${this.namespaceSpecific}${this.resolver || ''}${this.query || ''}${this.fragment || ''}`;
  }
}

export {URN};
