'use client';

import { useEffect, useState } from 'react';
import { Job } from '@/models/job';
import { getData } from '@/app/(root)/api/apiMethod';

const JobList = () => {
  // const [jobs, setJobs] = useState<Job[] | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const userJobs = await getData('jobs');

        setJobs(userJobs.jobs);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => 
    job.url !== 'empty' && 
    job.url !== 'Not provided' &&
    job.title !== 'Not provided' &&
    job.company !== 'Not provided' &&
    job.description !== 'Not provided' &&
    job.skills !== 'Not provided'
  );

  const reversedJobs = [...filteredJobs].reverse();

  return (
    <div className="py-4">
      {loading ? (
        <p>Loading...</p>
      ) : jobs.length > 0 ? (
        reversedJobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-300 rounded-xl p-4 mb-4 text-gray-100"
          >
            <h2 className="text-xl font-semibold text-white"><strong>Title: </strong> {job.title}</h2>
            <h3 className="text-lg font-medium"><strong>Company: </strong> {job.company}</h3>
            <p><strong>Location: </strong> {job.location}</p>
            <p className="mt-2">{job.description}</p>
            <p className="mt-2"><strong>Skills:</strong> {job.skills}</p>
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block text-body-bold"
            ><strong>Details: </strong> 
              Click here
            </a>
          </div>
        ))
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
};

export default JobList;
