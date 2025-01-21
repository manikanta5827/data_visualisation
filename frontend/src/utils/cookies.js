export const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };
  
  export const getCookie = (name) => {
    return document.cookie.split("; ").find((row) => row.startsWith(name))?.split("=")[1];
  };
  
  export const deleteCookie = (name) => {
    setCookie(name, "", -1);
  };
  