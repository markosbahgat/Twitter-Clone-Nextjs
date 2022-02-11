import React, {useState} from 'react';
import styles from './Calender.module.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';


const ResponsiveCallender = () => {

const currentDate = new Date();
const month_names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const [year, setYear] = useState(currentDate.getFullYear());
const [month, setMonth] = useState(currentDate.getMonth());
const first_day = new Date(month, year, 1);
const [showedMonth, setShowedMonth] = useState(month_names[month]);

//------------------------------------------------------------------------------------------------------

const isLeapYear = () => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}
const getFebDays = () => {
    return isLeapYear(year) ? 29 : 28
}

//------------------------------------------------------------------------------------------------------

const days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const Numbers = days_of_month[month] + first_day.getDay() - 1;
const MonthDays = Array.from({length: Numbers + 2}, (v, i) => i);


//------------------------------------------------------------------------------------------------------



const NextYear = () => {
    setYear(prevyear => prevyear + 1)
    
}
const PrevYear = () => {
    setYear(prevyear => prevyear - 1)
}
const dark_mode_toggle = () => {
    document.querySelector('.calendar').classList.toggle('light')
    document.querySelector('.calendar').classList.toggle('dark')
}
const handleMonth = (e) => {
    document.querySelector(".month_list").classList.toggle("show");
    setMonth(Number(e.target.dataset.month));
    setShowedMonth(month_names[e.target.dataset.month]);
    //document.querySelector(".month_list").classList.toggle("show")
}

//------------------------------------------------------------------------------------------------------
return (
    <div className={styles["calendar"]}>
            <div className={styles.calendar_header}>
                <span className={styles.month_picker} id="month-picker" >{showedMonth}</span>
                <div className={styles.year_picker}>
                    <span className={styles.year_change} id="prev-year" onClick={PrevYear}>
                        <pre><i className="fas fa-chevron-left"></i></pre>
                    </span>
                    <span id="year">{year}</span>
                    <span className={styles.year_change} id="next-year" onClick={NextYear}>
                        <pre><i className="fas fa-chevron-right"></i></pre>
                    </span>
                </div>
            </div>
            <div className={styles.calendar_body}>
                <div className={styles.calendar_week_day}>
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className={styles.calendar_days}>
                    {MonthDays.map((index) => {
                       if(index - first_day.getDay() === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()){
                           return(
                            <div className={styles["calendar_day_hover", "curr_date"]} key={index}>
                                {index > first_day.getDay() && index - first_day.getDay()}
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                           )
                       }
                       else{
                           return (
                                <div className={styles["calendar_day_hover"]} key={index}>
                                    {index > first_day.getDay()  && index - first_day.getDay()}
                                    {index > first_day.getDay() && 
                                    <><span></span><span></span><span></span><span></span></>}
                                </div>
                            )
                        }
                    }
                    )}
                </div>
            </div>
            <div className={styles.calendar_footer}>
                <div className={styles.toggle}>
                    <span>Dark Mode</span>
                    <div className={styles.dark_mode_switch} onClick={dark_mode_toggle}>
                        <div className={styles.dark_mode_switch_ident}></div>
                    </div>
                </div>
            </div>
            <div className={styles["month_list"]} id={styles.show}>
                {month_names.map((month, index) => (
                    <div data-month={`${index}`} key={index} onClick={(e) => handleMonth(e)}>{month}</div>
                    ))}
            </div>
        </div>
     );
}
 
export default ResponsiveCallender;