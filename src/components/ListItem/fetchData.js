export const fetchData = () => {
  return fetch("https://api.myjson.com/bins/13pqgi/").then(response =>
    response.json()
  );
};
