function a() {
    let fn;
    {
        var x = 5;
        fn = function () {
            console.log(x);
        };
    }
    return fn;
}

const b = a();
b();