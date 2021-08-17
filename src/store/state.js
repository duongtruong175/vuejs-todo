const LOCAL_STORAGE_KEY = "todo-app";

export default {
  tasks: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
};
