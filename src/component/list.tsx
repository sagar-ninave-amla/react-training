const MyList = () => {
  const projects = ["knox", "znode", "artifi", "stepples"];

  return (
    <ul>
      {projects.map((item, index) => (
        <li key={index + item}> {item} </li>
      ))}
    </ul>
  );
};

export default MyList;
