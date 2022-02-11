import DraggableSideBar from '../DraggableSideBar/DraggableSideBar';
import SearchSideBar from '../searchBar/searchSideBar.component';
import WhatsHappning from '../whatsHappning/whatsHappning.component.jsx';
import styles from './layout.module.scss';
import {useRouter} from 'next/router';
import {useMediaQuery} from 'react-responsive';

function Layout({children}) {
    const router = useRouter();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <div>
            <div>
                {!(router.pathname === '/login') && <DraggableSideBar/>}
            </div>
            <div className={styles[`${router.pathname !== '/login' && "children"}`]}>
                {children}
            </div>
            <div className={styles.searchBar}>
                {!(router.pathname === '/bookmarks' || router.pathname === '/login' || isTabletOrMobile) && <SearchSideBar/>}
                {!(router.pathname === '/bookmarks' || router.pathname === '/login' || isTabletOrMobile) &&  <WhatsHappning/>}
            </div>
        </div>
    );
}

export default Layout;