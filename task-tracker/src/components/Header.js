import Button from "./Button"

const Header = (props) => {
  return <header className="header">
      <h1>
          {props.title}
      </h1>
      <Button text="Add"/>
  </header>;
};

Header.defaultProps = {
    title: "Task Tracker!!!!"
}


export default Header;
