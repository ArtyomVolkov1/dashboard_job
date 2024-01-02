import HomeCards from "../components/Home/HomeCards";

const Home = () => {
  return (
      <div className="p-3 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <div className="mb-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <HomeCards />
          </div>
        </div>
      </div>
  );
};

export default Home;