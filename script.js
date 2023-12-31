document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);

  const url = `https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
        document.querySelector("img").style.display = "block";
        document.querySelector("iframe").style.display = "none";
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        document.querySelector("img").style.display = "none";
        document.querySelector("iframe").style.display = "block";
      }
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
