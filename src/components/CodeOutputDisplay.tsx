
import React from 'react';

interface CodeOutputDisplayProps {
  output: string;
}

const CodeOutputDisplay: React.FC<CodeOutputDisplayProps> = ({ output }) => {
  if (!output) return null;
  
  return (
    <div className="mt-4">
      <h4 className="text-md font-medium mb-2">Output:</h4>
      <pre className="bg-zinc-800 text-zinc-200 p-4 rounded-md overflow-x-auto max-h-40 whitespace-pre-wrap">
        {output}
      </pre>
    </div>
  );
};

export default CodeOutputDisplay;
