import HomeCards from "../components/Home/HomeCards";
import HomeTableCard from "../components/Home/HomeTableCard";

const Home = () => {
  return (
      <div className="p-3 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
            <HomeCards />
            <HomeTableCard />
        </div>
      </div>
  );
};

export default Home;