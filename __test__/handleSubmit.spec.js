import { handleSubmit } from "../src/client/js/formHandler";
import { isValidUrl } from "../src/client/js/urlChecker";


describe("Testing the submit functionality", () => {
    test("Testing if handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
});

describe("Testing the submit functionality", () => {
    test("Testing if isValidUrl if statement works -> true", () => {
        const input = "https://www.valentinog.com/blog/jest/";
        expect(isValidUrl(input)).toBeTruthy();
    })
    test("Testing if isValidUrl if statement works -> false", () => {
        const input = "ef2kkfneo";
        expect(isValidUrl(input)).toBeFalsy();
    })
});