
test("add 2+2 is 4", () => {
    expect(undefined).toBeUndefined();
})

test("0.1 + 0.2 is 0.3000000004 but should be 0.3", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
})

test("use toBeLessThan, toBeGreaterThan, toBeGreaterThanEqualTo, toBeLessThanEqualTo", () => {
    let ans = 2+2;
    expect(ans).toBeLessThan(5);
    expect(ans).toBeGreaterThan(3.4);
    expect(ans).toBeGreaterThanOrEqual(2.7);
    expect(ans).toBeLessThanOrEqual(4.5);
    expect(ans).toEqual(4);
    expect(ans).toBe(4);
})