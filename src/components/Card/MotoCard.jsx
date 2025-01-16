const MotoCard = ({ icon: Icon, title, content }) => (
  <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
    <Icon className="text-blue-500 dark:text-blue-300 text-5xl mb-4" />
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{content}</p>
  </div>
);

export default MotoCard;