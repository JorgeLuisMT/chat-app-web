import { useState } from "react";

const useForm = (initForm, validateForm) => {
  const [form, setForm] = useState(initForm);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setError(validateForm(e.target));
  };

  return {
    form,
    setForm,
    error,
    handleChange,
    handleBlur,
  };
};

export default useForm;
