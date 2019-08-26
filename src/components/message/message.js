import React, { useState } from 'react';

const Message = (props) => {
    const [message, setMessage] = useState(props.message)
    const [type, setType] = useState(props.type)
    
    /** choose style */
    function types() {
        switch (type) {
            case '1':
                return 'alert-success';
            case '2':
                return 'alert-danger';
            case '3':
                return 'alert-infor';
            case '4':
                return 'alert-warning';

        }
    }

    return (
        <div>
            <div className={`alert ${types()}`} role="alert">
                {message}
            </div>
        </div>

    )
}
export default Message;

