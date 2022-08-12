import { useState, useCallback } from "react";

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  const [toggle, setToggle] = useState(false);

  const onChange = (e) => {
    const REGNICKNAME = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
    if (name === "nickname" && !REGNICKNAME.test(value)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset, toggle];
}

export default useInputs;
