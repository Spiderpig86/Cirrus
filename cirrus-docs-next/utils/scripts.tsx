import { useEffect } from 'react';

export const loadScript = (url: string, target: HTMLElement) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.async = false;
        script.setAttribute('type', 'text/javascript');
        script.src = url;
        target.appendChild(script);
        script.addEventListener('load', resolve, {
            once: true,
        });
    });
};

export const loadScripts = (urls: string[], callback: () => any, dependencies: any[]) => {
    useEffect(() => {
        const head = document.head;
        Promise.all(urls.map((url) => loadScript(url, head))).then(callback);
    }, dependencies);
};
