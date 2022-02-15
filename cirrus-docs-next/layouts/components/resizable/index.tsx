import React from 'react';
import { Resizable } from 're-resizable';

export interface ResizableInternalProps {
    children: any;
    minWidth?: string;
    height?: string;
    top?: string;
}

export const ResizableInternal: React.FC<ResizableInternalProps> = (props: ResizableInternalProps) => (
    <Resizable
        bounds="parent"
        minWidth={props.minWidth ?? '200px'}
        minHeight={props.height ?? 'auto'}
        handleStyles={{
            right: {
                backgroundColor: 'rgb(153 160 185)',
                borderRadius: '.25rem',
                height: '60px',
                right: '-20px',
                top: props.top ?? '25%',
            },
        }}
    >
        {props.children}
    </Resizable>
);
