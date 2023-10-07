import { useState } from "react";
import PropTypes from 'prop-types';
import './generalform.css'
import InputSingle from "../input/inputSingle";
import InputDouble from "../input/inputDouble";
import Button from "../button/button";
import DisplayShield from '../displayShield/displayShield'

export default function GeneralForm({
    data,
    handlers,
}) {
    const [state, setState] = useState('setup');

    const { generalInputHandler, clearGeneralInfo } = handlers

    function confirmItems() {
        setState('confirmed')
    }

    function addItem() {
        setState('active');
    }

    return (
        <form className="form noselect">
            <div className="form-header" >
                <h2>General</h2>
            </div>

            <div className="form-main">
                {state === 'active' && (
                    <>
                        <InputDouble
                            title1='First Name'
                            title2='Last Name'
                            name1='firstName'
                            name2='lastName'
                            handler={generalInputHandler}
                            data={data.general}
                        />
                        <InputSingle
                            title='Email'
                            name='email'
                            handler={generalInputHandler}
                            data={data.general}
                        />
                        <InputSingle
                            title='Phone'
                            name='phone'
                            handler={generalInputHandler}
                            data={data.general}
                        />
                        <Button
                            handler={confirmItems}
                            className='confirmBtn'
                            text='Confirm' />
                    </>
                )}
                {state === 'confirmed' && (
                    <>
                        <DisplayShield
                            index={0}
                            handlers={{
                                setState,
                                clearGeneralInfo
                            }}
                            data={data}
                            item={null}
                        />
                    </>
                )}
                {state === 'setup' && (

                    <Button
                        className='addBtn'
                        text='Add'
                        handler={addItem} />

                )}
            </div>


        </form >
    )
}

GeneralForm.propTypes = {
    data: PropTypes.object,
    handlers: PropTypes.object
}