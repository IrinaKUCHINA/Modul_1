'use strict';

const nod = (n, m) => {
    if (m !== 0) {
        const k = n % m;
        return nod(m, k);
    }
    return n;
};

console.log(nod(2, 3));
