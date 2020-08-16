import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface CodeBlockProps {
    code: string;
    language: string;
    languageDisplay: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = (props) => {
    const [copied, setCopied] = useState(false);

    return (
        <div className="u-position-relative">
            <pre className="html">
                <code className="dark px-3 py-1" data-lang="HTML">{props.code}</code>
            </pre>

            <CopyToClipboard
                text={props.code}
                onCopy={() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 5000);
                }}
            >
                <FontAwesomeIcon className="fa-wrapper u-position-absolute" icon={['fas', copied ? 'clipboard-check' : 'clipboard']} style={{
                    cursor: 'pointer',
                    right: '1rem',
                    top: '2.5rem'
                }} />
            </CopyToClipboard>
        </div>
    );
};
