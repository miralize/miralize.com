export default function (array, currentItem) {
  const newItems = array.filter((i) => i !== currentItem);
  return newItems[Math.floor(Math.random() * newItems.length)];
}
