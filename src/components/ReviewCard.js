import styles from './ReviewCard.module.css'
import { ImQuotesRight } from 'react-icons/im'
import data from '../data';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useState } from 'react';
const ReviewCard = () => {
    const [index, setIndex] = useState(0);
    const { image, name, job, text } = data[index];
    const increseIndex = () => {
        if (index === data.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }
    const decreaseIndex = () => {
        if (index === 0) {
            setIndex(data.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }
    const surprise = () => {
        let surpriseIndex = Math.floor(Math.random() * data.length);;
        while (surpriseIndex === index) {
            surpriseIndex = Math.floor(Math.random() * data.length);
        }
        setIndex(surpriseIndex);
    }
    return (
        <section className={styles.Card}>
            <div className={styles.imgBox}>
                <ImQuotesRight className={styles.quoteIcon} />
                <img src={image} alt="member-img" />
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <h3 className={styles.job}>{job}</h3>
                <p className={styles.text}>{text}</p>
            </div>
            <div>
                <FaAngleLeft className={styles.fa_btn} onClick={decreaseIndex} />
                <FaAngleRight className={styles.fa_btn} onClick={increseIndex} />
                <button className={styles.btn} onClick={surprise}>Surprise Me</button>
            </div>
        </section>
    )
}

export default ReviewCard