# sa-unique-id
A simple unique id generator that produce a unique id that is 23 chars/bytes long

# code base
TypeScript

# example vanilla JS (node)

```
const { SaUniqueId } = require('./lib/index');
const saUniqueId = new SaUniqueId();

console.log('unique id', saUniqueId.id());
console.log('unique id', saUniqueId.id());
console.log('unique id', saUniqueId.id());
console.log('unique id', saUniqueId.id());
console.log('unique id', saUniqueId.id());
```
