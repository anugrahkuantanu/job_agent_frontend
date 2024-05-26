'use client'

import React, { useEffect, useState } from 'react';
import { postData, getData} from '@/services/jobServices';

const JobComponent: React.FC = () => {
  const [jobData, setJobData] = useState({id: '', title: '', company: '', description: '', skills: '', location: '', url: '' , user_id:''});
  const [loading, setLoading] = useState(true);

  const handleCreateJob = async () => {
    try {
      const job = await postData(jobData, 'jobs');
      alert('Job created successfully');
      setJobData({id: '', title: '', company: '', description: '', skills: '', location: '', url: '' , user_id:''});
    } catch (error:any) {
      alert(error.message);
    }
  };

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const userJobs = await getData('jobs');
      setJobs(userJobs.jobs);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className='text-white'>
      <div>
        <h2>Create Job</h2>
        <div className='text-black'>
            <input type="text" placeholder="Title" value={jobData.title} onChange={(e) => setJobData({ ...jobData, title: e.target.value })} />
            <input type="text" placeholder="Company" value={jobData.company} onChange={(e) => setJobData({ ...jobData, company: e.target.value })} />
            <input type="text" placeholder="Description" value={jobData.description} onChange={(e) => setJobData({ ...jobData, description: e.target.value })} />
            <input type="text" placeholder="Skills" value={jobData.skills} onChange={(e) => setJobData({ ...jobData, skills: e.target.value })} />
            <input type="text" placeholder="Location" value={jobData.location} onChange={(e) => setJobData({ ...jobData, location: e.target.value })} />
            <input type="text" placeholder="URL" value={jobData.url} onChange={(e) => setJobData({ ...jobData, url: e.target.value })} />
        </div>
        <button onClick={handleCreateJob}>Create Job</button>
      </div>
      <div>
        <h2>User Jobs</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {jobs.map((job: any) => (
              <li key={job.id}>{job.title} at {job.company}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobComponent;
