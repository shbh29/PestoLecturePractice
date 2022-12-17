let str = "Hello Mr. Alfred. Is batman in Mansion?"
test("String Match", () => {
    expect(str).not.toMatch(/Mrs/);
})