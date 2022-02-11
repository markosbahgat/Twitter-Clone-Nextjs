import { useEffect } from "react";
import { useSelector } from "react-redux";
import useTags from "../hooks/GetTagsHook";
import styles from '../styles/explore.module.scss';
const ExploreHOC = () => {
    const state = useSelector(state => state);
    const {getTags} = useTags();
    useEffect(()=> {
        getTags();
    }, [])
    return ( 
        <div className={styles.main_container}>
            <h1>Explore</h1>
            <div className={styles.all_tags}>
                {state.fetch.tags.data?.slice(0, 100).map((item, index) => (
                    item && <div key={index} className={styles.tag_container}><span>#{item}</span></div>

                ))}
            </div>
        </div>
     );
}
 
export default ExploreHOC;