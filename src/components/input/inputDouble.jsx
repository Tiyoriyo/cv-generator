import PropTypes from 'prop-types';
import './input.css';
import InputSingle from './inputSingle';

export default function InputDouble({
    title1,
    title2,
    name1,
    name2,
    handler,
    data,
    isDisabled
}) {
    return (
        <div className="input-field-double noselect">
            <InputSingle
                title={title1}
                name={name1}
                handler={handler}
                data={data}
                isDisabled={isDisabled} />
            <InputSingle
                title={title2}
                name={name2}
                handler={handler}
                data={data}
                isDisabled={isDisabled} />
        </div>
    )
}

InputDouble.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    name1: PropTypes.string,
    name2: PropTypes.string,
    handler: PropTypes.func,
    data: PropTypes.object,
    isDisabled: PropTypes.bool
}

