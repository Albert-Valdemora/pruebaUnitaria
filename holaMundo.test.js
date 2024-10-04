const holaMundo = require('./holaMundo');

test('Debe devolver un Hola Mundo', () => {
  expect(holaMundo()).toBe("Hola undo");
});
