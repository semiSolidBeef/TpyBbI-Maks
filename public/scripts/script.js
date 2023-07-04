const parentElement = document.getElementById("parent");

async function fetchData() {
  try {
    const response = await fetch("products.json");
    const data = await response.json();
    createBlocks(data);
  } catch (error) {
  }
}

function createBlocks(fetchedData) {
  const data = fetchedData.data
  const blocks = data.map((item) => {
    const block = document.createElement("div");
    block.className = "block";

    const image = document.createElement("img");
    image.className = "image";
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
    link.href = "#";

    block.appendChild(image);
    block.appendChild(title);
    // block.appendChild(description);
    // block.appendChild(link);

    return block;
  });

  blocks.forEach((block) => {
    parentElement.appendChild(block);
  });
}

fetchData();

const arr = [
	{
		"picture": '../img/consul.png',
		"paragraph": 'Бесплатная консультация',
		"scndparagraph": 'Lorem ipsum dolor sit consectetur'
	},
	{
		"picture": '../img/ruki.png',
		"paragraph": 'Предложим лучшую цену',
		"scndparagraph": 'Lorem ipsum dolor sit consectetur'
	},
	{
		"picture": '../img/gruz.png',
		"paragraph": 'Бесплатная доставка',
		"scndparagraph": 'Lorem ipsum dolor sit consectetur'
	}
];

const cardesElement = document.getElementById("cardes");

const cards = arr.map((item) => {
  const card = document.createElement("div");
  card.className = "card";


  const picture = document.createElement("img");
  picture.className = "picture";
  picture.textContent = item.picture;
  picture.src = item.picture;

  const paragraph = document.createElement("p");
  paragraph.className = "paragraph";
  paragraph.textContent = item.paragraph;

  const scndparagraph = document.createElement("p");
  scndparagraph.className = "scndparagraph";
  scndparagraph.textContent = item.scndparagraph;



  card.appendChild(picture);
  card.appendChild(paragraph);
  // card.appendChild(scndparagraph);



  return card;

});
cards.forEach((card) => {
  cardesElement.appendChild(card);
});
