import Menu from "./Menu";
import "../styles/HomeLayout.css";
import GeneralHeader from "./GeneralHeader";
import GeneralView from "./GeneralView";
import ChatView from "./ChatView";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <GeneralView />
      <ChatView />
    </div>
  );
};

export default HomeLayout;
