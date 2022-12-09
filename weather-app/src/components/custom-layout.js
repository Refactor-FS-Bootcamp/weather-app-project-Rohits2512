import Sidebar from "./common/Sidebar";

const CustomLayout = (props) => {
  console.log(props);
  const sidebarTabs = [{ tab: "Home" }, { tab: "City" }];
  return (
    <div>
      <Sidebar sbTabs={sidebarTabs} />
      {props.children}
    </div>
  );
};
export default CustomLayout;
