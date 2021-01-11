const pianoKeys = ["A", "S", "D", "F", "G", "H", "J"];

document.addEventListener("keypress", (event) => {
  const keyUpper = event.key.toUpperCase();

  pianoKeys.includes(keyUpper)
    ? console.log(`The '${keyUpper}' key is pressed.`)
    : console.warn("Wrong key is pressed.");
});
//event.code when you do not care about case and vice versa, use event.key when you care about case
