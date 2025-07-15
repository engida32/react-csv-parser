import React from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

interface Props {
  onFileAccepted: (file: File) => void;
  currentFile: File | null;
}

const UploadDropzone: React.FC<Props> = ({ onFileAccepted, currentFile }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (accepted) => {
      if (accepted.length > 0) {
        onFileAccepted(accepted[0]);
      }
    },
    accept: { "text/csv": [".csv"] },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
        isDragActive
          ? "border-blue-400 bg-blue-50"
          : "border-gray-300 bg-gray-100"
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center">
        <UploadCloud className="w-8 h-8 text-blue-500 mb-2" />
        <p className="text-sm text-gray-600">
          {currentFile
            ? `${currentFile.name} (${(currentFile.size / 1024).toFixed(1)} KB)`
            : "Drag & drop your CSV here or click to upload"}
        </p>
      </div>
    </div>
  );
};

export default UploadDropzone;
