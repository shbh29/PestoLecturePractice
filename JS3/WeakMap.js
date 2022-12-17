let wm = new WeakMap();

let obj = {
    name: "Shubham"
}

wm.set(obj, "Sneha");

console.log(wm.get(obj));

// WM used in dom