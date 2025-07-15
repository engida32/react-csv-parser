import React, { useState } from "react";
import UploadDropzone from "./components/UploadDropzone";
import UploadResult from "./components/UploadResult";
import { uploadCSV } from "./api/upload";

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [metrics, setMetrics] = useState<{
    processingTimeMs: number;
    departmentCount: number;
  } | null>(null);
  const [resultUrl, setResultUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      const res = await uploadCSV(file);
      setMetrics({
        processingTimeMs: res.processingTimeMs,
        departmentCount: res.departmentCount,
      });
      setResultUrl(res.downloadUrl);
    } catch (err) {
      alert("Upload failed. Please check your file or server.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-2">
          CSV Sales Aggregator
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Upload a CSV to process departmental sales data
        </p>

        <UploadDropzone currentFile={file} onFileAccepted={setFile} />

        {file && (
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition text-sm"
          >
            {uploading ? "Processing..." : "Upload & Process"}
          </button>
        )}

        {metrics && resultUrl && (
          <UploadResult metrics={metrics} downloadUrl={resultUrl} />
        )}
      </div>
    </main>
  );
}

export default App;
