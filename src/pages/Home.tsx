import HomeCards from "../components/Home/HomeCards";
import HomeTableCard from "../components/Home/HomeTableCard";

const Home = () => {
  return (
    <div className="p-3 sm:ml-64">
      <div className="section-container">
        <HomeCards />
        <HomeTableCard />
      </div>
    </div>
  );
};

export default Home;
