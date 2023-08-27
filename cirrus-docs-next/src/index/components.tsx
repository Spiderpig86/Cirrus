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
                    <h6 className="frame__title">John Doe</h6>
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
            <div className="divider m-0" />
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
            <div className="divider m-0" />
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
                    <div className="u-absolute u-top-0 u-left-0 w-100p h-100p u-flex u-items-center u-justify-center bg-gray-900 u-bg-opacity-50 text-white font-bold text-sm">
                        +5
                    </div>
                    <img
                        src="https://raw.githubusercontent.com/Spiderpig86/Cirrus/gh-pages/cirrus-docs-next/static/img/avatars/15.jpg"
                        alt="avatar"
                    />
                </div>
            </div>
            <button className="btn-info btn--sm w-100p mb-0 bg-blue-500 text-blue-100 font-bold capitalize">
                Buy this course
                <span className="text-blue-200 font-normal">$4.99</span>
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
            <button className="btn-primary mb-0 w-100p btn--sm">Sign In</button>
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
                <div className="text-gray-600 text-sm u-text-ellipsis">Memeing</div>
                <progress className="progress progress--info grid-c-2" value=".95"></progress>
                <div className="text-gray-600 text-sm u-text-ellipsis">Snacking</div>
                <progress className="progress progress--link grid-c-2" value=".85"></progress>
                <div className="text-gray-600 text-sm u-text-ellipsis">Redditing</div>
                <progress className="progress progress--warning grid-c-2" value="1"></progress>
                <div className="text-gray-600 text-sm u-text-ellipsis">Sleeping</div>
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
                    {' '}
                    <div className="u-flex u-justify-space-between u-gap-2 u-items-center">
                        <div className="u-text-left">
                            <p className="m-0 lead font-bold text-black tracking-tight">SuperRepo Go Volt</p>
                            <div className="tag bg-green-200 text-green-600 text-xs font-bold uppercase">In-Stock</div>
                        </div>
                        <p className="lead mb-0 font-bold text-black">$90</p>
                    </div>
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
                        className="h-100p img-cover"
                        src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                    />
                </div>
            </div>
        </div>
    );
};

export const ResponsiveLandingHTML = `<section class="min-h-100p w-100p u-flex u-justify-center u-items-center" style="background: linear-gradient(to top, #141e30, #243b55);">
	<div class="content w-80p">
		<div
			class="u-flex u-flex-column u-items-flex-start u-justify-flex-start u-relative u-flex-row-md u-items-stretch-md">
			<div class="pt-6 mx-auto w-50p-md mx-0-md pb-4-md pr-4-md">
				<h1 class="headline-4 tracking-tighter text-5xl u-text-center text-white u-text-left-md">
					Building the <br>
					<span class="text-indigo-500 font-bold">Creator Economy
              </span>
				</h1>
                <p class="lead mt-4 mb-8 u-text-center text-gray-600 u-text-left-md">
                    We're <b class="text-white">revolutionizing</b>, <b class="text-white">democratizing</b>, <b class="text-white">disrupting</b>, and [insert buzzword here]-ing to empower creatives around the world.
				</p>
				<div class="u-flex u-gap-1 u-flex-column u-justify-center mt-5 u-flex-row-sm mb-8 mt-8-lg">
					<input type="text" id="input-field-top" class="u-flex-grow-1 w-auto min-w-0 px-3 font-semibold text-gray-300 bg-transparent" placeholder="Enter Username">
					<button
					class="btn--sm btn-link mb-0">
					Get Started
				</button>
				</div>
			</div>
			<div
				class="u-relative u-flex u-items-center u-justify-center w-80p mx-auto mt-8 h-80p w-50p-md h-auto-md u-block-md">
				<img src="https://cdn.dribbble.com/users/1722951/screenshots/15954834/media/7eee2181141576534bed5954fc1645f3.png" class="u-left-0 u-z-0 img-cover w-100p h-100p mx-auto u-round-xl mx-0-md w-100p-md u-absolute-md u-top-0-md" alt="image">
				<div class="u-absolute u-top-0 u-right-0 u-overflow-hidden u-shadow-xl u-right-0-md u-round-lg"
					style="height: 8rem; width: 8rem; margin-top: -2.5rem; margin-right: -1.5rem;">
					<img src="https://images.unsplash.com/photo-1489289827069-adf270f4f417?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" class="u-absolute u-z-0 img-cover w-100p h-100p" alt="image">
            </div>
					<div class="u-absolute u-bottom-0 u-z-20 px-4 animated hover-grow u-left-0-md px-0-md"
						style="margin-left: -7rem; margin-bottom: -3rem;">
						<a href="#" target="_blank"
							class="u-flex u-items-stretch u-justify-flex-start u-overflow-hidden bg-gray-900 u-shadow-xl u-round-xl p-0">
							<div class="u-relative u-flex u-items-center u-justify-center"
								style="height: 6rem; width: 7rem;">
								<img src="https://cdn.devdojo.com/images/september2021/graphic-color.jpeg" class="u-absolute u-top-0 u-left-0 u-right-0 u-bottom-0 u-z-0 img-cover w-100p h-100p u-opacity-80" alt="image" style="object-fit: cover; object-position: center;">
                </div>
								<div
									class="u-flex u-flex-column u-items-flex-start u-justify-center px-4 bg-blue-900 text-gray-400 u-shadow-xl">
									<h3 class="text-xl font-bold tracking-tight text-white m-0">
										Partner Brands
									</h3>
									<p class="text-sm m-0">List your products on NFTHub</p>
								</div>
						</a>
					</div>
				</div>
			</div>

			<div class="u-relative u-z-0 u-flex u-items-center u-justify-flex-start py-12 py-0-md">
				<div
					class="u-relative u-none u-block-md u-z-10 w-100p max-w-lg px-8 pt-12 pb-12 mx-auto bg-indigo-500 w-50p-md mx-0-md mt-0-md pt-2-md pb-4-md u-round-md">
					<h3 class="text-xl font-bold text-white mx-0 my-1">
						Built for All Creators
					</h3>
					<div class="u-flex u-items-start u-justify-center w-100p u-gap-2 text-white u-justify-flex-start-md">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32"
							viewBox="0 0 172 172" style=" fill:#000000;">
							<g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
								stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
								font-family="none" font-weight="none" font-size="none" text-anchor="none"
								style="mix-blend-mode: normal">
								<path d="M0,172v-172h172v172z" fill="none"></path>
								<g fill="#ffffff">
									<path
										d="M38.43685,14.33333l-24.10352,33.22982v95.77018h35.83333v21.5h21.5l21.5,-21.5h28.66667l35.83333,-35.83333v-93.16667zM43,28.66667h100.33333v64.5l-21.5,21.5h-35.83333l-21.5,21.5v-21.5h-21.5zM78.83333,50.16667v35.83333h14.33333v-35.83333zM114.66667,50.16667v35.83333h14.33333v-35.83333z">
									</path>
								</g>
							</g>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32"
							viewBox="0 0 172 172" style=" fill:#000000;">
							<g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
								stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
								font-family="none" font-weight="none" font-size="none" text-anchor="none"
								style="mix-blend-mode: normal">
								<path d="M0,172v-172h172v172z" fill="none"></path>
								<g fill="#ffffff">
									<path
										d="M59.125,17.91667c-22.69544,0 -41.20833,18.5129 -41.20833,41.20833v53.75c0,22.69238 18.51225,41.20833 41.20833,41.20833h53.75c22.69303,0 41.20833,-18.51531 41.20833,-41.20833v-53.75c0,-22.69608 -18.51595,-41.20833 -41.20833,-41.20833zM59.125,28.66667h53.75c16.88195,0 30.45833,13.57292 30.45833,30.45833v53.75c0,16.88131 -13.57703,30.45833 -30.45833,30.45833h-53.75c-16.88542,0 -30.45833,-13.57638 -30.45833,-30.45833v-53.75c0,-16.88606 13.57227,-30.45833 30.45833,-30.45833zM121.83333,43c-3.95958,0 -7.16667,3.20708 -7.16667,7.16667c0,3.95958 3.20708,7.16667 7.16667,7.16667c3.95958,0 7.16667,-3.20708 7.16667,-7.16667c0,-3.95958 -3.20708,-7.16667 -7.16667,-7.16667zM86,50.16667c-19.72561,0 -35.83333,16.10772 -35.83333,35.83333c0,19.72561 16.10772,35.83333 35.83333,35.83333c19.72561,0 35.83333,-16.10772 35.83333,-35.83333c0,-19.72561 -16.10772,-35.83333 -35.83333,-35.83333zM86,60.91667c13.91472,0 25.08333,11.16861 25.08333,25.08333c0,13.91472 -11.16861,25.08333 -25.08333,25.08333c-13.91472,0 -25.08333,-11.16861 -25.08333,-25.08333c0,-13.91472 11.16861,-25.08333 25.08333,-25.08333z">
									</path>
								</g>
							</g>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32"
							viewBox="0 0 172 172" style=" fill:#000000;">
							<g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
								stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
								font-family="none" font-weight="none" font-size="none" text-anchor="none"
								style="mix-blend-mode: normal">
								<path d="M0,172v-172h172v172z" fill="none"></path>
								<g fill="#ffffff">
									<path
										d="M154.45063,49.88c-1.37063,-7.56531 -7.90125,-13.07469 -15.48,-14.79469c-11.34125,-2.40531 -32.33063,-4.12531 -55.04,-4.12531c-22.69594,0 -44.02125,1.72 -55.37594,4.12531c-7.56531,1.72 -14.10937,6.88 -15.48,14.79469c-1.38406,8.6 -2.75469,20.64 -2.75469,36.12c0,15.48 1.37063,27.52 3.09063,36.12c1.38406,7.56531 7.91469,13.07469 15.48,14.79469c12.04,2.40531 32.68,4.12531 55.38937,4.12531c22.70938,0 43.34938,-1.72 55.38938,-4.12531c7.56531,-1.72 14.09594,-6.88 15.48,-14.79469c1.37062,-8.6 3.09062,-20.98937 3.44,-36.12c-0.69875,-15.48 -2.41875,-27.52 -4.13875,-36.12zM65.36,110.08v-48.16l41.96531,24.08z">
									</path>
								</g>
							</g>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32"
							viewBox="0 0 172 172" style=" fill:#000000;">
							<g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
								stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
								font-family="none" font-weight="none" font-size="none" text-anchor="none"
								style="mix-blend-mode: normal">
								<path d="M0,172v-172h172v172z" fill="none"></path>
								<g fill="#ffffff">
									<path
										d="M160.53333,39.77213c-5.4868,2.43667 -11.38067,4.0764 -17.56693,4.816c6.31813,-3.784 11.1628,-9.77533 13.44467,-16.91907c-5.90533,3.50307 -12.4528,6.04867 -19.42453,7.42467c-5.57853,-5.94547 -13.52493,-9.66067 -22.31987,-9.66067c-16.8904,0 -30.5816,13.69693 -30.5816,30.5816c0,2.39653 0.2752,4.73573 0.7912,6.966c-25.41587,-1.2728 -47.94787,-13.4504 -63.038,-31.9576c-2.62587,4.51787 -4.13373,9.7696 -4.13373,15.38253c0,10.60667 5.39507,19.9692 13.59947,25.45027c-5.01093,-0.16053 -9.72947,-1.53653 -13.85173,-3.82413c0,0.13187 0,0.25227 0,0.38413c0,14.82067 10.53787,27.18173 24.53293,29.98533c-2.5628,0.69947 -5.26893,1.07213 -8.06107,1.07213c-1.96653,0 -3.8872,-0.19493 -5.75053,-0.54467c3.89293,12.14893 15.1876,20.99547 28.5692,21.242c-10.46333,8.2044 -23.65,13.09493 -37.98333,13.09493c-2.46533,0 -4.902,-0.14333 -7.29853,-0.43c13.5364,8.67453 29.60693,13.73707 46.88147,13.73707c56.25547,0 87.00907,-46.60053 87.00907,-87.0148c0,-1.3244 -0.02867,-2.64307 -0.086,-3.956c5.97987,-4.3172 11.16853,-9.7008 15.26787,-15.82973z">
									</path>
								</g>
							</g>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32"
							viewBox="0 0 172 172" style=" fill:#000000;">
							<g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
								stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
								font-family="none" font-weight="none" font-size="none" text-anchor="none"
								style="mix-blend-mode: normal">
								<path d="M0,172v-172h172v172z" fill="none"></path>
								<g fill="#ffffff">
									<path
										d="M143.19,37.04719c-13.69281,-11.01875 -35.35406,-12.88656 -36.28125,-12.95375c-1.43781,-0.12094 -2.80844,0.68531 -3.39969,2.01563c-0.05375,0.08062 -0.52406,1.16906 -1.04813,2.86219c9.05688,1.53188 20.18313,4.60906 30.24781,10.8575c1.6125,0.99438 2.10969,3.1175 1.11531,4.73c-0.65844,1.06156 -1.77375,1.63938 -2.92938,1.63938c-0.61812,0 -1.24969,-0.17469 -1.81406,-0.52406c-17.3075,-10.73656 -38.915,-11.27406 -43.08063,-11.27406c-4.16562,0 -25.78656,0.5375 -43.08062,11.27406c-1.6125,1.00781 -3.73563,0.51062 -4.73,-1.10188c-1.00781,-1.62594 -0.51063,-3.73562 1.10187,-4.74344c10.06469,-6.235 21.19094,-9.32562 30.24781,-10.84406c-0.52406,-1.70656 -0.99438,-2.78156 -1.03469,-2.87562c-0.60469,-1.33031 -1.96188,-2.16344 -3.41313,-2.01563c-0.92719,0.06719 -22.58844,1.935 -36.46937,13.10156c-7.24281,6.70531 -21.74188,45.88906 -21.74188,79.765c0,0.60469 0.16125,1.1825 0.45688,1.70656c9.9975,17.57625 37.28906,22.17187 43.51062,22.37344c0.02688,0 0.06719,0 0.1075,0c1.10188,0 2.13656,-0.52406 2.78156,-1.41094l6.28875,-8.65375c-16.97156,-4.38063 -25.63875,-11.825 -26.13594,-12.26844c-1.42438,-1.24969 -1.55875,-3.42656 -0.29563,-4.85094c1.24969,-1.42437 3.42656,-1.55875 4.85094,-0.30906c0.20156,0.18812 16.16531,13.73312 47.55531,13.73312c31.44375,0 47.4075,-13.59875 47.56875,-13.73312c1.42438,-1.23625 3.58781,-1.11531 4.85094,0.3225c1.24969,1.42437 1.11531,3.58781 -0.30906,4.8375c-0.49719,0.44344 -9.16438,7.88781 -26.13594,12.26844l6.28875,8.65375c0.645,0.88687 1.67969,1.41094 2.78156,1.41094c0.04031,0 0.08063,0 0.1075,0c6.22156,-0.20156 33.51313,-4.79719 43.51063,-22.37344c0.29562,-0.52406 0.45687,-1.10188 0.45687,-1.70656c0,-33.87594 -14.49906,-73.05969 -21.93,-79.91281zM63.64,103.2c-6.65156,0 -12.04,-6.15437 -12.04,-13.76c0,-7.60562 5.38844,-13.76 12.04,-13.76c6.65156,0 12.04,6.15438 12.04,13.76c0,7.60563 -5.38844,13.76 -12.04,13.76zM108.36,103.2c-6.65156,0 -12.04,-6.15437 -12.04,-13.76c0,-7.60562 5.38844,-13.76 12.04,-13.76c6.65156,0 12.04,6.15438 12.04,13.76c0,7.60563 -5.38844,13.76 -12.04,13.76z">
									</path>
								</g>
							</g>
						</svg>
					</div>
				</div>
			</div>
		</div>
</section>`;
