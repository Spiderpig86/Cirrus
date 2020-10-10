import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './index.scss';

export interface CodeBlockProps {
    code: string;
    language: string;
    breakAll?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = (props) => {
    const [copied, setCopied] = useState(false);

    return (
        <div className="u-position-relative mb-2">
            <SyntaxHighlighter className={`codeblock pl-2 pr-3 py-1 ${(props.breakAll ? `break-all` : ``)}`} language={props.language} style={gruvboxDark}>
                {props.code}
            </SyntaxHighlighter>
            
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
                        top: '1.2rem',
                    }}
                />
            </CopyToClipboard>
        </div>
    );
};
