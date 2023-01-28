function FetchData(callback) {
    setTimeout(() => {
        callback("My Data Jest")
    }, 2000);
}


test("call back async test call", (done) => {
    function callback(data) {
        expect(data).toBe("My Data Jest");
        done();
    }

    FetchData(callback);
})