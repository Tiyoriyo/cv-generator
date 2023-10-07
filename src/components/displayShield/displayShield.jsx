import PropTypes from 'prop-types'
import './displayShield.css'

import Icon from '@mdi/react';
import { mdiFileEditOutline, mdiTrashCanOutline } from "@mdi/js";

export default function DisplayShield({
    index,
    handlers,
    data,
    item,
}) {

    const { setState, setTempData, retrieveItems, setIsEditting, setSave, setIndex, forceRender } = handlers
    const { children } = data;
    let name = item.school || item.company || 'Info';



    function editItem() {
        setState('active');
        setSave({ ...retrieveItems(index) })
        setTempData(retrieveItems(index))
        setIndex(index);
        setIsEditting(true);

    }

    function deleteItem() {
        children.splice(index, 1);
        forceRender();
    }

    return (
        <div
            className="experience-data"
            key={index}
        >
            <p>{name}</p>
            <div className="icon-container">
                <Icon
                    className="edit-icon"
                    path={mdiFileEditOutline}
                    size={1}
                    onClick={editItem} />
                <Icon
                    className="edit-icon"
                    path={mdiTrashCanOutline}
                    size={1}
                    onClick={deleteItem} />
            </div>
        </div>
    )
}

DisplayShield.propTypes = {
    index: PropTypes.number,
    handlers: PropTypes.object,
    data: PropTypes.object,
    item: PropTypes.object,
    forceRender: PropTypes.func
}

