import { isValidUrl } from "../src/client/js/urlChecker";

describe("Testing if input URL gets validated correctly", () => {
    test("output of invalid URL should be false", () => {
        const input = "ef2kkfneo";
        expect(isValidUrl(input)).toBe(false);
    })
    test("output of valid URL should be true", () => {
        const input = "https://www.valentinog.com/blog/jest/";
        expect(isValidUrl(input)).toBe(true);
    })
});