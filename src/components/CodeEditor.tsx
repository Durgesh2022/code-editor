// src/components/CodeEditor.tsx
import React from 'react';

const CodeEditor: React.FC<{ code: string; onCodeChange: (code: string) => void }> = ({
  code,
  onCodeChange,
}) => {
  return (
    <textarea
      value={code}
      onChange={(e) => onCodeChange(e.target.value)}
      className="w-full h-96 p-4 border border-gray-300"
      style={{ fontFamily: 'monospace' }}
    />
  );
};

export default CodeEditor;
