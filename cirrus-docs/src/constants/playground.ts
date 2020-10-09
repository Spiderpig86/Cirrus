export const PLAYGROUND_VERSIONS: string[] = [
    `0.6.0`,
    `0.5.5`,
    `0.5.4`,
    `0.5.31`,
    `0.5.2`,
    `0.5.1`,
    `0.5.0`,
    `0.4.6`,
    `0.4.5`,
];
export const PLAYGROUND_ENDPOINT_MAP: Map<string, string> = new Map([
    ['0.6.0', 'https://raw.githack.com/Spiderpig86/Cirrus/master/dist/cirrus.min.css'],
    ['0.5.5', 'https://cdn.jsdelivr.net/npm/cirrus-ui@0.5.5/dist/cirrus.min.css'],
    ['0.5.4', 'https://cdn.jsdelivr.net/npm/cirrus-ui@0.5.4/dist/cirrus.min.css'],
    ['0.5.31', 'https://cdn.jsdelivr.net/npm/cirrus-ui@0.5.31/dist/cirrus.min.css'],
    ['0.5.2', 'https://cdn.jsdelivr.net/npm/cirrus-ui@0.5.2/dist/cirrus.min.css'],
    ['0.5.1', 'https://cdn.jsdelivr.net/npm/cirrus-ui@0.5.1/dist/cirrus.min.css'],
    ['0.5.0', 'https://cdn.jsdelivr.net/npm/cirrus-ui@0.5.0/dist/cirrus.min.css'],
    ['0.4.6', 'https://cdn.jsdelivr.net/npm/cirrus-ui@0.4.6/dist/cirrus.min.css'],
    ['0.4.5', 'https://cdn.jsdelivr.net/npm/cirrus-ui@0.4.5/bin/cirrus.min.css'],
]);
export const CIRRUS_PLAYGROUND_KEY = 'cirrus-playground-code';

export const CIRRUS_DEFAULT_PLAYGROUND_CODE = `<!--
    Welcome to Playground!

    This is a space for you to try out some ideas using Cirrus or just to test
    out how the framework works.
    You can rotate this view, save this as a file, or switch versions of Cirrus all
    at the top right corner.

       _______                     
      / ____(_)___________  _______
     / /   / / ___/ ___/ / / / ___/
    / /___/ / /  / /  / /_/ (__  ) 
    \\____/_/_/  /_/   \\__,_/____/  
                           
    Happy coding. :)
-->

<div class="u-flex u-center h-100">
    <button class="btn-info">Click Me</button>
</div>`;