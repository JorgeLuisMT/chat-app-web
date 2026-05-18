import Menu from "./Menu";
import "../styles/HomeLayout.css";
import "../styles/Modal.css";
import GeneralHeader from "./GeneralHeader";
import GeneralView from "./GeneralView";
import ChatView from "./ChatView";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AddModal from "./AddModal";

const HomeLayout = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const handleAddModalClick = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };
  let { id } = useParams();
  return (
    <div className={`home-layout ${id ? "" : "home"}`}>
      <GeneralView handleAddModalClick={handleAddModalClick} />
      {id && <ChatView />}
      {isAddModalOpen && <AddModal handleAddModalClick={handleAddModalClick} />}
    </div>
  );
};

export default HomeLayout;
