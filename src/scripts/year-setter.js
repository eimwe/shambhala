const setCurrentyear = (yearNode) => {
  const date = new Date();
  let currentYearNode = document.querySelector(yearNode);

  if (currentYearNode.textContent.length > 0) currentYearNode.textContent = '';

  currentYearNode.append(date.getFullYear());
}

export default setCurrentyear;