
export const setToLS = (key: string, value: string | object) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLS = (key: string) => {
  const value = window.localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
}

