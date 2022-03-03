import React, { memo, useRef, useState } from 'react';

export interface IFrameProps {
    content: string;
}

let iframeSrc = ``;

/**
 * Custom iframe created for playground.
 * Memo is used to prevent re-rendering when screen size changes.
 */
export const IFrame = memo((props: IFrameProps) => {
    const [initialized, setInitialized] = useState(false);
    const frameRef = useRef<any>();

    // Initially set frame with props content, useEffect runs too late for srcDoc attr
    if (!initialized) {
        iframeSrc = props.content;
        setInitialized(true);
    }

    const writeHtml = (frame: any) => {
        if (!frame) {
            return;
        }
        frameRef.current = frame;
        let document = frame.contentDocument.body;
        document.innerHTML = props.content;
    };

    return <iframe className="w-100 h-100" style={{ border: '0' }} srcDoc={iframeSrc} frameBorder="0" ref={writeHtml} />;
});
