const GetFromLS = (key: string): string | null => {

  const localValue = localStorage.getItem(key);

  if (localValue !== null) {
    return JSON.parse(localValue);
  }
  return null;
}

export default GetFromLS