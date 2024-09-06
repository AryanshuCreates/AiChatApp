import React from "react";
import ChatBubble from "./ChatBubble";

const ChatBox = ({ messages }) => {
  return (
    <div className="border p-4 mb-4 rounded-lg max-h-60 overflow-y-auto bg-white dark:bg-gray-800 shadow-md">
      {messages.length > 0 ? (
        messages.map((msg, index) => <ChatBubble key={index} msg={msg} />)
      ) : (
        <p className="text-gray-500">
          No messages yet. Start by asking a query!
        </p>
      )}
    </div>
  );
};

export default ChatBox;
