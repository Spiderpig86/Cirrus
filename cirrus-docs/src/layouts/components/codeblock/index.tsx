import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './index.scss';

export interface CodeBlockProps {
    code: string;
    language: string;
    languageDisplay?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = (props) => {
    const [copied, setCopied] = useState(false);

    return (
        <div className="u-position-relative mb-2">
            <SyntaxHighlighter
                className="codeblock pl-2 pr-3 py-1"
                language={props.language}
                style={gruvboxDark}
            >
                {props.code}
            </SyntaxHighlighter>
            {/* <pre className={props.language}>
                <code className="codeblock pl-3 pr-5 py-2" data-lang={props.languageDisplay ?? ''}>
                    {props.languageDisplay ? <br /> : <></>}
                    {props.code}
                </code>
            </pre> */}

            <CopyToClipboard
                text={props.code}
                onCopy={() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 3000);
                }}
            >
                <FontAwesomeIcon
                    className="fa-wrapper u-position-absolute text-gray-200"
                    icon={['fas', copied ? 'clipboard-check' : 'clipboard']}
                    style={{
                        cursor: 'pointer',
                        right: '1.5rem',
                        top: props.languageDisplay ? '2.25rem' : '1.2rem',
                    }}
                />
            </CopyToClipboard>
        </div>
    );
};
