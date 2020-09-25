import fetch from "isomorphic-unfetch";

const fetchData = async ({}) => {
  return await fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
};

export default fetchData;
