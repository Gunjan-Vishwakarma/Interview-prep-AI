const SpinnerLoader = () => {
  return (
    <div role="status" className="flex items-center gap-2">
      <svg
        aria-hidden="true"
        className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <path
          d="M100 50.5C100 78.3 77.6 100.7 49.8 100.7C22.1 100.7 -0.3 78.3 -0.3 50.5C-0.3 22.7 22.1 0.3 49.8 0.3C77.6 0.3 100 22.7 100 50.5ZM9.1 50.5C9.1 73.5 26.8 91.2 49.8 91.2C72.8 91.2 90.5 73.5 90.5 50.5C90.5 27.5 72.8 9.8 49.8 9.8C26.8 9.8 9.1 27.5 9.1 50.5Z"
          fill="currentColor"
        />
        {/* Animated Arc */}
        <path
          d="M93.9 39.0C96.0 38.4 97.3 36.2 96.7 34.1C95.1 28.6 92.3 23.4 88.5 18.9C84.6 14.5 79.8 10.9 74.3 8.5C68.8 6.0 62.7 4.7 56.5 4.9C50.3 5.1 44.2 6.8 38.7 9.8C33.2 12.9 28.5 17.3 24.9 22.7C21.3 28.1 19.0 34.4 18.3 40.9C18.0 43.0 19.5 44.9 21.6 45.2C23.7 45.5 25.6 44.0 25.9 41.9C26.5 37.4 28.3 33.1 31.0 29.4C33.8 25.6 37.6 22.6 41.9 20.6C46.2 18.7 51.0 17.8 55.8 18.0C60.6 18.3 65.2 19.8 69.1 22.4C73.0 25.0 76.2 28.7 78.3 33.0C79.3 35.1 81.8 36.5 84.0 35.9L93.9 39.0Z"
          fill="currentFill"
        />
      </svg>
      <span className="text-sm text-gray-600 dark:text-gray-300">
        Loading...
      </span>
    </div>
  );
};

export default SpinnerLoader;
