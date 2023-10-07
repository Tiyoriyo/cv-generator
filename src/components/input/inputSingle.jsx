import PropTypes from 'prop-types';
import './input.css'

export default function InputSingle({
    title,
    name,
    handler,
    data,
    type
}) {

    return (
        <div className="input-field noselect" autoComplete="off">
            <label className="input-label">
                {title}
            </label>
            {type === 'textarea' && (
                <textarea
                    className='input-box detailsTextArea'
                    name={name}
                    value={data[name]}
                    onChange={handler}
                    rows={5}
                />
            )}
            {type !== 'textarea' && (
                <input
                    className="input-box"
                    name={name}
                    value={data[name]}
                    onChange={handler}
                />
            )}
        </div>
    )
}

InputSingle.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    handler: PropTypes.func,
    data: PropTypes.object,
    isDisabled: PropTypes.bool,
    type: PropTypes.string
}