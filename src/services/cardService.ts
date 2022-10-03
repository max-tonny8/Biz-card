import axios from "axios";
import { Card } from "../interfaces/Card";
import _ from "lodash";

const api: string = process.env.REACT_APP_API || "";

// Add Card
export const addCard = (newCard: Card): Promise<any> => {
  return axios.post(`${api}cards`, newCard, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// Get All Cards
export const getAllCards = (): Promise<any> => {
  return axios.get(`${api}cards`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// Get Card by Card ID
export const getCardById = (id: string): Promise<any> => {
  return axios.get(`${api}cards/${id}`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// Get Card by User ID
export const getCardByUserId = (): Promise<any> => {
  return axios.get(`${api}cards/my-cards`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// Edit Card
export const editCard = (card: Card): Promise<any> => {
  let body = _.omit(card, ["_id"]);
  return axios.put(`${api}cards/${card._id}`, body, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

// Delete Card
export const deleteCard = (card: Card): Promise<any> => {
  return axios.delete(`${api}cards/${card._id}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};
