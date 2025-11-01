import axios from "axios";

export async function productsData() {
  const response = await axios.get("https://fakestoreapiserver.reactbd.org/api/products");
  return response.data.data; // 👈 on ne garde que le tableau
}