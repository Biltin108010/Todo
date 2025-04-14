import axios from "axios";

const API_URL = "https://todo-backend-6osi.onrender.com/api/tasks/";


const token = "207995070b225e8fa4dbae99e83b76e2a4f532c8"; 

// Fetching tasks with authentication
export const getTasks = async (search = "") => {
  try {
    const response = await axios.get(`${API_URL}?search=${search}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Using the token in the Authorization header
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

// Adding a task with authentication
export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`, // Using the token in the Authorization header
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

// Updating a task with authentication
export const updateTask = async (id, task) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, task, {
      headers: {
        Authorization: `Bearer ${token}`, // Using the token in the Authorization header
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

// Deleting a task with authentication
export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`, // Using the token in the Authorization header
      },
    });
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
