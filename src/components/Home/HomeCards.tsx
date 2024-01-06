import { useAppSelector } from "../../hooks/hooks";
import HomeCard from "./HomeCard";
import IconBox from "../../../public/assets/icons/HomeCard/archive-box.svg";
import IconHeart from "../../../public/assets/icons/HomeCard/heart.svg";
import IconRocket from "../../../public/assets/icons/HomeCard/rocket-launch.svg";
import IconStat from "../../../public/assets/icons/HomeCard/chart-bar.svg";

const HomeCards = () => {
  const tasks = useAppSelector((state) => state.persistedReducer.task.tasks);
  console.log(tasks)
  const completedTask = tasks.filter((task) => task.completed === true);
  const favouriteRepos = tasks.map((task) => task.task.selectOptions); // исправить ошибки линтера
  const allCountRepo: Record<string, number> = favouriteRepos.reduce(
    (acc, it) => {
      acc[it!] = (acc[it!] || 0) + 1;
      return acc;
    },
    {}
  );
  const maxCount = Math.max(...Object.values(allCountRepo));
  const favouriteRepoResult = [...new Set(Object.keys(allCountRepo))].filter(
    (val) => allCountRepo[val] === maxCount
  );
  return (
    <div className="mb-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <HomeCard
        title="Количество задач"
        value={tasks.length}
        icon={IconBox}
        color={"from-blue-600 to-blue-400 shadow-blue-500/40"}
      />
      <HomeCard
        title="Выполненных"
        value={completedTask.length}
        icon={IconRocket}
        color={"from-pink-600 to-pink-400  shadow-pink-500/40"}
      />
      <HomeCard
        title="Статистика за день"
        value={2}
        icon={IconStat}
        color={"from-green-600 to-green-400  shadow-green-500/40"}
      />
      <HomeCard
        title="Любимый репозиторий"
        value={favouriteRepoResult[0]}
        icon={IconHeart}
        color={"from-red-500 to-red-400 shadow-red-500/40"}
      />
    </div>
  );
};

export default HomeCards;

