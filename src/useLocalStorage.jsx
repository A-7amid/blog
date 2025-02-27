export const useLocalStorage = (key) => {
  const setItem = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { setItem };
};
