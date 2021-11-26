const ktoc = function (arg1) {
  const celsius = (arg1 - 273.15);
  return celsius;
};
const ktof = function (arg1) {
  const m = ktoc(arg1);
  const fahrenheit = ((m * 9 / 5) + 32);
  return fahrenheit;
};

export { ktoc, ktof };
