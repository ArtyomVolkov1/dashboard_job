import Tasks from '../components/Tasks/Tasks';

const Todo = () => {
  return (
    <div className="p-3 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <Tasks />
      </div>
    </div>
  );
};

export default Todo;
