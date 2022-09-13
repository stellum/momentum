const Background = () => {
  const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

  const chosenImage = images[Math.floor(Math.random() * images.length)];

  const bgImage = document.querySelector("#background-image");

  bgImage.style = `background-image: url('img/${chosenImage}')`;
};

export default Background;

// bgImage.src = `img/${chosenImage}`;

// appendChild 하는일? add HTML to the <body>
// document.body.appendChild(bgImage);

// const imageWidth = 1970;
// const imageHeight = 1080;
// const collectionID = 8469893;

// console.log(
//   `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`
// );
// fetch(
//   `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`
// )
//   .then((response) => {
//     console.log(response);
//     const backgroundImage = document.querySelector("#background-image");
//     backgroundImage.style = `background-image: url('${response.url}')`;
//   })
//   .catch((error) => {
//     console.log(error);
//   });
