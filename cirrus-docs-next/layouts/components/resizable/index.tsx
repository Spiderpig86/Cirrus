import React from 'react';
import {Resizable} from 're-resizable';

export const ResizableInternal: React.FC<any> = (props) => (
    <Resizable
        bounds="parent"
        minWidth="200px"
        handleStyles={{
            right: {
                backgroundColor: 'rgb(153 160 185)',
                borderRadius: '.25rem',
                height: '60px',
                right: '-20px',
                top: '25%',
            },
        }}
    >
        {props.children}
    </Resizable>
);
