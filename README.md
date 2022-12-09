# Duration formatter

This library helps to format duration to and from human readable format.

## How to use

```ts
import { parseDuration, formatMs } from "duration-formatter";

parseDuration("2hours 30 minutes, 20 sec 453ms") === 9020453;
formatMs(1296575243) === "2 weeks 1 day 9 minutes 35 seconds 243 milliseconds";
```
