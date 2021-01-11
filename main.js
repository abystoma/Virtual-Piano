const pianoKeys = ["A", "S", "D", "F", "G", "H", "J"];

document.addEventListener("keypress", (event) => {
  const keyUpper = event.key.toUpperCase();
  //let audio = new Audio(`keysounds/${keyUpper}.mp3`);
  let audio = new Audio(document.getElementById(keyUpper).src);

  pianoKeys.includes(keyUpper)
    ? audio.play()
    : console.warn("Wrong key is pressed.");
});
//event.code when you do not care about case and vice versa, use event.key when you care about case
