expect.extend({
    toBeWithinRange(expected, lower, upper) {
        let pass = expected >= lower && expected <= upper;
        let message = pass ? `${expected} is withing range` : `${expected} is not within range (${lower}, ${upper}).`
        return {
            pass: pass,
            message: () => message
        }
    }
})

test("Expected value is withing range", () => {
    expect(1).toBeWithinRange(0, 10);
})