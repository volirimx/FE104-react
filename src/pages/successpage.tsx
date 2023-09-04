import { Title } from "../components/Title/title";
import { TemplateBody } from "../components/TemplateBody/templateBody";
import { Button } from "../components/Button_primary/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/user";

export const Successpage = () => {
  const navigate = useNavigate();
  const goPosts = () => navigate("/posts");

  const user = useSelector(selectUser);
  console.log("User from Redux Store:", user);

  return (
    <>
      <Title title="Success" />
      <TemplateBody title={`Email confirmed \nYour registration is completed`}>
        <Button content="Go to posts" mode="primary" onClick={goPosts} />
      </TemplateBody>
    </>
  );
};
