import React from "react";
import GeneralHeader from "./GeneralHeader";
import useForm from "../hooks/useForm.jsx";
import "../styles/GeneralView.css";
import GeneralBody from "./GeneralBody.jsx";

const initForm = {
  "options-header-radio": "chat",
  "search-chats": "",
  "search-friends": "",
};

const GeneralView = ({ handleAddModalClick, friends }) => {
  const { form, setForm, handleChange } = useForm(initForm);
  return (
    <div className="general-view-container">
      <GeneralHeader handleChange={handleChange} form={form} />
      <hr />
      <GeneralBody
        setForm={setForm}
        form={form}
        handleAddModalClick={handleAddModalClick}
        friends={friends}
      />
    </div>
  );
};

export default GeneralView;
