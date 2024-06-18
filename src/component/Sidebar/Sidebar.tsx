import "./styles.css";

const Sidebar = () => {
  const menus = ["Dashboard", "order", "report"];
  return (
    <ul className="list">
      {menus.map((item) => (
        <li key={item} className="list-item"> {item}</li>
      ))}
    </ul>
  );
};

export default Sidebar;
