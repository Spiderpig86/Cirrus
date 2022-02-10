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

export const FancyBuyCard: React.FC<any> = (props) => {
    return (
        <div className="bg-white u-round-sm u-shadow-sm p-3 text-center">
            <p className="text-gray-600 uppercase font-bold text-xs">Purchased by 10 of your friends</p>
            <div className="avatar-container u-flex u-justify-center u-items-center mb-2">
                {[11, 12, 13, 14].map((img) => (
                    <div
                        className="avatar avatar--sm"
                        style={{
                            background: 'transparent',
                            border: '2px solid #fff',
                            margin: '0 -4px',
                        }}
                    >
                        <img
                            src={`https://raw.githubusercontent.com/Spiderpig86/Cirrus/gh-pages/cirrus-docs-next/static/img/avatars/${img}.jpg`}
                            alt="avatar"
                        />
                    </div>
                ))}
                <div
                    className="avatar avatar--sm u-relative"
                    style={{
                        background: 'transparent',
                        border: '2px solid #fff',
                        margin: '0 -4px',
                    }}
                >
                    <div className="u-absolute u-top-0 u-left-0 w-100 h-100 u-flex u-items-center u-justify-center bg-gray-900 u-bg-opacity-50 text-white font-bold text-sm">
                        +5
                    </div>
                    <img
                        src="https://raw.githubusercontent.com/Spiderpig86/Cirrus/gh-pages/cirrus-docs-next/static/img/avatars/15.jpg"
                        alt="avatar"
                    />
                </div>
            </div>
            <button className="btn-link btn--sm w-100 mb-0 bg-indigo-500 text-indigo-100 font-bold capitalize">
                Buy this course
                <span className="text-indigo-200 font-normal">$4.99</span>
            </button>
        </div>
    );
};

export const LoginCard: React.FC<any> = (props) => {
    return (
        <div className="bg-black u-round-sm u-shadow-sm p-3 u-text-center">
            <h6 className="text-white tracking-tight my-0">Sign in to Cirrus</h6>
            <p className="text-gray-600 text-sm">Enter your username and password.</p>
            <div className="u-text-left text-white mb-2">
                <div className="input-control">
                    <input
                        type="email"
                        className="input-contains-icon bg-gray-900 text-white"
                        placeholder="Email"
                        style={{
                            border: '1px solid transparent !important',
                        }}
                    />
                    <span className="icon">
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                    </span>
                </div>
                <div className="input-control">
                    <input
                        type="password"
                        className="input-contains-icon bg-gray-900 text-white"
                        placeholder="Password"
                        style={{
                            border: '1px solid transparent !important',
                        }}
                    />
                    <span className="icon">
                        <FontAwesomeIcon icon={['fas', 'lock']} />
                    </span>
                </div>
                <div className="form-ext-control form-ext-checkbox">
                    <input id="check2" className="form-ext-input" type="checkbox" defaultChecked />
                    <label className="form-ext-label text-sm" htmlFor="check2">
                        Remember me
                    </label>
                </div>
            </div>
            <button className="btn-primary mb-0 w-100 btn--sm">Sign In</button>
        </div>
    );
};

export const PersonCard: React.FC<any> = (props) => {
    return (
        <div className="bg-gray u-round-sm u-shadow-sm p-3 u-text-center">
            <div className="u-flex u-gap-2 u-center">
                <div className="avatar">
                    <img src="https://raw.githubusercontent.com/Spiderpig86/Cirrus/gh-pages/cirrus-docs-next/static/img/avatars/12.jpg" />
                </div>
                <div className="u-text-left">
                    <div className="m-0 font-bold text-lg font-primary tracking-tight">Robbie Roger</div>
                    <div className="m-0 font-normal text-gray-600 text-xs">Software Engineer at Reddit</div>
                </div>
            </div>
            <div className="divider my-2 text-sm" data-content="Stats"></div>

            <div className="grid grid-cols-3 u-items-center u-text-left">
                <div className="text-gray-600 text-sm">Memeing</div>
                <progress className="progress progress--info grid-c-2" value=".95"></progress>
                <div className="text-gray-600 text-sm">Snacking</div>
                <progress className="progress progress--link grid-c-2" value=".85"></progress>
                <div className="text-gray-600 text-sm">Redditing</div>
                <progress className="progress progress--warning grid-c-2" value="1"></progress>
                <div className="text-gray-600 text-sm">Sleeping</div>
                <progress className="progress progress--danger grid-c-2" value=".75"></progress>
            </div>
        </div>
    );
};

export const ECommerceCard: React.FC<any> = (props) => {
    return (
        <div className="bg-white u-round-sm u-shadow-lg u-overflow-hidden">
            <div className="u-flex">
                <div className="p-3">
                    <p className="m-0 lead font-bold text-black tracking-tight">SuperRepo Go Volt</p>
                    <div className="tag bg-green-200 text-green-600 text-xs font-bold uppercase">In-Stock</div>
                    <div className="u-flex u-gap-1 mt-2">
                        <a
                            href="#"
                            className="size bg-gray-100 text-gray-800 text-xs u-round-sm font-bold u-flex u-items-center u-justify-center"
                            style={{
                                height: '2rem',
                                width: '2rem',
                            }}
                        >
                            7
                        </a>
                        <a
                            href="#"
                            className="size bg-gray-100 text-gray-800 text-xs u-round-sm font-bold u-flex u-items-center u-justify-center"
                            style={{
                                height: '2rem',
                                width: '2rem',
                            }}
                        >
                            8
                        </a>
                        <a
                            href="#"
                            className="size bg-gray-100 text-gray-800 text-xs u-round-sm font-bold u-flex u-items-center u-justify-center"
                            style={{
                                height: '2rem',
                                width: '2rem',
                            }}
                        >
                            9
                        </a>
                        <a
                            href="#"
                            className="size bg-gray-100 text-gray-800 text-xs u-round-sm font-bold u-flex u-items-center u-justify-center"
                            style={{
                                height: '2rem',
                                width: '2rem',
                            }}
                        >
                            10
                        </a>
                        <a
                            href="#"
                            className="size bg-black text-white text-xs u-round-sm font-bold u-flex u-items-center u-justify-center"
                            style={{
                                height: '2rem',
                                width: '2rem',
                            }}
                        >
                            11
                        </a>
                        <a
                            href="#"
                            className="size bg-gray-100 text-gray-800 text-xs u-round-sm font-bold u-flex u-items-center u-justify-center"
                            style={{
                                height: '2rem',
                                width: '2rem',
                            }}
                        >
                            12
                        </a>
                    </div>
                    <div className="divider" />
                    <div className="u-flex u-gap-1">
                        <button className="btn-black btn--sm mb-0 u-shadow-sm">Buy Now</button>
                        <button className="bg-white btn--sm mb-0">Add to Cart</button>
                        <button className="bg-white btn--sm mb-0">♥</button>
                    </div>
                    <p className="mb-0 mt-2 text-sm tracking-tight text-gray-600">Free shipping on orders over $25.</p>
                </div>
                <div>
                    <img
                        className="h-100 img-cover"
                        src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                    />
                </div>
            </div>
        </div>
    );
};
