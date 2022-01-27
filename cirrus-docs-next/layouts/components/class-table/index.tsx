import React from 'react';

export interface ClassTableEntry {
    class: string;
    style?: string;
}

export interface ClassTableProps {
    classTable: ClassTableEntry[];
}

export const ClassTable: React.FC<ClassTableProps> = (props) => {
    return (
        <table className="class-table table fixed-head u-text-left">
            <thead>
                <tr>
                    <th
                        style={{
                            width: '200px',
                        }}
                    >
                        Class
                    </th>
                    <th>Styles</th>
                </tr>
            </thead>
            <tbody>
                {props.classTable.map((row, index) => (
                    <tr key={index}>
                        <td
                            style={{
                                width: '200px',
                            }}
                        >
                            <code className="text-blue-600 bg-blue-100">{row.class}</code>
                        </td>
                        <td>
                            <pre>
                                <code className="text-purple-600 bg-transparent">{row.style}</code>
                            </pre>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
