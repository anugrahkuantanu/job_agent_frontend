'use client'

import { useState } from 'react';
import { CreateMotletter } from '@/app/(root)/api/apiMethod';

interface CreateMotletButtonProps {
  job_data: any;
}

const CreateMotletButton: React.FC<CreateMotletButtonProps> = ({ job_data }) => {
  const [loading, setLoading] = useState(false);

  const runAgent = async () => {
    setLoading(true);

    try {
      if (job_data) {
        const response = await CreateMotletter(job_data);
        alert('Motivation letter is created');
      } else {
        alert('Job is unknown');
      }
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
        {loading ? 'Running...' : 'Generate Letter'}
      </button>
    </section>
  );
};

export default CreateMotletButton;
