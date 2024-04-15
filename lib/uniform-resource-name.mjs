class UniformResourceName {
  static regexp = /^urn:(?<nid>[^:]+):(?<nss>.+)(?<query>[?][+].*)?(?<resolv>[?][=].*)?(?<frag>[#].*)?$/; 

  #namespace;
  #namespaceSpecific;
  #query;
  #resolver;
  #fragment;

  constructor(str){
    if(typeof str !== 'string') throw new TypeError('Not a Uniform Resource Name string');
    const match = str.match(UniformResourceName.regexp);
    if(!match) throw new TypeError('Not a Uniform Resource Name');

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
    return `urn:${this.namespace}:${this.namespaceSpecific}${this.query || ''}${this.resolver || ''}${this.fragment || ''}`;
  }

  get objectType(){return 'UniformResourceName';}
}

export {UniformResourceName};
