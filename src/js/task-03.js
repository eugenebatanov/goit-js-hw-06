const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");

const makeMarkup = (image) =>
  `<li>
  <img src="${image.url}" alt="${image.alt}" width="360" height="244">
  </li>`;

const galleryMaker = images.map(makeMarkup).join("");

listEl.insertAdjacentHTML("afterbegin", galleryMaker);

listEl.style.display = "flex";
listEl.style.listStyle = "none";
listEl.style.justifyContent = "space-around";
