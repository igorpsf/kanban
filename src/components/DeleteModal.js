import React, {useState} from 'react';

const DeleteModal = ({openModal, setOpenModal, removeTask}) => {

    const [inputValue, setInputValue] = useState('');
    const onDelete = () => {
        removeTask(openModal.data.id)
        onClose()
    }

    const onClose = () => {
        setOpenModal({
            isOpen: false,
            mode: null,
            data: null
        })
        setInputValue('')
    }

    return (
        <div>
            <h3>Delete this task?</h3>
            <p>Task name: <b>{openModal.data.name}</b></p>
            <p>To confirm, type <b>{openModal.data.name}</b> in the box below.</p>
            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                className="m-2"
            />

            <div>

                <button
                    disabled={inputValue !== openModal.data.name}
                    className="btn btn-outline-danger me-2"
                    onClick={onDelete}
                >Delete</button>

                <button
                    className="btn btn-outline-primary"
                    onClick={onClose}
                >Cancel
                </button>
            </div>
        </div>
    );
};

export default DeleteModal;