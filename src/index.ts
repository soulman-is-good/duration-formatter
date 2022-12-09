import { DAY_IN_MS, HOUR_IN_MS, isNumericString, MINUTE_IN_MS, normalizeUnit, Unit, unitToWord, WEEK_IN_MS } from "./utils";

export function parseDuration(durationInHumanFormat: string): number {
  const formatRegexp =
    /(-?\d+(\.\d+)?)\s*(m(illi)?s(ec(onds?)?)?|s(ec(onds?)?)?|m(in(utes?)?)?|h(ours?)?|d(ays?)?|w(eeks?)?)/gi;
  let result = 0;
  let match = formatRegexp.exec(durationInHumanFormat);

  while (match) {
    const valRaw = match[1];

    if (!isNumericString(valRaw)) {
      throw new Error(`Value is not numeric: ${valRaw} in ${match[0]}`);
    }
    const val = parseFloat(valRaw);
    const unit = normalizeUnit(match[3] ?? "ms");

    result += timeInUnitsToMillis(val, unit);
    match = formatRegexp.exec(durationInHumanFormat);
  }

  return result;
}

export function formatMs(timeInMilliseconds: number): string {
  let result: string = '';
  let time = timeInMilliseconds;
  if (time >= WEEK_IN_MS) {
    const weeks = Math.floor(time / WEEK_IN_MS);
    result += ` ${weeks} ${unitToWord("w", weeks > 1)}`;
    time = time % WEEK_IN_MS;
  }
  if (time >= DAY_IN_MS) {
    const days = Math.floor(time / DAY_IN_MS);
    result += ` ${days} ${unitToWord("d", days > 1)}`;
    time = time % DAY_IN_MS;
  }
  if (time >= HOUR_IN_MS) {
    const hours = Math.floor(time / HOUR_IN_MS);
    result += ` ${hours} ${unitToWord("h", hours > 1)}`;
    time = time % HOUR_IN_MS;
  }
  if (time >= MINUTE_IN_MS) {
    const minutes = Math.floor(time / MINUTE_IN_MS);
    result += ` ${minutes} ${unitToWord("m", minutes > 1)}`;
    time = time % MINUTE_IN_MS;
  }
  if (time >= 1000) {
    const seconds = Math.floor(time / 1000);
    result += ` ${seconds} ${unitToWord("s", seconds > 0)}`;
    time = time % 1000;
  }
  if (time > 0) {
    result += ` ${time} ${unitToWord("ms", time > 1)}`;
  }

  return result.trim();
}

export function timeInUnitsToMillis(time: number, unit: Unit): number {
  switch (unit) {
    case "ms":
      return time;
    case "s":
      return time * 1000;
    case "m":
      return time * MINUTE_IN_MS;
    case "h":
      return time * HOUR_IN_MS;
    case "d":
      return time * DAY_IN_MS;
    case "w":
      return time * WEEK_IN_MS;
    default:
      throw new Error(`Unknown unit: '${unit}'`);
  }
}
