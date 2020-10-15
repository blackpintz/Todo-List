export default () => {
  const removeElements = (...elements) => elements.forEach((el) => document.getElementById(el).remove());

  return { removeElements };
};