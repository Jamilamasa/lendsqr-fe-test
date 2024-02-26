import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

// Get all Users
export const getAllUsers = async () => {
  const res = await axios.get(`${baseUrl}/1e00dac1-7959-4f36-a4ff-e8deb5037cc3`)
  return res.data;
};

export default { getAllUsers };
