import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import React from 'react';

const DatePicker = ({ ev, queEditedValue, setQueEditedValue }) => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    let date = `${year}/${month}/${day}`;
    const initialRender = useRef(true);

    const handleDatePick = () => {
        let qev = queEditedValue.filter(item => ev.id !== item.id)
        qev.push({ answer: date, id: ev.id })
        setTimeout(() => {
            setQueEditedValue(qev)
        }, 0);
    }

    useEffect(()=>{
        if (!initialRender.current) {
            handleDatePick()
        } else {
            initialRender.current = false;
        }
    }, [day, month, year])

    const days = [
        'روز', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];

    const months = [
        'ماه',
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        " شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
    ];

    const years = [
        'سال',
        "1380",
        "1382",
        "1383",
        "1384",
        "1385",
        "1386",
        "1387",
        "1388",
        "1389",
        "1390",
        "1391",
        "1392",
        "1393",
        "1394",
        "1395",
        "1396",
        "1397",
        "1398",
        "1399",
        "1400",
        "1401",
        '1402',
        '1403'
    ];

    return (<div className={styles.datePickerWrapper}>

        <select className={styles.selectDate}
            name={ev.id}
            defaultValue={ev.answer.split("/")[2]}
            onChange={(e) => {
                setDay(e.target.value);
            }}
        >
            {days.map((day, i) => (
                <option key={i}>{day}</option>
            ))}
        </select>

        <select className={styles.selectDate}
            name={ev.id}
            defaultValue={ev.answer.split("/")[1]}
            onChange={(e) => {
                setMonth(e.target.value);
            }}
        >
            {months.map((month, i) => (
                <option key={i}>{month}</option>
            ))}
        </select>

        <select className={styles.selectDate}
            name={ev.id}
            defaultValue={ev.answer.split("/")[0]}
            onChange={(e) => {
                setYear(e.target.value);
            }}
        >
            {years.map((year, i) => (
                <option key={i}>{year}</option>
            ))}
        </select>
    </div>)

}

export default DatePicker;