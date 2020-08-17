import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

export interface CodeBlockProps {
    code: string;
    language: string;
    languageDisplay?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = (props) => {
    const [copied, setCopied] = useState(false);

    return (
        <div className="u-position-relative">
            <pre className={props.language}>
                <code className="pl-3 pr-5 py-2" data-lang={props.languageDisplay ?? ''}>
                    {props.languageDisplay ? <br /> : <></>}
                    {props.code}
                </code>
            </pre>

            <CopyToClipboard
                text={props.code}
                onCopy={() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 3000);
                }}
            >
                <FontAwesomeIcon
                    className="fa-wrapper u-position-absolute text-gray-700"
                    icon={['fas', copied ? 'clipboard-check' : 'clipboard']}
                    style={{
                        cursor: 'pointer',
                        right: '1rem',
                        top: props.languageDisplay ? '2.5rem' : '1rem',
                    }}
                />
            </CopyToClipboard>
        </div>
    );
};
