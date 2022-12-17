function FetchData() {
    return new Promise((res) => {
        setTimeout(() => {
            res(10);
        }, 2000);        
    });
}

test("Promise working or not", () => {
    // expect.assertions(1)
    return FetchData().then((data) => {
        expect(data).toBe(11);
  
    })
})