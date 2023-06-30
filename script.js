const data = [
  {
    image: "./img/nerzhlist.jpg",
    title: "Листы стальные",
    description:
      "Lorem ipsum dolor sit consectetur",
    link: "Расчитать заказ",
  },
	{
    image: "./img/shveller-1.jpg",
    title: "Швеллера",
    description:
      "Lorem ipsum dolor sit consectetur",
    link: "Расчитать заказ",
  },
  {
    image: "./img/126.0x460@2x.jpg",
    title: "Трубы профильные",
    description:
      "Lorem ipsum dolor sit consectetur",
    link: "Расчитать заказ",
  },
  {
    image: "./img/armatura_aIII (400)_v.jpg",
    title: "Арматура",
    description:
      "Lorem ipsum dolor sit consectetur",
    link: "Расчитать заказ",
  },
	{
    image: "./img/nerzhaveyushie-listy_DXPp7dq.jpg",
    title: "Нерж.листы",
    description:
      "Lorem ipsum dolor sit consectetur",
    link: "Расчитать заказ",
  },
	{
    image: "./img/truba1.jpeg",
    title: "Трубы кругл. стальные",
    description:
      "Lorem ipsum dolor sit consectetur",
    link: "Расчитать заказ",
  },
  {
    image: "./img/dvutavr.jpg",
    title: "Двутавр",
    description:
      "Lorem ipsum dolor sit consectetur",
    link: "Расчитать заказ",
  },
  {
    image: "./img/nerzhtrub.jpg",
    title: "Трубы нерж.",
    description:
      "Lorem ipsum dolor sit consectetur",
    link: "Расчитать заказ",
  },
];

const parentElement = document.getElementById("parent");

const blocks = data.map((item) => {
  const block = document.createElement("div");
  block.className = "block";

	
  const image = document.createElement("img");
  image.className = "image";
  image.textContent = item.image;
  image.src = item.image;
	
  const title = document.createElement("h2");
  title.className = "title";
  title.textContent = item.title;
	
  const description = document.createElement("p");
  description.className = "description";
  description.textContent = item.description;
	
	const link = document.createElement("a");
	link.className = "link";
  link.textContent = item.link;
	link.href = '#';

  block.appendChild(image);
  block.appendChild(title);
  block.appendChild(description);
	block.appendChild(link);


  return block;
});

blocks.forEach((block) => {
  parentElement.appendChild(block);
});