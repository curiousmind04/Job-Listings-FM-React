import { useEffect, useState } from "react";
import JobItem from "./JobItem";

import classes from "./JobList.module.css";

function JobList({ jobs, filterJobs }) {
  const [filters, setFilters] = useState([]);

  const onAddFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilterHandler = (e) => {
    setFilters((prevFilters) =>
      prevFilters.filter((filter) => filter !== e.target.name)
    );
  };

  const clearFiltersHandler = () => {
    setFilters([]);
  };

  useEffect(() => {
    filterJobs(filters);
  }, [filters]);

  return (
    <ul className={filters.length > 0 ? classes.higher : classes.lower}>
      {filters.length > 0 && (
        <div className={classes.selections}>
          <div className={classes.filters}>
            {filters.map((filter) => (
              <div key={filter}>
                {filter}
                <div onClick={removeFilterHandler}>
                  <img
                    src="images/icon-remove.svg"
                    alt="remove icon"
                    name={filter}
                  />
                </div>
              </div>
            ))}
          </div>
          <button onClick={clearFiltersHandler}>Clear</button>
        </div>
      )}
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          id={job.id}
          company={job.company}
          logo={job.logo}
          new={job.new}
          featured={job.featured}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          role={job.role}
          level={job.level}
          languages={job.languages}
          tools={job.tools}
          onAddFilter={onAddFilter}
        />
      ))}
    </ul>
  );
}

export default JobList;
