import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Job from './Job';

export default function Experience() {
  const [jobs, setJobs] = useState([
    {
      id: uuidv4(),
      role: 'My Title',
      employer: 'Some Employer',
      description: 'This is what I did at this job...',
      startYear: '2015',
      endYear: '2018',
    },
  ]);

  function handleNewJob() {
    setJobs([...jobs, {
      id: uuidv4(),
      role: 'My Title',
      employer: 'Some Employer',
      description: 'This is what I did at this job...',
      startYear: '2015',
      endYear: '2018',
    }]);
  }

  const experience = jobs.map((job) => (
    <Job
      key={job.id}
      jobs={jobs}
      editJob={setJobs}
      jobId={job.id}
      employerName={job.employer}
      description={job.description}
      jobRole={job.role}
      jobStart={job.startYear}
      jobEnd={job.endYear}
    />
  ));

  return (
    <div className='experience'>
      <h1>Experience</h1>
      <div>{experience}</div>
      <button
        onClick={handleNewJob}
    >Add Employment</button>
    </div>
  );
}
