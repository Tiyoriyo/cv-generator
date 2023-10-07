
import PropTypes from 'prop-types'
import './infoDisplay.css'

export default function InfoDisplay({
    type,
    item,
    index
}) {

    const organization = (type === 'education') ? item.school : item.company;
    const occupation = (type === 'education') ? item.subject : item.title;
    const location = (type === 'education') ? item.eduLocation : item.workLocation;
    const from = (type === 'education') ? item.eduFrom : item.workFrom;
    const to = (type === 'education') ? item.eduTo : item.workTo;
    const details = (type === 'education') ? item.eduDetails : item.workDetails;


    return (
        <div className="experience-container" key={index}>
            <div className='experience-mainDetails-container'>
                <div className='experience-mainDetails'>
                    <p className='experience-name'>{organization}</p>
                    <p className='experience-occupation'>{occupation}</p>
                    {item.grade && (
                        <p className='experience-grade'>{item.grade}</p>
                    )}
                </div>
                <div className='experience-subDetails'>
                    <p className='experience-location'>{location}</p>
                    {(from && to) && (
                        <div className='experience-length'>
                            <p>{from}</p> - <p>{to}</p>
                        </div>
                    )}
                </div>
            </div>
            <p className='experience-details'>{details}</p>
        </div>
    )
}

InfoDisplay.propTypes = {
    type: PropTypes.string,
    item: PropTypes.object,
    index: PropTypes.number
}