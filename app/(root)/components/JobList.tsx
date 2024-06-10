// 'use client';

// import { useEffect, useState } from 'react';
// import { Job } from '@/models/job';
// import { getData } from '@/app/(root)/api/apiMethod';
// import CreateMotLetButton from './CreteMotLetButton';

// const JobList = () => {
//   const [jobs, setJobs] = useState<Job[]>([]); 
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const userJobs = await getData('jobs');
//         setJobs(userJobs.jobs);
//       } catch (error) {
//         console.error('Failed to fetch jobs:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const filteredJobs = jobs.filter(job => 
//     job.url !== 'empty' && 
//     job.url !== 'Not provided' &&
//     job.title !== 'Not provided' &&
//     job.company !== 'Not provided' &&
//     job.description !== 'Not provided' &&
//     job.skills !== 'Not provided'
//   );

//   const reversedJobs = [...filteredJobs].reverse();

//   return (
//     <div className="py-4">
//       {loading ? (
//         <p>Loading...</p>
//       ) : jobs.length > 0 ? (
//         reversedJobs.map((job) => (
//           <div
//             key={job.id}
//             className="border border-gray-300 rounded-xl p-4 mb-4 text-gray-100"
//           >
//             <h2 className="text-xl font-semibold text-white"><strong>Title: </strong> {job.title}</h2>
//             <h3 className="text-lg font-medium"><strong>Company: </strong> {job.company}</h3>
//             <p><strong>Location: </strong> {job.location}</p>
//             <a
//               href={job.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline mt-2 inline-block text-body-bold"
//             ><strong>Details: </strong> 
//               Click here
//             </a>
//             <CreateMotLetButton job_data={job} />
//           </div>
//         ))
//       ) : (
//         <p>No jobs found</p>
//       )}
//     </div>
//   );
// };

// export default JobList;

'use client';

import { useEffect, useState } from 'react';
import { Job } from '@/models/job';
import { getData } from '@/app/(root)/api/apiMethod';
import CreateMotLetButton from './CreteMotLetButton';
import TextEditor from '@/app/(root)/components/TextEditor';

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

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
  // const reversedJobs = [...filteredJobs];

  const handleJobClick = (jobId: string) => {
    console.log(`Job clicked: ${jobId}`);
    setSelectedJobId(jobId);
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-4 overflow-y-auto h-screen">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : jobs.length > 0 ? (
          reversedJobs.map((job) => (
            <div
              key={job._id}
              className="border border-gray-300 rounded-xl p-4 mb-4 text-gray-100 cursor-pointer hover:bg-gray-700"
              onClick={() => handleJobClick(job._id)}
            >
              <h2 className="text-xl font-semibold text-white"><strong>Title: </strong> {job.title}</h2>
              <h3 className="text-lg font-medium"><strong>Company: </strong> {job.company}</h3>
              <p><strong>Location: </strong> {job.location}</p>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block text-body-bold"
              ><strong>Details: </strong> 
                Click here
              </a>
              <CreateMotLetButton job_data={job} />
            </div>
          ))
        ) : (
          <p className="text-white">No jobs found</p>
        )}
      </div>
      <div className="w-2/3 p-4 overflow-y-auto h-screen">
        {selectedJobId ? (
          <TextEditor jobId={selectedJobId} />
        ) : (
          <div className="text-white">Select a job to view the motivation letter.</div>
        )}
      </div>
    </div>
  );
};

export default JobList;
