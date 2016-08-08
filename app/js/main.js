(function () {
    'use strict';

    // New vars
    const nums = [1, 2, 3, 4, 5, 6];
    let prueba = 'cocoman';

    // Default values
    function f(x, y = 7, z = 42) {
        return x + y + z;
    }

    f();

    //Arrow functions
    nums.forEach(num => {
        // Template
        console.log(`There are ${num} ${prueba} coding...`);
    });

    return nums + ' ' + prueba;
})();