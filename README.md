# sa-unique-id
A simple unique id generator that produce a unique id that is 23 chars/bytes long

# code base
TypeScript

# main method
id()

# example using vanilla JS (node)

```
const { SaUniqueId } = require('./lib/index');
console.log('unique id', SaUniqueId.id());
console.log('unique id', SaUniqueId.id());
console.log('unique id', SaUniqueId.id());
console.log('unique id', SaUniqueId.id());
console.log('unique id', SaUniqueId.id());
```

# example using vanilla js (browser)
```
const SaUniqueId = Sa.SaUniqueId;
console.log('SaUniqueId.id() sample output:');
console.log('id', SaUniqueId.id());
```

# example using TypeScript
```
import { SaUniqueId } from 'SaUniqueId'
console.log('SaUniqueId.id() sample output:')
console.log('id', SaUniqueId.id())
```
