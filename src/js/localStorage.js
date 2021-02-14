export const getFromLocalstorage = name => {
  return JSON.parse(window.localStorage.getItem(name));
};

export const setToLocalStorage = (name, arr) => {
  return window.localStorage.setItem(name, JSON.stringify(arr));
};
