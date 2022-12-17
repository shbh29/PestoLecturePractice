let arr = [1,2,3];

test("Array contains or not", () => {
    // expect(arr.indexOf(2)).toBe(0);
    expect(new Set(arr)).toContain(55);
});
