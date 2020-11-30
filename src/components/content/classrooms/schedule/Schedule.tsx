import React from 'react';import './schedule.css';import {useSelector} from "react-redux";import {Divider, Select} from "antd";const { Option } = Select;const Schedule = () => {    // @ts-ignore    let classrooms = useSelector(state => state.classroomsReducer.classrooms);    let timeline = ["8:00", "8:15", "8:30", "8:45",        "9:00", "9:15", "9:30", "9:45",        "10:00", "10:15", "10:30", "10:45",        "11:00", "11:15", "11:30", "11:45",        "12:00", "12:15", "12:30", "12:45",        "13:00", "13:15", "13:30", "13:45",        "14:00", "14:15", "14:30", "14:45",        "15:00", "15:15", "15:30", "15:45",        "16:00", "16:15", "16:30", "16:45",        "17:00", "17:15", "17:30", "17:45",        "18:00", "18:15", "18:30", "18:45",        "19:00", "19:15", "19:30", "19:45", "20:00"];    return <>        <h1>Розклад</h1>        <Select defaultValue="Сьогодні" style={{ width: 120 }} onChange={()=>{}}>            <Option value="Сьогодні">Сьогодні</Option>            <Option value="Monday">Понеділок</Option>            <Option value="Thursday">Вівторок</Option>            <Option value="Wednesday">Середа</Option>            <Option value="Thursday">Четверг</Option>            <Option value="Friday">П'ятниця</Option>            <Option value="Saturday">Субота</Option>            <Option value="Sunday">Неділя</Option>        </Select>        <Divider/>        <div className="scheduleTable">            <table className="tg">                <thead>                {/*временная шкала - строка*/}                <tr>                    {/*начало таблицы — пустая клетка*/}                    <th></th>                    {/*генерирование строки таймлайна*/}                    {timeline.map((el: any) => <th style={{padding: "10px"}} className="tg-0pky">{el}</th>)}                </tr>                {/*конец стройки временной шкалы*/}                </thead>                <tbody>                {classrooms.map((cl: any) => {                    let tempArray = timeline;                    cl.schedule.map((scheduleUnit: any) => {                        let unitFrom = timeline.findIndex((el) => el === scheduleUnit.from);                        let unitTo = timeline.findIndex((el) => el === scheduleUnit.to);                        tempArray.fill('del', (unitFrom + 1), unitTo);                    })                    // генерирование строки аудитории                    return <tr>                        {/*ячейка с названием аудитории*/}                        <td style={{padding: "10px"}}>{cl.name}</td>                        {                            tempArray.map((el: any) => {                                let colSpanNum = cl.schedule.map((scheduleUnit: any) => {                                    let from = timeline.indexOf(scheduleUnit.from)                                    let to = timeline.indexOf(scheduleUnit.to)                                    let term = to - from;                                    if(scheduleUnit.from === el) {                                        return term.toString()                                    } else {                                        return null                                    }                                });                                // генерирование ячеек временной шкалы аудитории                                return el != "del" ? <td className="tg-0lax" colSpan={colSpanNum                                    .join()                                    .replace(',','')}>                                    {cl.schedule.map((scheduleUnit: any) => {                                        if (scheduleUnit.from === el) {                                            return <div>{                                                scheduleUnit.user.lastName +                                            " " + scheduleUnit.from + " — " + scheduleUnit.to                                            }</div>                                        }                                    })}                                </td> : null;                            })                        }                    </tr>                })}                </tbody>            </table>        </div>    </>}export default Schedule;