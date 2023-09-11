import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./activation.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { generateInputChangeHandler } from "../../utils/utils";

const Activation = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();
  const activate = async () => {
    const data = inputValue.split("/").slice(5);
    const postRequest = await axios.post(
      "https://studapi.teachmeskills.by/auth/users/activation/",
      { uid: data[0], token: data[1] }
    );
    if (postRequest.status === 204) {
      navigate("/sucess");
      return postRequest.data;
    }
  };

  return (
    <div className={styles.activation}>
      <Input
        placeholder="Your activation link from email"
        border="1px solid black"
        value={inputValue}
        handleChange={generateInputChangeHandler(setInputValue)}
      />
      <Button
        title="Activate"
        disabled={false}
        mode="primary"
        handleClick={activate}
      />
    </div>
  );
};
export default Activation;
