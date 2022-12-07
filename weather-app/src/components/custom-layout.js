import Sidebar from "./Sidebar";

const CustomLayout = (props) => {
  console.log(props);
  const sidebarTabs = [{ tab: "Home" }, { tab: "Cities" }];
  return (
    <div>
      <Sidebar sbTabs={sidebarTabs} />
      {props.children}
    </div>
  );
};
export default CustomLayout;
