# ts-script

Boilerplate to run scripts with node + swc instead of ts-node.

Do not wait for typescript compilation and iterate quickly.

## Usage

```
degit MarioArnt/ts-script#main my-script
cd my-script
npm i
npm start
```

## Benchmark

Using ts-node

```text
✦ ❯ time npx ts-node ./index.ts

Hello from asynchronous world
npx ts-node ./index.ts  2,33s user 0,26s system 124% cpu 2,076 total
```

Using node  + swc

```text
✦ ❯ time npm start

> ts-script-boilerplate@1.0.0 start
> node --require ./suppress-experimental-warnings.js --enable-source-maps --loader ./loader.mjs index.mts

Hello from asynchronous world
npm start  0,49s user 0,15s system 72% cpu 0,876 total
```
