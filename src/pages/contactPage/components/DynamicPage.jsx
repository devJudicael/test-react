import { useParams } from "react-router-dom";

const DynamicPage = (props) => {
  const { hi } = useParams();
  return (
    <div>
      <p>heyy je suis {hi}</p>
    </div>
  );
};
export default DynamicPage;
