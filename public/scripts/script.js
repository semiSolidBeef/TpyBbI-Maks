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
    block.appendChild(description);
    block.appendChild(link);

    return block;
  });

  blocks.forEach((block) => {
    parentElement.appendChild(block);
  });
}

fetchData();
