import { useEffect, useState } from "react";
import JobList from "./JobList";

function App() {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("../data.json");
      const data = await response.json();
      setJobs(data);
      setAllJobs(data);
    };
    fetchJobs();
  }, []);

  const filterJobs = (filters) => {
    setFilters(filters);
  };

  useEffect(() => {
    if (filters.length > 0) {
      setJobs(
        allJobs.filter((job) =>
          filters.every(
            (filter) =>
              job.role.includes(filter) ||
              job.level.includes(filter) ||
              job.languages.includes(filter) ||
              job.tools.includes(filter)
          )
        )
      );
    } else {
      setJobs(allJobs);
    }
  }, [filters]);

  return (
    <>
      <header></header>
      <main>
        <JobList jobs={jobs} filterJobs={filterJobs} />
      </main>
    </>
  );
}

export default App;
