import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { closeModal } from "../../store/slices/modalSlice";
import { addTask, deleteTask, editTask } from "../../store/slices/taskSlice";
import { getTaskById } from "../../store/selectors";

// Решить проблему с типами

interface MyFormValue {
  title?: string;
  description?: string;
  selectOptions?: string;
}

type HandleClose = {
  handleClose: () => void;
};

type TodoFormSchemaType = yup.ObjectSchema<{
  title: string;
  description: string;
}>;

const todoFormSchema: TodoFormSchemaType = yup.object().shape({
  title: yup
    .string()
    .required("Карточка не может быть пустой")
    .min(3, "Слишком коротко!"),
  description: yup
    .string()
    .required("Описание не может быть пустым")
    .min(3, "Слишком коротко!"),
});

const AddTaskForm = ({ handleClose }: HandleClose) => {
  const repos = useAppSelector((state) => state.persistedReducer.github.repos);
  const initialValues: MyFormValue = {
    title: "",
    description: "",
    selectOptions: "Без репозитория",
  };
  const dispatch = useAppDispatch();
  return (
    <div className="rounded-xl border border-indigo-500 bg-white p-4 shadow-lg w-96 md:w-1/2 lg:w-[500px] ">
      <div className="flex items-center gap-4 lg:justify-center">
        <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <p className="font-medium sm:text-lg">Новая задача</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={todoFormSchema}
        onSubmit={function ({
          title,
          description,
          selectOptions,
        }: MyFormValue) {
          try {
            dispatch(
              addTask({
                id: uuidv4(),
                task: {
                  title,
                  description,
                  selectOptions,
                },
                completed: false,
              })
            );
            handleClose();
          } catch (error) {
            console.log("Error", error);
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <label
              htmlFor="task"
              className="mt-4 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <Field
                id="title"
                name="title"
                placeholder="Задача..."
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Название...
              </span>
            </label>
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
            <label
              htmlFor="task"
              className="block text-sm font-medium text-gray-900"
            >
              <Field
                as="select"
                id="selectOptions"
                name="selectOptions"
                className="mt-3 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md"
              >
                {repos.map((repo) => (
                  <option key={repo.value} value={repo.value}>
                    {repo.key}
                  </option>
                ))}
              </Field>
            </label>
            <label
              htmlFor="task"
              className="mt-4 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <Field
                as="textarea"
                rows={4}
                id="description"
                name="description"
                placeholder="Описание..."
                className=" resize-none peer h-20 w-full border-none  p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description}</p>
            )}
            <div className="mt-6 sm:flex sm:gap-5 lg:justify-start">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
              >
                Добавить
              </button>

              <button
                onClick={handleClose}
                className="mt-2 inline-block w-full rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-600 px-5 py-3 text-center text-sm font-semibold sm:mt-0 sm:w-auto"
              >
                Закрыть
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const DeleteTask = ({ handleClose }: HandleClose) => {
  const dispatch = useAppDispatch();
  const taskId = useAppSelector((state) => state.modal.taskId);
  const handleDelete = () => {
    dispatch(deleteTask({ taskId: taskId }));
    dispatch(closeModal());
  };
  return (
    <div className="rounded-xl border border-indigo-500 bg-white p-4 shadow-lg w-96 md:w-1/2 lg:w-[500px] ">
      <div className="flex flex-col justify-center items-center gap-2 md:flex-row  lg:justify-center">
        <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <p className="font-medium sm:text-lg">Удалить задачу?</p>
      </div>
      <div className="mt-3 flex justify-center items-center gap-1 text-gray-500">
        <div className="mt-6 sm:flex sm:gap-5 lg:justify-center">
          <button
            onClick={handleDelete}
            className="inline-block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
          >
            Удалить
          </button>

          <button
            onClick={handleClose}
            className="mt-2 inline-block w-full rounded-lg bg-red-500 hover:bg-red-700 px-5 py-3 text-center text-sm font-semibold text-white sm:mt-0 sm:w-auto"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

const EditTask = ({ handleClose }: HandleClose) => {
  const taskId = useAppSelector((state) => state.modal.taskId);
  const task = useAppSelector(getTaskById(taskId));
  const repos = useAppSelector((state) => state.persistedReducer.github.repos);
  const titleTask = task?.task.title;
  const descriptionTask = task?.task.description;
  const selectOption = task?.task.selectOptions;
  console.log(titleTask, descriptionTask, selectOption);
  const initialValues: MyFormValue = {
    title: titleTask,
    description: descriptionTask,
    selectOptions: selectOption,
  };
  const dispatch = useAppDispatch();
  return (
    <div className="rounded-xl border border-indigo-500 bg-white p-4 shadow-lg w-96 md:w-1/2 lg:w-[500px] ">
      <div className="flex items-center gap-4 lg:justify-center">
        <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <p className="font-medium sm:text-lg">Изменить карточку</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={todoFormSchema}
        onSubmit={function ({
          title,
          description,
          selectOptions,
        }: MyFormValue) {
          const data = { taskId: taskId, title, description, selectOptions };
          try {
            dispatch(editTask(data));
            handleClose();
          } catch (error) {
            console.log("Error", error);
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <label
              htmlFor="task"
              className="mt-4 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <Field
                id="title"
                name="title"
                placeholder="Задача..."
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Название...
              </span>
            </label>
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
            <label
              htmlFor="task"
              className="block text-sm font-medium text-gray-900"
            >
              <Field
                as="select"
                id="selectOptions"
                name="selectOptions"
                className="mt-3 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md"
              >
                {repos.map((repo) => (
                  <option key={repo.value} value={repo.value}>
                    {repo.key}
                  </option>
                ))}
              </Field>
            </label>
            <label
              htmlFor="task"
              className="mt-4 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <Field
                as="textarea"
                rows={4}
                id="description"
                name="description"
                placeholder="Описание..."
                className=" resize-none peer h-20 w-full border-none  p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description}</p>
            )}
            <div className="mt-6 sm:flex sm:gap-5 lg:justify-start">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
              >
                Добавить
              </button>

              <button
                onClick={handleClose}
                className="mt-2 inline-block w-full rounded-lg bg-red-500 hover:bg-red-700 px-5 py-3 text-center text-sm font-semibold text-white sm:mt-0 sm:w-auto"
              >
                Закрыть
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Стилизовать карточку показа задачи

const ViewTask = ({ handleClose }: HandleClose) => {
  const taskId = useAppSelector((state) => state.modal.taskId);
  const task = useAppSelector(getTaskById(taskId));
  const titleTask = task?.task.title;
  const descriptionTask = task?.task.description;
  const selectOption = task?.task.selectOptions;
  return (
    <div className="rounded-xl border border-indigo-500 bg-white p-4 shadow-lg w-96 md:w-1/2 lg:w-[500px] ">
      <div className="flex items-center gap-3 lg:justify-center">
        <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <p className="font-medium sm:text-lg">Описание задачи</p>
      </div>
      <div className="flex flex-col mt-3">
        <div className="flex gap-2">
          <span className="text-gray-700 font-semibold">Репозиторий:</span>
          <span>{selectOption}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-700 font-semibold">Задача:</span>
          <span>{titleTask}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          <span className="text-gray-700 font-semibold">Описание задачи:</span>
          <p>{descriptionTask}</p>
        </div>
      </div>
      <div className="mt-6 sm:flex sm:gap-5 lg:justify-start">
        <button
          onClick={handleClose}
          className="mt-2 inline-block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-center text-sm font-semibold text-white sm:mt-0 sm:w-auto"
        >
          Понятно
        </button>
      </div>
    </div>
  );
};

const mapping = {
  addingTask: AddTaskForm,
  delitingTask: DeleteTask,
  renamingTask: EditTask,
  lookingTask: ViewTask,
};

const Modal = () => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  const modalType = useAppSelector((state) => state.modal.type);
  const Component = mapping[modalType];
  return (
    <div className=" z-50 fixed left-0 top-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      {Component && <Component handleClose={handleClose} />}
    </div>
  );
};

export default Modal;
