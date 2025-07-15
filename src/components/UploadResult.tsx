import React from "react";
import { ArrowDownToLine } from "lucide-react";

interface Props {
  metrics: { processingTimeMs: number; departmentCount: number };
  downloadUrl: string;
}

const UploadResult: React.FC<Props> = ({ metrics, downloadUrl }) => {
  return (
    <div className="mt-6 animate-fade-in text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-2">
      <p>
        <strong>Departments:</strong> {metrics.departmentCount}
      </p>
      <p>
        <strong>Processing Time:</strong> {metrics.processingTimeMs} ms
      </p>
      <a
        href={downloadUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 px-4 py-2 mt-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition"
      >
        <ArrowDownToLine className="w-4 h-4" />
        Download Result
      </a>
    </div>
  );
};

export default UploadResult;
