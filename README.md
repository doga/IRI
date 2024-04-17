# Internationalized Resource Identifier

A JavaScript ES6 module that provides an [IRI](https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier)  meta-parser.

The parser returns a [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) or a [Uniform Resource Name](https://en.wikipedia.org/wiki/Uniform_Resource_Name).

## Usage examples

_Tip: Run the examples below by typing this in your terminal (requires Deno):_

```shell
deno run \
  --allow-net --allow-run --allow-env --allow-read \
  https://deno.land/x/mdrb@2.0.0/mod.ts \
  --dax=false --mode=isolated \
  https://raw.githubusercontent.com/doga/IRI/master/README.md
```

<details data-mdrb>
<summary>Example: Parse IRIs.</summary>

<pre>
description = '''
Running this example is safe, it will not read or write anything to your filesystem.
'''
</pre>
</details>

```javascript
import { IRI, UniformResourceLocator } from 'https://esm.sh/gh/doga/IRI@1.4.0/mod.mjs';

demo();

function demo() {
  const
  ids = [
    'https://çağlayan.info/user/çağlayan/?çağlayan#çağlayan',
    'urn:ietf:rfc:2648',
  ];

  for (const id of ids){
    try{
      const parsedId = IRI.parse(id);

      console.info(`${parsedId} (is IRI: ${IRI.isIRI(parsedId)})`);
      if (parsedId instanceof URL) {
        console.info(
`  is UniformResourceLocator: ${parsedId instanceof UniformResourceLocator}
  origin:                    ${parsedId.origin}
  hostname:                  ${parsedId.hostname}
  host:                      ${parsedId.host}
  pathname:                  ${parsedId.pathname}
  hash:                      ${parsedId.hash}
  search:                    ${parsedId.search}
`);

      } else {
        console.info(
`  namespace:         ${ parsedId.namespace}
  namespaceSpecific: ${ parsedId.namespaceSpecific}
  query:             ${ parsedId.query}
  resolver:          ${ parsedId.resolver}
  fragment:          ${ parsedId.fragment}\n`);
      }
    }catch(error){
      console.error(error);
    }
  }
}
```

Sample output for the code above:

```text
https://çağlayan.info/user/çağlayan/?çağlayan#çağlayan (is IRI: true)
  is UniformResourceLocator: true
  origin:                    https://xn--alayan-vua36b.info
  hostname:                  xn--alayan-vua36b.info
  host:                      xn--alayan-vua36b.info
  pathname:                  /user/%C3%A7a%C4%9Flayan/
  hash:                      #%C3%A7a%C4%9Flayan
  search:                    ?%C3%A7a%C4%9Flayan

urn:ietf:rfc:2648 (is IRI: true)
  namespace:         ietf
  namespaceSpecific: rfc:2648
  query:             undefined
  resolver:          undefined
  fragment:          undefined
```

<details data-mdrb>
<summary>Example: Workaround for URL i18n bug.</summary>

<pre>
description = '''
Running this example is safe, it will not read or write anything to your filesystem.
'''
</pre>
</details>

```javascript
import { UniformResourceLocator } from 'https://esm.sh/gh/doga/IRI@1.4.0/mod.mjs';

demo();

function demo() {
  const
  urlString = 'https://çağlayan.info/user/çağlayan/?çağlayan#çağlayan',
  url       = new URL(urlString),
  fixedUrl  = new UniformResourceLocator(urlString);

  console.info(`Original string: ${urlString}`);
  console.info(`\nURL:\n  toString() 👉 ${url}\n`);
  console.info(`UniformResourceLocator:\n  toString() 👉 ${fixedUrl}\n`);
  console.info(`UniformResourceLocator extends URL? 👉 ${fixedUrl instanceof URL}`);
}
```

Sample output for the code above:

```text
Original string: https://çağlayan.info/user/çağlayan/?çağlayan#çağlayan

URL:
  toString() 👉 https://xn--alayan-vua36b.info/user/%C3%A7a%C4%9Flayan/?%C3%A7a%C4%9Flayan#%C3%A7a%C4%9Flayan

UniformResourceLocator:
  toString() 👉 https://çağlayan.info/user/çağlayan/?çağlayan#çağlayan

UniformResourceLocator extends URL? 👉 true
```

<details data-mdrb>
<summary>Example: Parse uniform resource names belonging to some well-known namespaces.</summary>

<pre>
description = '''
Running this example is safe, it will not read or write anything to your filesystem.
'''
</pre>
</details>

```javascript
import { UniformResourceName } from 'https://esm.sh/gh/doga/IRI@1.4.0/mod.mjs';

demo();

function demo() {
  const
  ids = [
    // 'urn:isbn:0451450523',
    // 'urn:isan:0000-0000-2CEA-0000-1-0000-0000-Y',
    // 'urn:ISSN:0167-6423',
    'urn:ietf:rfc:2648',
    'urn:mpeg:mpeg7:schema:2001',
    'urn:oid:2.16.840',
    'urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66',
    // 'urn:nbn:de:bvb:19-146642',
    // 'urn:lex:eu:council:directive:2010-03-09;2010-19-UE',
    // 'urn:lsid:zoobank.org:pub:CDC8D258-8F57-41DC-B560-247E17D3DC8C',
    // 'urn:epc:class:lgtin:4012345.012345.998877',
    // 'urn:epc:id:sgtin:0614141.112345.400',
    // 'urn:epc:id:sscc:0614141.1234567890',
    // 'urn:epc:id:sgln:0614141.12345.400',
    // 'urn:epc:id:bic:CSQU3054383',
    // 'urn:epc:id:imovn:9176187',
    // 'urn:epc:id:gdti:0614141.12345.400',
    // 'urn:mrn:iala:aton:us:1234.5',
    // 'urn:mrn:iala:vts:ca:ecareg',
    // 'urn:mrn:iala:wwy:us:atl:chba:potri',
    // 'urn:mrn:iala:pub:g1143',
    // 'urn:microsoft:adfs:claimsxray',
    // 'urn:eic:10X1001A1001A450',
  ];

  for (const id of ids){
    try{
      const parsedId = new UniformResourceName(id);
      console.info(`${parsedId}
  namespace:         ${ parsedId.namespace}
  namespaceSpecific: ${ parsedId.namespaceSpecific}
  query:             ${ parsedId.query}
  resolver:          ${ parsedId.resolver}
  fragment:          ${ parsedId.fragment}
`);
    }catch(error){
      console.error(error);
    }
  }
}
```

Sample output for the code above:

```text
urn:ietf:rfc:2648
  namespace:         ietf
  namespaceSpecific: rfc:2648
  query:             undefined
  resolver:          undefined
  fragment:          undefined

urn:mpeg:mpeg7:schema:2001
  namespace:         mpeg
  namespaceSpecific: mpeg7:schema:2001
  query:             undefined
  resolver:          undefined
  fragment:          undefined

urn:oid:2.16.840
  namespace:         oid
  namespaceSpecific: 2.16.840
  query:             undefined
  resolver:          undefined
  fragment:          undefined

urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66
  namespace:         uuid
  namespaceSpecific: 6e8bc430-9c3a-11d9-9669-0800200c9a66
  query:             undefined
  resolver:          undefined
  fragment:          undefined
```

∎
