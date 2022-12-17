function ThrowsError() {
    throw new TypeError("Mandatory Error");
}


test("assert throw error", () => {
    // expect(ThrowsError).toThrow();
    expect(ThrowsError).toThrow(ReferenceError);
})