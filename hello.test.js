// hello.test.js
const hello = require('./hello');

test('debería retornar "Hola Mundo"', () => {
    expect(hello()).toBe("Hola Mundo");
});
