import arrowRight from "../../../public/images/arrow-right.svg";
import "./RightArrowBtn.css";

export default function RightArrowBtn({ cssClass, label, url }) {
    return <a href={url} className={cssClass}>{label}<img src={arrowRight} alt="" /></a>;
}