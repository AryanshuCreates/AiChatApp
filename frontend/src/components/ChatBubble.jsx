import React from "react";

const ChatBubble = ({ msg }) => {
  return (
    <div className="mb-4">
      <div className="flex items-end gap-2.5 flex-col w-full max-w-[320px] p-4 border-gray-200 bg-gray-100 rounded-e-xl dark:bg-gray-700 ml-auto">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          Query
        </span>
        <p className="text-sm text-gray-900 dark:text-white">{msg.query}</p>
      </div>
      <div className="flex items-start gap-2.5 mt-2">
        <div className="flex flex-col w-full max-w-[320px] p-4 border-gray-200 bg-gray-100 rounded-e-xl dark:bg-gray-700">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Response
          </span>
          <p className="text-sm text-gray-900 dark:text-white">
            {msg.response}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
