import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuList: React.FC<any> = (props) => {
    return (
        <div
            className="frame u-text-left"
            style={
                {
                    // maxWidth: '350px',
                }
            }
        >
            <div className="frame__header pb-0">
                <div className="tile level">
                    <div className="tile__icon">
                        <figure className="avatar">
                            <img src="https://crunchbase-production-res.cloudinary.com/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1398292826/a1tq244sp7uqhb5a0utg.png" />
                        </figure>
                    </div>
                    <div className="tile__container">
                        <p className="tile__title m-0">Richard Hendricks.</p>
                        <p className="tile__subtitle m-0">Founder and CEO of Pied Piper.</p>
                    </div>
                </div>
            </div>
            <div className="frame__body">
                <ul className="menu">
                    <li className="divider" />
                    <li className="menu-item selected">
                        <div className="menu-addon right" id="menu-list-addon">
                            <span className="icon">
                                <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                            </span>
                        </div>
                        <a href="#">News Feed</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Messenger</a>
                    </li>
                    <p className="menu-title uppercase">Shortcuts</p>
                    <li className="menu-item">
                        <a href="#">Some App</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export const Card: React.FC<any> = (props) => {
    return (
        <div className="card card--slide-up">
            <div className="card__container">
                <div
                    className="card__image"
                    style={{
                        backgroundImage: 'url(https://unsplash.it/640/480?random&blur)',
                    }}
                ></div>
            </div>
            <div className="card__mobile-title">
                <div className="content">
                    <div className="tile">
                        <div className="tile__container">
                            <p className="tile__title">Kangaroo Valley Safari</p>
                            <p className="tile__subtitle">By John Doe</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card__body content">
                <p>Located two hours south of Sydney in the Southern Highland of New South Wales...</p>
            </div>
            <div className="card__footer content">2 min. read 22 comments</div>
        </div>
    );
};

export const Panel: React.FC<any> = (props) => {
    return (
        <div
            className="tile u-items-center"
            style={{
                boxShadow: '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)',
                padding: '0.25rem 1rem',
            }}
        >
            <div className="tile__icon">
                <figure className="avatar">
                    <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" />
                </figure>
            </div>
            <div className="tile__container u-text-ellipsis">
                <p className="tile__title m-0 u-text-ellipsis">
                    Robert Downey Jr. shared a post from <b>Stark Industries</b>.
                </p>
                <p className="tile__subtitle m-0 u-text-ellipsis">Robert shared: 'Stark Industries is...'</p>
                <span className="info">23 minutes ago</span>
            </div>
            <div className="tile__buttons">
                <button className="btn-primary btn--sm uppercase">View</button>
                <button className="btn--sm uppercase">Dismiss</button>
            </div>
        </div>
    );
};

export const Pagination: React.FC<any> = (props) => {
    return (
        <div className="col-6 pagination">
            <div className="pagination-item short disabled">
                <a className="disabled" href="#">
                    Prev
                </a>
            </div>
            <div className="pagination-item short selected">
                <a href="#">1</a>
            </div>
            <div className="pagination-item short">
                <a href="#">2</a>
            </div>
            <div className="pagination-item short">
                <a href="#">3</a>
            </div>
            <div className="pagination-item short">
                <a href="#">4</a>
            </div>
            <div className="pagination-item short">
                <a>...</a>
            </div>
            <div className="pagination-item short">
                <a href="#">13</a>
            </div>
            <div className="pagination-item short">
                <a href="#">Next</a>
            </div>
        </div>
    );
};

export const Tabs: React.FC<any> = (props) => {
    return (
        <div className="tab-container tabs-depth tabs-fill">
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Group</a>
                </li>
                <li>
                    <a>Shop</a>
                </li>
                <li className="selected">
                    <a>Me</a>
                </li>
            </ul>
        </div>
    );
};

export const Frame: React.FC<any> = (props) => {
    return (
        <div className="frame">
            <div className="frame__header u-text-center">
                <div>
                    <figure className="avatar">
                        <img src="https://orig04.deviantart.net/aded/f/2013/066/c/2/profile_picture_by_naivety_stock-d5x8lbn.jpg" />
                    </figure>
                </div>
                <div>
                    <div className="frame__title">John Doe</div>
                    <div className="frame__subtitle">Freelance Photographer</div>
                </div>
                <div className="row">
                    <a className="col" href="!#">
                        <FontAwesomeIcon className="fa-wrapper small link-btn" icon={['fab', 'facebook']} />
                    </a>
                    <a className="col" href="!#">
                        <FontAwesomeIcon className="fa-wrapper small link-btn" icon={['fab', 'twitter']} />
                    </a>
                    <a className="col" href="!#">
                        <FontAwesomeIcon className="fa-wrapper small link-btn" icon={['fab', 'instagram']} />
                    </a>
                    <a className="col" href="!#">
                        <FontAwesomeIcon className="fa-wrapper small link-btn" icon={['fab', 'medium']} />
                    </a>
                </div>
            </div>
            <div className="content-no-padding">
                <div className="divider m-0" />
            </div>
            <div className="frame__body">
                <div className="content u-text-center">
                    <h5>Lorem! Ipsum!</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <div className="content-no-padding">
                <div className="divider m-0" />
            </div>
            <div className="frame__footer">
                <div className="frame__subtitle u-text-center">
                    <i>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </i>
                </div>
            </div>
        </div>
    );
};
