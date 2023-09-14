import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({openModal, setOpenModal, children}) => {

    //console.log(classes.modal)
    const modalStateName = ['create', 'delete']
    //console.log(children)
    return (
        <div className={openModal.isOpen ? classes.modal + " " + classes.modal_active: classes.modal}
            onClick={() => setOpenModal({
                isOpen: false,
                mode: null,
                data: null
            })}
        >
            <div className={openModal.isOpen ? classes.content + " " + classes.content_active : classes.content}
                onClick={(event) => event.stopPropagation()}
            >
                {/*{openModal.isOpen === "create" ? children[0] : children[1]}*/}
                { children.find((chield, i) => openModal.mode === modalStateName[i])}
                {/*if(openModal.isOpen === "create") children[0]*/}
                {/*if(openModal.isOpen === "delete") children[1]*/}
                {/*if(openModal.isOpen === "update") children[2]*/}
            </div>
        </div>
    );
};

export default MyModal;