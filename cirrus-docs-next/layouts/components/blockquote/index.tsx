import React, { ReactElement } from 'react';

export interface BlockquoteProps {
    accentColor: string;
}

export const Blockquote: React.FC<BlockquoteProps> = (props) => {
    return (<blockquote style={{
        borderColor: props.accentColor,
        background: `${props.accentColor}CC`
    }}>
        {props.children}
    </blockquote>);
};
