import axios from "axios";

const API_URL = process.env_REACT-APP_API_URL || "http://127.0.0.1:8000/api/tasks/";

export const getTasks = async (search = "") => {
  try {
    const response = await axios.get(`${API_URL}?search=${search}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

export const updateTask = async (id, task) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, task);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}${id}/`);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
