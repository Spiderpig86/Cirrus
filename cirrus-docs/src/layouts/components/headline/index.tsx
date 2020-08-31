import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export interface HeadlineProps {
    title: string;
    link: string;
    size?: string;
}

export const Headline: React.FC<HeadlineProps> = (props) => {

    const HeaderTag = `h${props.size ?? '1'}` as keyof JSX.IntrinsicElements;

    function getUrlWithoutAnchor(): string {
        return document.URL.replace(/#.*$/, '');
    }

    return (
        <HeaderTag>
            <CopyToClipboard text={getUrlWithoutAnchor() + props.link}>
                <a className="tooltip tooltip--left mr-1" data-tooltip="Copy" style={{ cursor: 'pointer' }}>
                    #
                </a>
            </CopyToClipboard>
            {props.title}
        </HeaderTag>
    );
};
