import InfoDisplay from '../infoDisplay/infoDisplay';
import PropTypes from 'prop-types';
import './infoDisplayList.css'

export default function InfoDisplayList({
    data,
    type
}) {

    const dataObj = data[type];
    const header = (type === 'education') ? 'Education' : 'Work';


    return (
        <>
            {dataObj.children.length > 0 && (
                <div className="info-display">
                    <h2 className='info-header'>{header}</h2>
                    {dataObj.children.map((item, index) => {
                        return (
                            <InfoDisplay
                                key={index}
                                type={type}
                                item={item}
                                index={index}
                            />
                        )
                    })}
                </div>
            )}
        </>
    )
}

InfoDisplayList.propTypes = {
    data: PropTypes.object,
    type: PropTypes.string
}