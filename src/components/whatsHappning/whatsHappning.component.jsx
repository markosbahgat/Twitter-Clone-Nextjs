import styles from './whatsHappning.module.scss';
import {useSelector} from 'react-redux';
import Image from 'next/image';

function WhatsHappning() {
    const state = useSelector(state => state.fetch.latest);
    return (
        <div>
            <div className={styles.whatsHappening_container}>
                <h2>What&apos;s Happening</h2>
                <div>
                    {state.data?.slice(0, 5).map(item => (
                        <div key={item.id} className={styles.post_container}>
                            <div className={styles.title}>
                                <span>{item.owner.firstName + " " + item.owner.lastName}</span>
                                <h5>
                                    {item.text}
                                </h5>
                            </div>
                            <div className={styles.latestImg_container}><Image src={item.image} layout="fill" alt=''/></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhatsHappning;