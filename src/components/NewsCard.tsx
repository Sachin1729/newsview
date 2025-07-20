import type { NewsItem } from "../types/news";

const NewsCard = ({ item }: { item: NewsItem }) => {
  const handleClick = () => {
    window.open(item.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.01] cursor-pointer"
      onClick={handleClick}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {item.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{item.description}</p>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;