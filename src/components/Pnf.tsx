import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface PnfProps {}

const Pnf: FunctionComponent<PnfProps> = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pnf">
        <img className="img-fluid pageNotFoundImg" src="pnf.png" alt="" />
        <button onClick={() => navigate(-1)} className="btn btn-dark">
          Go Back
        </button>
      </div>
    </>
  );
};

export default Pnf;
