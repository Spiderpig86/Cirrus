import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Pagination } from '../../../layouts/components/pagination';
import { TableWrapper } from '../../../layouts/components/table-wrapper';

export const BrowserSupportPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section id="support" className="padtop">
                    <div className="content">
                        <Headline title="Browser Support" link="#support" />
                        <div className="divider"></div>
                        <p>
                            As of this latest release, Cirrus has launched many new features that may not be compatible
                            with all browsers, especially older ones.
                        </p>
                        <p>
                            For instance, Cirrus no longer uses <b>vendor prefixes</b> in styles that are known to have
                            some compatibility issues except for a few parts. Cirrus also supports new features such as{' '}
                            <b>CSS grid</b>, <b>object fit</b>, and <b>sticky positioning</b> which is not yet supported
                            on all browsers.
                        </p>

                        <p>
                            In short, Cirrus supports all the latest supported browsers with <b>only</b> partial support
                            for Internet Explorer. <i>Take it from me, I wouldn't advise using that browser anymore.</i>
                        </p>

                        <TableWrapper>
                            <table className="table bordered">
                                <thead>
                                    <tr>
                                        <th colSpan={6}>Supported Browsers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="http://godban.github.io/browsers-support-badges/">
                                                <img
                                                    src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png"
                                                    alt="Edge"
                                                    width="24px"
                                                    height="24px"
                                                />
                                            </a>
                                            <br />
                                            Edge
                                        </td>
                                        <td>
                                            <a href="http://godban.github.io/browsers-support-badges/">
                                                <img
                                                    src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png"
                                                    alt="Firefox"
                                                    width="24px"
                                                    height="24px"
                                                />
                                            </a>
                                            <br />
                                            Firefox
                                        </td>
                                        <td>
                                            <a href="http://godban.github.io/browsers-support-badges/">
                                                <img
                                                    src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png"
                                                    alt="Chrome"
                                                    width="24px"
                                                    height="24px"
                                                />
                                            </a>
                                            <br />
                                            Chrome
                                        </td>
                                        <td>
                                            <a href="http://godban.github.io/browsers-support-badges/">
                                                <img
                                                    src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png"
                                                    alt="Safari"
                                                    width="24px"
                                                    height="24px"
                                                />
                                            </a>
                                            <br />
                                            Safari
                                        </td>
                                        <td>
                                            <a href="http://godban.github.io/browsers-support-badges/">
                                                <img
                                                    src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png"
                                                    alt="Opera"
                                                    width="24px"
                                                    height="24px"
                                                />
                                            </a>
                                            <br />
                                            Opera
                                        </td>
                                        <td>
                                            <a href="http://godban.github.io/browsers-support-badges/">
                                                <img
                                                    src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png"
                                                    alt="Electron"
                                                    width="24px"
                                                    height="24px"
                                                />
                                            </a>
                                            <br />
                                            Electron
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>latest version</td>
                                        <td>last 3 versions, ESR</td>
                                        <td>last 3 versions</td>
                                        <td>last 3 versions</td>
                                        <td>last 3 versions</td>
                                        <td>last 3 versions</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableWrapper>
                    </div>
                </section>

                <section id="oldbrowsers" className="padtop">
                    <div className="content">
                        <Headline title="Working with Older Browsers" link="#oldbrowsers" />
                        <div className="divider"></div>
                        <p>
                            As stated above, there is partial support for older browsers such as Internet Explorer or
                            even older versions of modern browsers today. There have been no official tests for any old
                            browsers to see what functionality works, but there is a handy place to see{' '}
                            <a className="u u-LR" href="https://caniuse.com/" target="_blank">
                                what features are supported
                            </a>{' '}
                            for which browser versions.
                        </p>
                        <p>As an example, flexbox can be emulated by using clearfix and floats.</p>

                        <CodeBlock
                            code={`<div class="u-clearfix">
    <div class="w-50 u-pull-left">test</div>
    <div class="w-50 u-pull-left">test</div>
    <div class="w-50 u-pull-left">test</div>
    ...
</div>`}
                            language={'htmlbars'}
                        />

                        <p>There are many other classes that may be supported as well. Explore as you see fit.</p>
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Setup',
                        link: './setup',
                    }}
                    nextLink={{
                        name: 'Examples',
                        link: './examples',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
