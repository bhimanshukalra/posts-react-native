const baseUrl = 'https://jsonplaceholder.typicode.com/';
export const httpPost = async endpoint => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${endpoint}`)
      .then(response => response.json())
      .then(json => {
        resolve(json);
      })
      .catch(exception => reject(exception));
  });
};
