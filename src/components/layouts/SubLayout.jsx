import NewsLetter from '../shared/newsletter/NewsLetter';
import { Outlet } from 'react-router-dom';

function SubLayout() {
    return (
      <>
        <Outlet />
        <NewsLetter />
      </>
    );
}

export default SubLayout