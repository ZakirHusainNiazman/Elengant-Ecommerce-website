import { HiMiniChevronLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom'

import cssClasses from "./BackButton.module.css";

function BackButton({to}) {
  return (
    <Link className={cssClasses['btn']} to={to}>
      <HiMiniChevronLeft size={20} /> back
    </Link>
  );
}

export default BackButton