import React, { FC } from 'react';

interface Props {
    title: string;
}

const MyComponent: FC<Props> = (props) => {
    return (
        <div>
            <p>Component{props.title}</p>
        </div>
    )
}

export default MyComponent;