import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SyntaxHighlighter, { Prism } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export interface CodeBlockProps {
    code: string;
    language: string;
    breakAll?: boolean;
    style?: any;
    classes?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = (props) => {
    const [copied, setCopied] = useState(false);

    return (
        <div className={`codeblock-wrapper u-relative mb-2`}>
            <Prism
                className={`codeblock pl-2 pr-3 py-1 u-shadow-lg h-100 ${props.classes ?? ''} ${
                    props.breakAll ? `break-all` : ``
                }`}
                language={props.language === 'htmlbars' ? 'html' : props.language}
                style={props.style ?? duotoneDark}
            >
                {props.code}
            </Prism>

            <CopyToClipboard
                text={props.code}
                onCopy={() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 3000);
                }}
            >
                <FontAwesomeIcon
                    className="fa-wrapper u-absolute text-gray-200"
                    icon={['fas', copied ? 'clipboard-check' : 'clipboard']}
                    style={{
                        cursor: 'pointer',
                        right: '1.5rem',
                        top: '1.2rem',
                    }}
                />
            </CopyToClipboard>
        </div>
    );
};
