import axios from "axios";

const baseURL = "https://todo-backend-2jyp.onrender.com/todo";

const getAllTodo = async (setTodo) => {
  await axios
    .get(`${baseURL}/get-todo`)
    .then(({ data }) => {
      console.log("data ---> ", data);
      setTodo(data);
    })
    .catch((err) => console.log(err.message));
};

const addTodo = async (text, setText, setTodo) => {
  await axios.post(`${baseURL}/add-todo`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllTodo(setTodo);
  });
};

const updateTodo = async (todoId, text, setText, setTodo, setIsUpdating) => {
  await axios
    .post(`${baseURL}/update-todo`, { _id: todoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = async (_id, setTodo) => {
  await axios
    .post(`${baseURL}/delete-todo`, { _id })
    .then((data) => {
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
