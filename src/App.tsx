import { useState } from "react";
import UploadDropzone from "./components/UploadDropzone";
import UploadResult from "./components/UploadResult";
import { uploadCSV } from "./api/upload";
import toast from "react-hot-toast";
import type { Metrics } from "./types";

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [resultUrl, setResultUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return;
    try {
      setUploading(true);
      const result = await uploadCSV(file);
      setResultUrl(result.downloadUrl);
      setMetrics({
        processingTimeMs: result.processingTimeMs,
        departmentCount: result.departmentCount,
      });

      toast.success("CSV processed successfully!");
    } catch (error) {
      toast.error("Failed to process file");
      console.error(error);
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
        {uploading && (
          <p className="mt-4 text-sm text-gray-500">Processing your file...</p>
        )}

        {metrics && resultUrl && (
          <UploadResult metrics={metrics} downloadUrl={resultUrl} />
        )}
      </div>
    </main>
  );
}

export default App;
