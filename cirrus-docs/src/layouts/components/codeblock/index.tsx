import React from 'react';

export interface CodeBlockProps {
    code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = (props) => {
    return (
        <div>
            <pre>
                <code className="dark px-3 py-1">{ props.code }</code>
            </pre>
        </div>
    );
};
