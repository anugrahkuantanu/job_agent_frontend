'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import styles
import axios from 'axios';
import { getData, putData } from '../api/apiMethod';
import { MotivationLetter, MotivationLetterUpdate } from '@/models/motivation_letter';
import { ReactQuillProps } from 'react-quill';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }) as React.FC<ReactQuillProps>;

interface TextEditorProps {
  jobId: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ jobId }) => {
  const [content, setContent] = useState<string>('');
  const [letters, setLetters] = useState<MotivationLetter[]>([]);
  const [currentLetterId, setCurrentLetterId] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        console.log(`Fetching data for jobId: ${jobId}`);
        const data = await getData(`motivation_letters/${jobId}`);
        console.log('Fetched data:', data);
        setLetters(data.letters);
        if (data.letters.length > 0) {
          const lastLetter = data.letters[data.letters.length - 1];
          setCurrentLetterId(lastLetter._id);
          setContent(lastLetter.content || '');
        } else {
          setCurrentLetterId(null);
          setContent(''); // Show an empty editor if no motivation letters are found
        }
      } catch (error) {
        console.error('Error fetching content:', error);
        setContent(''); // Show an empty editor in case of an error
      }
    };

    fetchContent();
  }, [jobId]);

  const handleSave = async () => {
    if (!currentLetterId) {
      console.error('No current letter ID set');
      return;
    }

    try {
      const updatedLetter: MotivationLetterUpdate = {
        content: content
      };
      await putData(updatedLetter, `motivation_letters/${currentLetterId}`);
      alert('Content updated successfully!');
    } catch (error) {
      console.error('Error updating content:', error);
      alert('Failed to update content');
    }
  };

  return (
    <div className='text-white'>
      <div className='py-2'>
        <ReactQuill value={content} onChange={setContent} />
      </div>
      
      <button onClick={handleSave} className="bg-blue-500 text-white font-bold py-2 px-4 text-nowrap rounded-xl border">
        Save Content
      </button>
    </div>
  );
};

export default TextEditor;
