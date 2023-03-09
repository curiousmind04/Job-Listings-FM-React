import classes from "./JobItem.module.css";

function JobItem(props) {
  const filterHandler = (e) => {
    const filter = e.target.innerHTML;
    props.onAddFilter(filter);
  };

  let newBadge = <div className={classes.newBadge}>New!</div>;

  let featuredBadge = <div className={classes.featuredBadge}>Featured</div>;

  return (
    <li className={props.featured ? classes.featuredItem : classes.item}>
      <section>
        <div>
          <div className={classes.container}>
            <img src={props.logo} alt="company logo" />
          </div>
          <div>
            <div className={classes.company}>
              <h2>{props.company}</h2>
              {props.new && newBadge}
              {props.featured && featuredBadge}
            </div>
            <h1>{props.position}</h1>
            <div className={classes.details}>
              <span>{props.postedAt}</span>
              <span>&#x2022;</span>
              <span>{props.contract}</span>
              <span>&#x2022;</span>
              <span>{props.location}</span>
            </div>
          </div>
        </div>
        <hr />
        <div className={classes.tablets}>
          <div onClick={filterHandler}>{props.role}</div>
          <div onClick={filterHandler}>{props.level}</div>
          {props.languages.map((language) => (
            <div key={language + props.id} onClick={filterHandler}>
              {language}
            </div>
          ))}
          {props.tools.map((tool) => (
            <div key={tool + props.id} onClick={filterHandler}>
              {tool}
            </div>
          ))}
        </div>
      </section>
    </li>
  );
}

export default JobItem;
