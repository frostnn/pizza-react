const getDataApi = () => {
  return fetch('http://localhost:3000/db.json')
    .then((resp) => resp.json())
    .then((data) => data);
};

export default getDataApi;
