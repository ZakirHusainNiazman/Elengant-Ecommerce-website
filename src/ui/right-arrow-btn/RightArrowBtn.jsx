import { Link } from "react-router-dom";
import arrowRight from "../../assets/ui-images/arrow-right.svg";
import "./RightArrowBtn.css";

export default function RightArrowBtn({ cssClass, label, url }) {
    return <Link to={url} className={cssClass}>{label}<img src={arrowRight} alt="" /></Link>;
}