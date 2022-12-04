import Sidebar from "./Sidebar";

const CustomLayout = (props) => {
    const sidebarTabs = [
        { tab: "Home" },
        { tab: "Cities" },
      ];
  return (
    <div style={{display:"flex"}}>
      <Sidebar sbTabs={sidebarTabs} />
      {props.children}
      </div>
  );
};
export default CustomLayout;