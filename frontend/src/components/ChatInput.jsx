import React from "react";
import LoadingSpinner from "./LodingSpinner";

const ChatInput = ({ query, setQuery, handleQuerySubmit, loading }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleQuerySubmit();
      }}
    >
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask something..."
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex justify-center p-2 text-gray-600 rounded-full cursor-pointer hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-600 ${
            loading ? "cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <LoadingSpinner />
          ) : (
            <svg
              className="w-5 h-5 rotate-90 rtl:-rotate-90"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
