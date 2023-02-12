/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { IApiParams } from "@/interfaces/api/IApiParams";
import { IApiResponse } from "@/interfaces/api/IApiResponse";
import { IProduct } from "@/interfaces/products/IProduct";

const api = axios.create({
  baseURL: "https://mks-frontend-challenge-api.herokuapp.com",
});

export default async function getProducts(
  params: IApiParams
): Promise<IProduct[] | undefined> {
  try {
    const response = await api.get<IApiResponse>("/api/v1/products", {
      params,
    });
    return response.data.products;
  } catch (err) {
    console.error("Erro ao buscar produtos", err);
  }
}
