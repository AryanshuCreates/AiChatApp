import React, { useState } from "react";
import axios from "axios";
import FileUploader from "./components/FileUploader";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setFileName(e.target.files[0]?.name || "");
  };

  const handleQuerySubmit = async () => {
    if (!query) {
      alert("Please enter a query!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    if (selectedFile) {
      formData.append("file", selectedFile);
    }
    formData.append("query", query);

    try {
      const response = await axios.post(`http://localhost:8000/ask`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessages((prevMessages) => [
        ...prevMessages,
        { query, response: response.data.response },
      ]);
      setQuery("");
      setSelectedFile(null);
      setFileName("");
    } catch (error) {
      console.error("Error asking query:", error);
      alert("Failed to get a response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-3xl mx-auto p-4 pb-0 overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          PDF Uploader & Chat Interface
        </h1>

        <FileUploader handleFileChange={handleFileChange} fileName={fileName} />

        <ChatBox messages={messages} />

        <ChatInput
          query={query}
          setQuery={setQuery}
          handleQuerySubmit={handleQuerySubmit}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default App;
