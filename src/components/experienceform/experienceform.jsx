import { useState } from "react";
import Button from "../button/button";
import InputSingle from "../input/inputSingle";
import InputDouble from "../input/inputDouble";
import inputSkeleton from './inputSkeleton.js'
import DisplayShield from "../displayShield/displayShield";
import PropTypes from 'prop-types';
import getTempDataSkeleton from "./dataSkeleton";
import './experienceform.css'

export default function ExperienceForm({
    globalData,
    handlers,
    type

}) {
    const [state, setState] = useState('setup');
    const [tempData, setTempData] = useState(getTempDataSkeleton()[type]);
    const [save, setSave] = useState(undefined);
    const [index, setIndex] = useState(undefined);
    const [isEditting, setIsEditting] = useState(false);


    // Variables
    const data = globalData[type];
    const maxDisplayShields = (type === 'work') ? 2 : 1;
    const { forceRender, setData } = handlers

    // Sets main data based on new input values
    function inputHandler(e, i = data.children.length - 1) {
        const newData = { ...data };
        const inputFields = newData.children[i];
        inputFields[e.target.name] = e.target.value;
        setData({ ...globalData, [type]: newData })
    }


    // Return queue list for map function within state 'active' render
    function returnInputs(obj) {
        let queue = [];
        Object.keys(obj)
            .forEach(prop => {
                queue.push(obj[prop]);
            });
        return queue;
    }

    function getNewChildren() {
        const children = data.children;
        const child = getTempDataSkeleton()[type];
        children.push(child);
        return children;
    }

    function addHandler() {
        const children = getNewChildren();
        const obj = { children };
        setData({ ...globalData, [type]: obj })
        setState('active');
    }

    function exitEdit() {
        setSave(undefined)
        setIsEditting(false);
    }

    function cancelEdit() {
        const obj = { ...data };
        obj.children[index] = save;
        exitEdit();
        setState('setup');
        setData({ ...globalData, [type]: obj })
    }

    function cancelHandler() {
        if (isEditting) {
            cancelEdit();
            return;
        }
        const children = data.children;
        const index = children.length - 1;
        children.splice(index, 1);
        const obj = { children }
        setData({ ...globalData, [type]: obj });
        setState('setup');
    }

    // Capitalize first letter
    function getTitle() {
        let title = type;
        let result = title[0].toUpperCase() + title.substring(1);
        return result;
    }

    // Create Item from Input
    function confirmInput() {
        const check = getTempDataSkeleton()[type];
        if (JSON.stringify(retrieveItems(index)) === JSON.stringify(check)) {
            const children = data.children;
            children.splice(index, 1);
            const newDataObject = { children }
            setData({ ...globalData, [type]: newDataObject });
            setState('setup');
        }
        setIsEditting(false)
        setState('setup');
    }

    function retrieveItems(index) {
        return data.children[index];
    }

    return (
        <form className="form noselect">
            <div className="form-header">
                <h2>{getTitle()}</h2>
            </div>
            {state === 'setup' && (
                <div className="form-main">
                    {data.children.length > 0 && (
                        <>
                            {data.children.map((item, index) => {
                                return (
                                    <DisplayShield
                                        key={index}
                                        index={index}
                                        handlers={{
                                            retrieveItems,
                                            setState,
                                            setIsEditting,
                                            setTempData,
                                            setSave,
                                            setIndex,
                                            forceRender
                                        }}
                                        data={data}
                                        item={item} />
                                )
                            })}
                        </>
                    )}


                    {data.children.length < maxDisplayShields && (
                        <Button
                            handler={addHandler}
                            className={'addBtn'}
                            text='Add' />
                    )}
                </div>
            )}
            {state === 'active' && (
                <div className="form-main">
                    {returnInputs(inputSkeleton[type])
                        .map((item, index) => {
                            const input = returnInputs(item);
                            const { title, title1, title2, name, name1, name2, type, type1, type2 } = item;

                            if (input.length <= 3) {
                                return (
                                    <InputSingle
                                        key={index}
                                        title={title}
                                        name={name}
                                        type={type}
                                        data={isEditting ? tempData : data}
                                        index={index}
                                        handler={inputHandler} />
                                )
                            } else {
                                return (
                                    <InputDouble
                                        key={index}
                                        title1={title1}
                                        title2={title2}
                                        name1={name1}
                                        name2={name2}
                                        data={isEditting ? tempData : data}
                                        type1={type1}
                                        type2={type2}
                                        handler={inputHandler}
                                    />
                                )
                            }
                        })}
                    <div className="buttonContainer">
                        <Button
                            handler={cancelHandler}
                            className={'cancelBtn'}
                            text='Cancel' />
                        <Button
                            handler={confirmInput}
                            className={'confirmBtn'}
                            text='Confirm' />
                    </div>
                </div>
            )}

        </form >
    )
}

ExperienceForm.propTypes = {
    globalData: PropTypes.object,
    type: PropTypes.string,
    handlers: PropTypes.object
}