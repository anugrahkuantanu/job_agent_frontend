
'use client'

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const MonacoEditorDynamic = dynamic(() => import('react-monaco-editor'), {
  ssr: false, // Ensure it's not executed during server-side rendering
});

const MonacoEditorComponent: React.FC = () => {
  const editorOptions = {
    // Monaco Editor options go here (e.g., language, theme, etc.)
    // You can refer to Monaco Editor documentation for available options.
    // For example, you can set 'language' to 'javascript' and 'theme' to 'vs-dark'.
    language: 'javascript',
    theme: 'vs-dark',
  };

  const handleEditorChange = (newValue: string, e: any) => {
    // Handle editor content change here if needed
    console.log('Editor content changed:', newValue);
  };

  return (
    <MonacoEditorDynamic
      width="800" // Set the desired width
      height="600" // Set the desired height
      value="// Start typing your code here..."
      options={editorOptions}
      onChange={handleEditorChange}
    />
  );
};

export default MonacoEditorComponent;
