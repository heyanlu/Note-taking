import React, { useState } from 'react';
import './AddTask.css'

function AddTask( {addItem} ) {
    const [title, setTitle] = useState('');
    const [prioritize, setPrioritize] = useState(false);
    const [error, setError] = useState('');

    function handleAddClick(e) {
        e.preventDefault();
        if (title.trim() === '') {
            setError("New task cannot be empty!")
        } else {
            setTitle('');
            setError('');
            setPrioritize(false);
            addItem( {title, prioritize} );
        }
    }

    return (
        <>
        <div className='new-task-container'>
            <div className='new-task'>
                <input
                    placeholder="Add task"
                    value= {title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        setError('');
                    }}
                />
            </div>
            <div>
                <label className='new-task-label'>
                    <input
                        type="checkbox"
                        checked={prioritize}
                        onChange={(e) => {
                            setPrioritize(e.target.checked);
                        }}
                    />
                Prioritize
                </label>
            </div>
            <div className='new-task-button'>
                <button onClick={handleAddClick}>Add</button> 
            </div>
        </div>  
        <div className='msg-container'>
        {error && <p>{error}</p>} 
        </div>
        </>
    )
}

export default AddTask
