import React from 'react';

export interface TableWrapperProps {
    children: JSX.Element;
};

export const TableWrapper: React.FC<TableWrapperProps> = (props) => {
    return (
        <div style={{
            maxWidth: '100%',
            overflow: 'auto'
        }}>
            { props.children }
        </div>
    )
}