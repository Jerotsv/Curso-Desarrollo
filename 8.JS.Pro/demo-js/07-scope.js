function add(a, b) {
    const r = a + b;
    return r;
}

console.log('Inicio');
const x = 12;
const y = 2;
const z = add(x, y);

const media = (...values) => {
    // let total = 0;
    // values.forEach(item => total += item);

    const total = values.reduce((a, b) => a + b);
    return total / values.length;
};
