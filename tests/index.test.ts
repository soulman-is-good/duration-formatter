import { expect } from "chai";
import { formatMs, parseDuration, timeInUnitsToMillis } from "../src/index";

describe("Duration formatter tests", () => {
    describe("#parseDuration tests", () => {
        it("Should parse correctly", () => {
            expect(parseDuration("2hours 30 minutes, 20 sec 453ms")).to.eq(9020453);
            // TODO more
        });
    });

    describe("Formatter tests", () => {
        it("Should format correctly", () => {
            expect(formatMs(1296575243)).to.eq("2 weeks 1 day 9 minutes 35 seconds 243 milliseconds")
            // TODO more
        });
    });

    describe("#timeInUnitsToMillis tests", () => {
        it("should return correct milliseconds", () => {
            expect(timeInUnitsToMillis(0.5, "w")).to.eq(302400e3);
            expect(timeInUnitsToMillis(0.5, "d")).to.eq(43200e3);
            expect(timeInUnitsToMillis(0.5, "h")).to.eq(1800e3);
            expect(timeInUnitsToMillis(0.5, "m")).to.eq(30e3);
            expect(timeInUnitsToMillis(0.5, "s")).to.eq(500);
            expect(timeInUnitsToMillis(1000, "ms")).to.eq(1000);
        });
    });
});
