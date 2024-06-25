# Useful Functions TS

This repo is meant to be up-to-date, providing type-safety and synchronous & asynchronous functions to make development for your projects much easier.

![NPM Version](https://img.shields.io/npm/v/useful-functions-ts)  ![npm bundle size](https://img.shields.io/bundlephobia/min/useful-functions-ts) ![GitHub issues](https://img.shields.io/github/issues/konotorii/useful-functions-ts) ![GitHub issues](https://img.shields.io/github/issues/konotorii/useful-functions-ts)


## Roadmap
- - -

- Console Progress

## Features
- - -

To-Be-Completed as updates roll-out.

### Import all functions at once
```ts
import {tools} from "useful-functions-ts";

tools.delay();
tools.formatNumber();
// etc.
```

### Delay
```ts
import {delay} from "useful-functions-ts";

await delay(1000); // Wait for 1000 milliseconds
```

### Format Number

```ts
import {formatNumber} from "useful-functions-ts";

formatNumber(192874.24, 'en'); // Returns 192,874.24
formatNumber(192874.24, 'de'); // Returns 192.874,24
```

### Percentage

```ts
import {percentage} from "useful-functions-ts";

percentage(1, 100); // Returns 1%
```

### Logger

```ts
import {Logger} from 'useful-functions-ts'

const logger = new Logger("Main Process", {
    outputFile?: boolean, // Save output to file
    filePath?: string, // relative or absolute to folder
    outputJson?: boolean, // Be able to access the outputs as json with logger.getOutput()
}); // These settings are optional

logger.info("This is info");
logger.log("Simple log");
logger.warn("A warning");
logger.error("An error occured");
logger.success("Succeeded!");
logger.debug("Debug info");
```