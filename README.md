# Duration formatter and parser

This library helps to format duration to and from human readable format.

## How to use

In NodeJS
```ts
import { parseDuration, formatMs } from "duration-formatter";

parseDuration("2hours 30 minutes, 20 sec 453ms") === 9020453;
formatMs(1296575243) === "2 weeks 1 day 9 minutes 35 seconds 243 milliseconds";
```

In the browser - not yet supported

## More libraries like this one
- Also duration formatter and parser, but for "hh:mm:ss" format from @cloudtion: https://www.npmjs.com/package/duration-formatter
- If you need just to format duration from milliseconds in "hh:mm:ss" format (@ungoldman): https://www.npmjs.com/package/format-duration
- Nice library to format milliseconds to human readable format, no parse though and only for esm (@sindresorhus): https://www.npmjs.com/package/pretty-ms
- Duration formatter and parser as this library but esm and having lodash dependency (@nicolas-van): https://www.npmjs.com/package/simple-duration
- Above one forked from this lib by @Raul-Tech-Support, but still with lodash dependency: https://www.npmjs.com/package/simple-duration-converter
