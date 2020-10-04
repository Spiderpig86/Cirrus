import React from 'react';

export interface IFrameProps {
    content: string;
}

export const IFrame = (props: IFrameProps) => {
    let iframeRef;

    const writeHtml = (frame: any) => {
        if (!frame) {
            return;
        }
        iframeRef = frame;
        let document = frame.contentDocument;
        document.open();
        document.write(props.content);
        document.close();
    }

    return (
        <iframe className="h-100 w-100" src="about:blank" frameBorder="0" ref={writeHtml} />
    )
}