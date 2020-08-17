import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface HeadlineProps {
    title: string;
    link: string;
}

export const Headline: React.FC<HeadlineProps> = (props) => {
    function getUrlWithoutAnchor(): string {
        return document.URL.replace(/#.*$/, '');
    }

    return (
        <h1>
            <CopyToClipboard text={getUrlWithoutAnchor() + props.link}>
                <a className="tooltip tooltip--left mr-1" data-tooltip="Copy" style={{ cursor: 'pointer' }}>
                    #
                </a>
            </CopyToClipboard>
            {props.title}
        </h1>
    );
};
