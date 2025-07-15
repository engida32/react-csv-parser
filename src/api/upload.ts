import axios from "axios";

const API_BASE = import.meta.env.VITE_API_ENDPOINT;

export async function uploadCSV(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API_BASE}upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
}
