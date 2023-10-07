import PropTypes from 'prop-types';
import ExperienceForm from "../experienceform/experienceform";
import './formbar.css';

export default function FormBar({
    data,
    handlers
}) {
    const { dataUpdate, dataSubmit, forceRender, setData } = handlers;

    return (
        <div className="formbar" >
            <ExperienceForm
                globalData={data}
                type='general'
                handlers={{
                    dataUpdate,
                    dataSubmit,
                    forceRender,
                    setData
                }} />
            <ExperienceForm
                globalData={data}
                type='education'
                handlers={{
                    dataUpdate,
                    dataSubmit,
                    forceRender,
                    setData
                }} />
            <ExperienceForm
                globalData={data}
                type='work'
                handlers={{
                    dataUpdate,
                    dataSubmit,
                    forceRender,
                    setData
                }} />
        </div >
    )
}

FormBar.propTypes = {
    data: PropTypes.object,
    handlers: PropTypes.object
}

