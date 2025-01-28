const button = document.querySelector("#button");
const auditElement = document.querySelector("#audio");

let apiKey = "1ae3d74aab7d47cbb38d9684753882b5";
let apiUrl = `http://api.voicerss.org/?key=${apiKey}&hl=en-us&src=Hello world!`;

function toggleButton() {
  button.disabled = !button.disabled;
}

function tellMe(joke) {
  VoiceRSS.speech({
    key: "1ae3d74aab7d47cbb38d9684753882b5",
    src: joke,
    hl: "en-US",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

async function getJokes() {
  let joke = "";
  const apiUrl =
    "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    console.log(data);
    tellMe(joke);

    toggleButton();
  } catch (error) {
    console.log("woops", error);
  }
}

getJokes();
