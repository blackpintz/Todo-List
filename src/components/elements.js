export default (type, text, ...classes) => {
  const elementType = document.createElement(type);
  elementType.classList.add(...classes);
  elementType.innerText = text;
  return elementType;
};