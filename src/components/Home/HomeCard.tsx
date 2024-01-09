type HomeCardProp = {
  title: string;
  value: number | string;
  icon: string;
  color: string;
};

const HomeCard = ({ title, value, icon, color }: HomeCardProp) => {
  return (
    <div className="hover:scale-105 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div
        className={`absolute mx-4 -mt-4 grid h-16 w-16 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr ${color} bg-clip-border text-white shadow-lg`}
      >
        <img src={icon} alt="icon" />
      </div>
      <div className="p-4 text-right">
        <p className="text-blue-gray-600 block font-sans text-sm font-normal leading-normal antialiased">
          {title}
        </p>
        <h4 className="text-blue-gray-900 block font-sans text-sm xl:text-lg font-semibold leading-snug tracking-normal antialiased">
          {value}
        </h4>
      </div>
    </div>
  );
};

export default HomeCard;
