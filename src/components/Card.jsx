
const Card = ({ title, value, growth }) => {
  const growthColor = growth >= 0 ? "text-green-500" : "text-red-500";
  const growthIcon = growth >= 0 ? "▲" : "▼";

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start md:items-center">
      {/* Title */}
      <h3 className="text-gray-700 text-sm font-medium mb-2 text-left md:text-center">
        {title}
      </h3>

      {/* Value */}
      <p className="text-2xl font-bold text-blue-600 mb-4 text-left md:text-center">
        {value}
      </p>

      {/* Growth Indicator */}
      <div className={`flex items-center text-sm ${growthColor}`}>
        <span className="font-medium mr-1">{growthIcon}</span>
        <span>
          {Math.abs(growth)}% {growth >= 0 ? "Increase" : "Decrease"}
        </span>
      </div>
    </div>
  );
};

export default Card;
