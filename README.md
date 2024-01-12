# Dashboard for repositories (pet-project)
Dashboard - пет-проект для контроля выполнения задач к проектам с вашего репозитория, позволяет добавлять новые задачи, фильтровать и просматривать статистику. Используется Redux Toolkit и RTC-Query для управления данными и запросов к github api. 

## 🛠 Tech Stack
**Client:** React/Typescript, React-router-dom, TailwindCSS, Redux-toolkit, RTK Query, Redux-persist (для сохранения состояния между сессиями), formik(для валидации формы), Vite

## 📃 Features
* Получение данных о репозиториях через API GitHub с использованием RTK Query  
* Выполнение CRUD-операций (создание, редактирование, удаление и просмотр задач) через модальные окна  
* Наличие фильтров для задач  
* Визуализация количества задач и информации о наиболее часто используемом репозитории на главной странице
* Для стилизации используется tailwind css.

## 🔭 Preview
Click to go [Dashboard](https://dashboard-job.vercel.app/)
