import HomeCards from "../components/Home/HomeCards";

const Home = () => {
  return (
      <div className="p-3 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            <HomeCards />
          </div>
        </div>
      </div>
  );
};

export default Home;