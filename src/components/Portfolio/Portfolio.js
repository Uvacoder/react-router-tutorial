import { useParams, useHistory, useLocation } from "react-router-dom";

const Portfolio = (props) => {
  console.log(props);
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  console.log({ params });
  console.log({ history });
  console.log({ location });

  const pushHistory = () => {
    history.push("/hello", [0]);
  };

  const goBackHistory = () => {
    history.goBack();
  };

  const replaceHistory = () => {
    history.replace("/hello");
  };

  return (
    <div>
      Portfolio
      <button onClick={pushHistory}>history push</button>
      <button onClick={goBackHistory}>history Go Back</button>
      <button onClick={replaceHistory}>history replace</button>
    </div>
  );
};

export default Portfolio;
