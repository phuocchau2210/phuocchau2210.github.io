import axios from "axios";
const baseUrl = "http://localhost:8080/api/notes";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

export default { getAll };
