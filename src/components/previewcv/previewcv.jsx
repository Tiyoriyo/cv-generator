import InfoDisplayList from '../infoDisplayList/infoDisplayList';
import InfoGeneral from '../infoGeneral/infoGeneral';

import './previewcv.css'
import PropTypes from 'prop-types';

export default function PreviewCV({ data }) {

    return (
        <div className="preview-container">
            <div className="preview-page">
                <InfoGeneral
                    data={data} />
                <InfoDisplayList
                    data={data}
                    type='education'
                />
                <InfoDisplayList
                    data={data}
                    type='work'
                />
            </div>
        </div>
    )
}

PreviewCV.propTypes = {
    data: PropTypes.object
}