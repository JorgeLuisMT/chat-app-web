import Menu from "./Menu";
import "../styles/HomeLayout.css";
import "../styles/Modal.css";
import GeneralHeader from "./GeneralHeader";
import GeneralView from "./GeneralView";
import ChatView from "./ChatView";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AddModal from "./AddModal";

let friends = [
  { user_name: "ñlsdj", status: "accepted", user_id: "123" },
  { user_name: "ñlsdj", status: "accepted", user_id: "123455" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12344" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12343" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12342" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12341" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12340" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12349" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12348" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12347" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12346" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12345" },
];

const HomeLayout = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const handleAddModalClick = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };
  let { id } = useParams();
  return (
    <div className={`home-layout ${id ? "" : "home"}`}>
      <GeneralView
        handleAddModalClick={handleAddModalClick}
        friends={friends}
      />
      {id && <ChatView />}
      {isAddModalOpen && (
        <AddModal friends={friends} handleAddModalClick={handleAddModalClick} />
      )}
    </div>
  );
};

export default HomeLayout;
