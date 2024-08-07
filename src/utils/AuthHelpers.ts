const getAuth = (NAME_KEY: string) => {
  if (!localStorage) {
    return;
  }

  const value = localStorage.getItem(NAME_KEY);
  if (!value) {
    return null;
  }

  try {
    const auth = JSON.parse(value);
    if (auth) {
      return auth;
    }
  } catch (error) {
    console.error("AUTH LOCAL STORAGE PARSE ERROR", error);
  }
};

const setAuth = <T>(data: T, NAME_KEY: string) => {
  if (!localStorage) {
    return;
  }

  try {
    const value = JSON.stringify(data);
    localStorage.setItem(NAME_KEY, value);
  } catch (error) {
    console.error("AUTH LOCAL STORAGE SAVE ERROR", error);
  }
};

const removeAuth = (NAME_KEY: string) => {
  if (!localStorage) {
    return;
  }

  try {
    localStorage.removeItem(NAME_KEY);
  } catch (error) {
    console.error("AUTH LOCAL STORAGE REMOVE ERROR", error);
  }
};

export { getAuth, setAuth, removeAuth };
