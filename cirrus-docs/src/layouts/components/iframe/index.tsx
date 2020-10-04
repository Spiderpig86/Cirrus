import React, { memo, useRef, useState } from 'react';

export interface IFrameProps {
    content: string;
}

let iframeSrc = `
<link href="https://raw.githack.com/Spiderpig86/Cirrus/master/dist/cirrus.min.css" rel="stylesheet" />
<body></body>
`;

export const IFrame = memo((props: IFrameProps) => {
    const [initialized, setInitialized] = useState(false);

    // Initially set frame with props content, useEffect runs too late for srcDoc attr
    if (!initialized) {
        iframeSrc = `
        <link href="https://raw.githack.com/Spiderpig86/Cirrus/master/dist/cirrus.min.css" rel="stylesheet" />
        <body>${props.content}</body>
        `;
        setInitialized(true);
    }
    const frameRef = useRef<any>();


    const writeHtml = (frame: any) => {
        if (!frame) {
            return;
        }
        frameRef.current = frame;
        let document = frame.contentDocument.body;
        document.innerHTML = props.content;
    };

    return <iframe className="h-100 w-100" srcDoc={iframeSrc} frameBorder="0" ref={writeHtml} />;
});
