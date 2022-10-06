import { images } from "../../constants";

const SubHeading = ({title}) => (
  <div style={{ marginBottom: '1rem'}}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon}/>
  </div>
);

export default SubHeading;
