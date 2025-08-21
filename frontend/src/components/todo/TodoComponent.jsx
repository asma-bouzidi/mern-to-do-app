import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const TodoComponent = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`/api/todos/${id}`);
        setTodo(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch todo");
        console.log("Error fetching todo:", error);
        setLoading(false);
      }
    };
    fetchTodo();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
          <p className="text-red-500 text-lg font-medium">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer"
          >
            Back to List
          </button>
        </div>
      </div>
    );

  if (!todo)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
          <p className="text-gray-600 text-lg font-medium">Todo not found</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer"
          >
            Back to List
          </button>
        </div>
      </div>
    );

  const createdAt = new Date(todo.createdAt).toLocaleString();
  const updatedAt = new Date(todo.updatedAt).toLocaleString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 transform transition-all duration-300 hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 tracking-tight">
          Todo Details
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <label className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
              Task
            </label>
            <p className="text-gray-800 text-xl font-medium mt-1">
              {todo.text}
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <label className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
              Status
            </label>
            <p
              className={`text-xl font-medium mt-1 ${
                todo.completed ? "text-green-600" : "text-red-600"
              }`}
            >
              {todo.completed ? "Completed" : "Not Completed"}
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <label className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
              Created At
            </label>
            <p className="text-gray-700 mt-1">{createdAt}</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <label className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
              Last Updated
            </label>
            <p className="text-gray-700 mt-1">{updatedAt}</p>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold tracking-wide transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
          >
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;