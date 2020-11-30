import React, {useState} from 'react';
import styles from './scheduleTable/schedule.module.css';
import {useSelector} from "react-redux";
import {Button, Divider, InputNumber, Select} from "antd";
import ScheduleTable from "./scheduleTable/ScheduleTable";

const { Option } = Select;

const Schedule = () => {
    // @ts-ignore
    let classrooms = useSelector(state => state.classroomsReducer.classrooms);
    let [disabled, setDisabled] = useState(true);
    let onChangeAudNumber = (e: any) => {

    }
    return <>
        <h1>Розклад</h1>
        <Select defaultValue="Сьогодні" style={{ width: 120 }} onChange={()=>{}}>
            <Option value="Сьогодні">Сьогодні</Option>
            <Option value="Monday">Понеділок</Option>
            <Option value="Thursday">Вівторок</Option>
            <Option value="Wednesday">Середа</Option>
            <Option value="Thursday">Четверг</Option>
            <Option value="Friday">П'ятниця</Option>
            <Option value="Saturday">Субота</Option>
            <Option value="Sunday">Неділя</Option>
        </Select>
        <div style={{ marginTop: 10, marginBottom: 10}}>
            <Button onClick={()=> {
                setDisabled(!disabled);

            }} type="primary">
                Вибрати аудиторію
            </Button>
        </div>
        <InputNumber onChange={onChangeAudNumber} min={1} max={classrooms.length} disabled={disabled} defaultValue={1}/>
        <Divider/>
        <ScheduleTable classrooms={classrooms}>
    </ScheduleTable>
        </>
}
export default Schedule;