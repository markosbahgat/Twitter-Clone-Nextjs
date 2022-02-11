import styles from './searchBar.module.scss';

function SearchSideBar() {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li>
                    <i className="fas fa-search" id={styles.fa_search}></i>
                    <input type="text" placeholder='Search Twitter'/>
                </li>
            </ul>
        </div>
    );
}

export default SearchSideBar;