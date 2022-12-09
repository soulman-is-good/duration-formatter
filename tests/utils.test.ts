import { expect } from "chai";
import { isNumericString, normalizeUnit } from "../src/utils";

describe("Testing utils", () => {
    describe("#isNumericString guard", () => {
        it("Should return true for numeric strings", () => {
            expect(isNumericString("1")).to.be.true;
            expect(isNumericString("200000")).to.be.true;
            expect(isNumericString("20.0000")).to.be.true;
            expect(isNumericString("-203")).to.be.true;
            expect(isNumericString("-23.432")).to.be.true;
            expect(isNumericString("-23432")).to.be.true;
        });

        it("Should return false for non numeric strings", () => {
            expect(isNumericString("1a")).to.be.false;
            expect(isNumericString("sd200000")).to.be.false;
            expect(isNumericString("2000,9")).to.be.false;
            expect(isNumericString("--203")).to.be.false;
            expect(isNumericString("--23.432")).to.be.false;
            expect(isNumericString("-23,432")).to.be.false;
            expect(isNumericString("23432-")).to.be.false;
            expect(isNumericString("")).to.be.false;
            expect(isNumericString(" ")).to.be.false;
            expect(isNumericString("       ")).to.be.false;
        });

        it("Should return false for non strings", () => {
            expect(isNumericString(undefined)).to.be.false;
            expect(isNumericString(null)).to.be.false;
            expect(isNumericString(true)).to.be.false;
            expect(isNumericString(false)).to.be.false;
            expect(isNumericString({})).to.be.false;
            expect(isNumericString([])).to.be.false;
            expect(isNumericString(123)).to.be.false;
            expect(isNumericString(12.3)).to.be.false;
            expect(isNumericString(NaN)).to.be.false;
        });
    });

    describe("#normailzeUnits tests", () => {
        it("should normailze unit string correctly", () => {
            expect(normalizeUnit("w")).to.eq("w");
            expect(normalizeUnit("week")).to.eq("w");
            expect(normalizeUnit("weeks")).to.eq("w");
            expect(normalizeUnit("  WeEkS ")).to.eq("w");
            expect(normalizeUnit("d")).to.eq("d");
            expect(normalizeUnit("day")).to.eq("d");
            expect(normalizeUnit("days")).to.eq("d");
            expect(normalizeUnit("h")).to.eq("h");
            expect(normalizeUnit("hour")).to.eq("h");
            expect(normalizeUnit("hours")).to.eq("h");
            expect(normalizeUnit("m")).to.eq("m");
            expect(normalizeUnit("min")).to.eq("m");
            expect(normalizeUnit("minute")).to.eq("m");
            expect(normalizeUnit("minutes")).to.eq("m");
            expect(normalizeUnit("s")).to.eq("s");
            expect(normalizeUnit("sec")).to.eq("s");
            expect(normalizeUnit("second")).to.eq("s");
            expect(normalizeUnit("seconds")).to.eq("s");
            expect(normalizeUnit("ms")).to.eq("ms");
            expect(normalizeUnit("millis")).to.eq("ms");
            expect(normalizeUnit("millisec")).to.eq("ms");
            expect(normalizeUnit("millisecond")).to.eq("ms");
            expect(normalizeUnit("milliseconds")).to.eq("ms");
            expect(normalizeUnit("  milliseconds ")).to.eq("ms");
        });
        it("should throw on incorrect unit", () => {
            expect(() => normalizeUnit("qwe")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("123")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("yreas")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("yrs")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("mth")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("mo")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("wks")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("wk")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("dayz")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("ds")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("doys")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("hrz")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("hrs")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("ho")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("mnts")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("mnt")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("mns")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("se")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("sek")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("sekondz")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("mz")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("mils")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("mills")).to.throw("Unkown unit passed");
            expect(() => normalizeUnit("milliss")).to.throw("Unkown unit passed");
        });
    });
});