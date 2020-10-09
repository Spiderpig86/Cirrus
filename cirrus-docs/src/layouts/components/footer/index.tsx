import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

export const Footer: React.FC<any> = () => {
    return (
        <footer className="footer bg-gray-200 px-2">
            <h6 className="footer__title uppercase">Cirrus</h6>
            <p className="subtitle">
                The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
                website content is licensed{' '}
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY-NC-SA 4.0
                </a>
                .
            </p>
            <p>
                Made with {' '}
                <FontAwesomeIcon className="fa-wrapper fa-heart animated pulse text-red-500" icon={['fas', 'heart']} /> by{' '}
                <a href="http://stanleylim.me" target="_blank">
                    Stanley Lim
                </a>
            </p>
        </footer>
    );
};
