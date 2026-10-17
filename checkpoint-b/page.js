import { items } from "./items.js";

/**
 * Draws an array of items into #list, replacing whatever was there.
 * Each item becomes an <li> with class "goods-item" and text "{name} ({category})".
 */
export function renderItems(list) {
  const listElement = document.querySelector("#list");
  if (!listElement) return;

  listElement.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("goods-item");
    li.textContent = `${item.name} (${item.category})`;
    listElement.appendChild(li);
  });
}

/**
 * Returns only the bags (category === "bags").
 */
export function matching() {
  return items.filter((item) => item.category === "bags");
}

/**
 * Sets the page up:
 * 1. Draws all items straight away.
 * 2. Listens for a click on #shortlist to filter to matching() bags.
 */
export function start() {
  renderItems(items);

  const shortlistBtn = document.querySelector("#shortlist");
  if (shortlistBtn) {
    shortlistBtn.addEventListener("click", () => {
      renderItems(matching());
    });
  }
}

// Automatically start when loaded in browser
start();
