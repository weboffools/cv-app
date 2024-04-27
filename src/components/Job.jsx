import YearSelect from './YearSelect';
import { useState } from 'react';

export default function Job({
  jobs,
  editJob,
  jobId,
  employerName,
  description,
  jobRole,
  jobStart,
  jobEnd,
}) {
  const [isEditable, setIsEditable] = useState(true);

  function handleChange(e, jobId, property) {
    editJob(
      jobs.map((job) => {
        if (job.id === jobId) {
          return { ...job, [property]: e.target.value };
        } else {
          return job;
        }
      })
    );
  }

  if (isEditable) {
    return (
      <form>
        <label htmlFor="job_role">Role</label>
        <input
          name="job_role"
          value={jobRole}
          onChange={(e) => handleChange(e, jobId, 'role')}
          id="job_role"
          type="text"
          maxLength="48"
          size="32"
        />
        <label htmlFor="employer_name">Employer</label>
        <input
          name="employer_name"
          value={employerName}
          onChange={(e) => handleChange(e, jobId, 'employer')}
          id="employer_name"
          type="text"
          maxLength="48"
          size="32"
        />
        <label htmlFor="description">Description of Role</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => handleChange(e, jobId, 'description')}
          id="description"
          rows="6"
          cols="32"
        ></textarea>
        <YearSelect name="Year Started" setYear={handleChange} itemId={jobId} property='startYear' />
        <YearSelect name="Year Ended" setYear={handleChange} itemId={jobId} property='endYear'/>

        <button onClick={() => setIsEditable(false)}>Save</button>
      </form>
    );
  }

  return (
    <>
      <h3>{jobRole}</h3>
      <p>{employerName}</p>
      <p>{description}</p>
      <p>Start Year: {jobStart}</p>
      <p>End Year: {jobEnd}</p>
      <button onClick={() => setIsEditable(true)}>Edit</button>
    </>
  );
}
