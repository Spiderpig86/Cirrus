export const PLAYGROUND_ENDPOINT_MAP: Map<string, string> = new Map([
    ['Latest Build', 'https://raw.githack.com/Spiderpig86/Cirrus/master/dist/cirrus.min.css'],
    ['0.6.1', 'https://cdn.jsdelivr.net/npm/cirrus-ui@0.6.1/dist/cirrus.min.css'],
    ['0.6.0', 'https://cdn.jsdelivr.net/npm/cirrus-ui@0.6.0/dist/cirrus.min.css'],
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
<style>
    body {
        background-image: url(https://images.unsplash.com/photo-1524838101135-a71ba219084d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=100);
        background-size: cover;
        background-repeat: no-repeat;
        backdrop-filter: blur(5px);
    }
    .intro-card {
        background-color: rgba(255, 255, 255, 0.9);
        max-width: 80%;
        min-width: 350px
    }
    .logo {
        width: 150px
    }
</style>
<div class="u-flex u-center h-100">
    <div class="intro-card frame px-3 py-4">
        <div class="frame__body">
            <div class="u-flex u-center">
                <img src="https://raw.githubusercontent.com/Spiderpig86/Cirrus/master/img/CirrusLogo.png" class="logo" />
            </div>
            <h3><span></span>Playground<span class="info text-primary uppercase">For Cirrus</span></h3>
            <p>⚡ Learn, explore, and test out the framework right within your browser.</p>
            <p>This editor supports a couple of features including:</p>
            <ul>
                <li>Live code previews.</li>
                <li>Resizable panes, view presets, and editor orientation.</li>
                <li>Previews with older versions of Cirrus to test for compatibility.</li>
            </ul>

            <div class="divider"></div>
            <div class="u-flex u-justify-flex-end">
                <a href="http://cirrus-ui.netlify.app/getting-started/setup" target="_blank">
                    <button class="btn-info outline">Read the Docs</button>
                </a>
            </div>
            <div class="space"></div>
        </div>
    </div>
</div>`;