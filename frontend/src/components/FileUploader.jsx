import React from "react";

const FileUploader = ({ handleFileChange, fileName }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        Upload PDF (optional)
      </h3>
      <input
        type="file"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        onChange={handleFileChange}
      />
      <p className="mt-2 text-sm text-gray-500">
        {fileName ? `Selected file: ${fileName}` : "No file selected"}
      </p>
    </div>
  );
};

export default FileUploader;
