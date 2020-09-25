import fetch from "isomorphic-unfetch";
import { DATA_ENDPOINT } from "../constants";

const fetchData = async (key) => {
  console.log(key, ": key is unused")
  return await fetch(DATA_ENDPOINT).then((res) => res.json());
};

export default fetchData;
