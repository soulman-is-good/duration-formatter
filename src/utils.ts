export const Unit = ["w", "d", "h", "m", "s", "ms"] as const;
export type Unit = typeof Unit[number];

export const WEEK_IN_MS = 604800e3;
export const DAY_IN_MS = 86400e3;
export const HOUR_IN_MS = 3600e3;
export const MINUTE_IN_MS = 60e3;

export const isUnit = (val: unknown): val is Unit =>
  typeof val === "string" && Unit.includes(val as any);

export const isNumericString = (val: unknown): val is string =>
  typeof val === "string" && /^-?\d+(\.\d+)?$/.test(val);

export const normalizeUnit = (unitRaw: string): Unit => {
  const unit = unitRaw
    .trim()
    .toLowerCase()
    .replace(/^(w)(eeks?)?$/, "$1")
    .replace(/^(d)(ays?)?$/, "$1")
    .replace(/^(h)(ours?)?$/, "$1")
    .replace(/^(m)(in(utes?)?)?$/, "$1")
    .replace(/^(s)(ec(onds?)?)?$/, "$1")
    .replace(/^(ms)(ec(onds?)?)?$/, "$1")
    .replace(/^millis(ec(ond)?s?)?$/, "ms");

  if (!isUnit(unit)) {
    throw new Error(`Unkown unit passed ${unitRaw}`);
  }

  return unit;
};

export const unitToWord = (unit: Unit, plural = false): string => {
  const pluralEnd = plural ? "s" : "";
  switch (unit) {
    case "w":
      return `week${pluralEnd}`;
    case "d":
      return `day${pluralEnd}`;
    case "h":
      return `hour${pluralEnd}`;
    case "m":
      return `minute${pluralEnd}`;
    case "s":
      return `second${pluralEnd}`;
    case "ms":
      return `millisecond${pluralEnd}`;
    default:
      throw new Error(`Unknown unit: '${unit}'`);
  }
};
