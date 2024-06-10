'use client'

import { useState, ChangeEvent } from 'react';
import { getData, kickOff, postData } from '@/app/(root)/api/apiMethod';
import fetchJobs from '@/app/(root)/components/JobList'


interface PdfData {
  content: string;
}

const KickOff: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [pdfData, setPdfData] = useState<PdfData | null>(null);


  const runAgent = async () => {
    setLoading(true);

    // const resume = await getData('resume')

    try {
        const response = await kickOff();
        // if (!resume) {
        //   const response = await kickOff();
        //   alert('Please upload a PDF first.');
        // }
        // fetchJobs();
        // alert('Success')
    } catch (error) {
        console.error('Error running agent:', error);
        alert('Failed to run agent');
    } finally {
        setLoading(false);
    }
  };

  return (
    <section>
      <button
        onClick={runAgent}
        className="bg-blue-500 text-white font-bold py-2 px-4 text-nowrap rounded-xl border"
        disabled={loading}
      >
        {loading ? 'Running...' : 'Run Agent'}
      </button>
    </section>
  );
};

export default KickOff;
