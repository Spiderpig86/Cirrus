import React from 'react';
import Link from 'next/link';
import { v2 } from '../fundamentals/colors/color-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ColorSquare = (props: any) => (
    <div
        className={`mr-2 mb-2 ${props.className}`}
        style={{
            borderRadius: '.25rem',
            height: '4rem',
            width: '4rem',
        }}
    ></div>
);

export const Preview: React.FC<any> = (props) => {
    return (
        <div className="preview">
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                crossOrigin="anonymous"
            ></link>
            <section id="colors" className="padtop">
                <div className="content">
                    <div className="u-text-center content">
                        <h5 className="uppercase">Colors</h5>
                        <p className="lead">
                            Choose from a number of vibrant colors from Cirrus's palette to make your website <b>pop</b>
                            .
                        </p>
                    </div>

                    {['red', 'yellow', 'green', 'blue', 'purple'].map((color) => {
                        return (
                            <div className="row u-justify-center" key={color}>
                                {v2.get(color).map((className, index) => (
                                    <ColorSquare key={color + className.class + index} className={className.class} />
                                ))}
                            </div>
                        );
                    })}

                    <div className="u-text-center mt-2">
                        <Link href="/fundamentals/colors">
                            <button className="btn-link outline">
                                View All Colors
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'chevron-circle-right']} />
                                </span>
                            </button>
                        </Link>
                    </div>
                    <div className="space xlarge" />
                    <div className="divider" />
                </div>
            </section>
            <section id="typography" className="padtop">
                <div className="content">
                    <div className="u-text-center content">
                        <h5 className="uppercase">Typography</h5>
                        <p className="lead">
                            Cirrus primarily uses{' '}
                            <a className="u u-LR" href="#">
                                Montserrat
                            </a>{' '}
                            and{' '}
                            <a className="u u-LR" href="#">
                                Nunito Sans
                            </a>{' '}
                            as its core font choices with easy customization through its modifiers.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col frame">
                            <div className="frame__header" />
                            <div className="frame__body">
                                <h1 className="title headline-1">Aa</h1>
                                <h4 className="subtitle font-normal">Montserrat</h4>
                                <div className="space" />
                                <div className="row">
                                    <div className="col-4">
                                        <h6 className="title font-normal">Normal</h6>
                                        <h2 className="subtitle font-normal">AaBbCcDd</h2>
                                    </div>
                                    <div className="col-4">
                                        <h6 className="title font-bold">Bold</h6>
                                        <h2 className="subtitle font-bold">AaBbCcDd</h2>
                                    </div>
                                    <div className="col-4">
                                        <h6 className="title font-light">Numbers (Light)</h6>
                                        <h2 className="subtitle font-light">0123456789</h2>
                                    </div>
                                </div>
                                <p className="font-bold">Used in:</p>
                                <div className="tags">
                                    <span className="tag tag--info text-light">h1</span>
                                    <span className="tag tag--info text-light">h2</span>
                                    <span className="tag tag--info text-light">h3</span>
                                    <span className="tag tag--info text-light">h4</span>
                                    <span className="tag tag--info text-light">h5</span>
                                    <span className="tag tag--info text-light">h6</span>
                                </div>
                            </div>
                            <div className="frame__footer" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col frame">
                            <div className="frame__header" />
                            <div className="frame__body">
                                <h1 className="font-alt title headline-1 font-light">Aa</h1>
                                <h4 className="font-alt subtitle font-normal">Nunito Sans</h4>
                                <div className="space" />
                                <div className="row">
                                    <div className="col-6">
                                        <h6 className="font-alt title font-light">Light</h6>
                                        <h2 className="font-alt subtitle font-light">AaBbCcDd</h2>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="font-alt title font-normal">Normal</h6>
                                        <h2 className="font-alt subtitle font-normal">AaBbCcDd</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <h6 className="font-alt title font-bold">Bold</h6>
                                        <h2 className="font-alt subtitle font-bold">AaBbCcDd</h2>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="font-alt title font-light">Numbers (Light)</h6>
                                        <h2 className="font-alt subtitle font-light">0123456789</h2>
                                    </div>
                                </div>
                                <p className="font-bold">Used in:</p>
                                <div className="tags">
                                    <span className="tag tag--info text-light">p</span>
                                    <span className="tag tag--info text-light">label</span>
                                    <span className="tag tag--info text-light">span</span>
                                    <span className="tag tag--info text-light">blockquote</span>
                                    <span className="tag tag--info text-light">code</span>
                                    <span className="tag tag--info text-light">article</span>
                                </div>
                            </div>
                            <div className="frame__footer" />
                        </div>
                    </div>
                    <div className="space xlarge" />
                    <h3 className="font-alt font-normal u-text-center">Headings</h3>
                    <h6 className="uppercase">Standard headings:</h6>
                    <h1>
                        H1 Heading{' '}
                        <span className="tag tag--success text-light">H1</span>
                        <span className="desc uppercase">3rem (48px)</span>
                    </h1>
                    <div className="divider" />
                    <h2>
                        H2 Heading{' '}
                        <span className="tag tag--success text-light">H2</span>
                        <span className="desc uppercase">2.5rem (40px)</span>
                    </h2>
                    <div className="divider" />
                    <h3>
                        H3 Heading{' '}
                        <span className="tag tag--success text-light">H3</span>
                        <span className="desc uppercase">2rem (32px)</span>
                    </h3>
                    <div className="divider" />
                    <h4>
                        H4 Heading{' '}
                        <span className="tag tag--success text-light">H4</span>
                        <span className="desc uppercase">1.75rem (28px)</span>
                    </h4>
                    <div className="divider" />
                    <h5>
                        H5 Heading{' '}
                        <span className="tag tag--success text-light">H5</span>
                        <span className="desc uppercase">1.5rem (24px)</span>
                    </h5>
                    <div className="divider" />
                    <h6>
                        H6 Heading{' '}
                        <span className="tag tag--success text-light">H6</span>
                        <span className="desc uppercase">1.25rem (20px)</span>
                    </h6>
                    <div className="divider" />
                    <p className="lead font-alt font-bold">Title</p>
                    <p className="lead">
                        This lead text is slightly larger than paragraph to capture the attention of users. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <p>This is a regular paragraph.</p>
                    <div className="space" />
                    <p className="lead">Blockquotes</p>
                    <blockquote>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem.
                        <br /> -<em>John Doe</em>
                    </blockquote>
                    <div className="space xlarge" />
                    <div className="divider" />
                </div>
            </section>
            <section id="layouts" className="padtop">
                <div className="content">
                    <div className="u-text-center content">
                        <h5 className="uppercase">Layouts</h5>
                        <p className="lead">
                            Cirrus makes creating layouts easy with <b>flexbox</b> and <b>grid</b> support.
                        </p>
                    </div>
                    <div className="space xlarge" />
                    <p className="title">Flexbox</p>
                    <div id="grids">
                        <div className="row">
                            <div className="col-12 uppercase">
                                <div className="uppercase">Col-12</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 uppercase">
                                <div className="uppercase">Col-6</div>
                            </div>
                            <div className="col-6 uppercase">
                                <div className="uppercase">Col-6</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 uppercase">
                                <div className="uppercase">Col-3</div>
                            </div>
                            <div className="col-9 uppercase">
                                <div className="uppercase">Col-9</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 uppercase">
                                <div className="uppercase">Col-2</div>
                            </div>
                            <div className="col-10 uppercase">
                                <div className="uppercase">Col-10</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 uppercase">
                                <div className="uppercase">Col-1</div>
                            </div>
                            <div className="col-11 uppercase">
                                <div className="uppercase">Col-11</div>
                            </div>
                        </div>
                    </div>
                    <p className="title">Grid</p>
                    <div className="r">
                        <div className="grid grid-gap-3 u-text-center">
                            <div
                                className="grid-c-12"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Header</b>
                                </p>
                            </div>
                            <div
                                className="grid-c-4 grid-r-6"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Sidebar</b>
                                </p>
                            </div>
                            <div
                                className="grid-c-8 grid-r-3"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Main Content</b>
                                </p>
                            </div>
                            <div
                                className="grid-c-4 grid-r-3"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Sub Content</b>
                                </p>
                            </div>
                            <div
                                className="grid-c-4 grid-r-3"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Sub Content</b>
                                </p>
                            </div>
                            <div
                                className="grid-c-12"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Footer</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space xlarge" />
                    <div className="divider" />
                </div>
            </section>
            <section id="buttons" className="padtop">
                <div className="content">
                    <div className="u-text-center content">
                        <h5 className="uppercase">Buttons</h5>
                        <p className="lead">Reimagined buttons with different themes, shapes, and ways to customize.</p>
                    </div>
                    <p className="title">Colors</p>
                    <div className="row">
                        <div className="mx-1">
                            <button className="btn">Plain</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-primary">Primary</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-transparent">Transparent</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-light">Light</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-dark">Dark</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-black">Black</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-info">Info</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-link">Link</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-success">Success</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-warning">Warning</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-danger">Danger</button>
                        </div>
                    </div>
                    <p className="title">Outline</p>
                    <div className="row">
                        <div className="mx-1">
                            <button className="btn outline">Plain</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-primary outline">Primary</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-transparent outline">Transparent</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-light outline">Light</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-dark outline">Dark</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-black outline">Black</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-info outline">Info</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-link outline">Link</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-success outline">Success</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-warning outline">Warning</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-danger outline">Danger</button>
                        </div>
                    </div>
                    <p className="title">Shapes</p>
                    <div className="row">
                        <div className="mx-1">
                            <button className="btn">Default</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn btn--pilled">Pilled</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn btn--circle">Circle</button>
                        </div>
                    </div>
                    <p className="title">With Glyphs</p>
                    <div className="row">
                        <div className="mx-1">
                            <button className="btn-info">
                                See More
                                <FontAwesomeIcon className="fa-wrapper pl-1" icon={['fas', 'chevron-right']} />
                            </button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-info">
                                <FontAwesomeIcon className="fa-wrapper pr-1" icon={['fas', 'chevron-left']} />
                                See More
                            </button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-info btn--circle">
                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'comment']} />
                            </button>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="row">
                        <div className="mx-1">
                            <button className="btn-link btn--xs">XSmall</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-link btn--sm">Small</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-link">Normal</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-link btn--lg">Large</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-link btn--xl">Extra Large</button>
                        </div>
                    </div>
                    <p className="title">States</p>
                    <div className="row">
                        <div className="mx-1">
                            <button className="btn-primary" disabled>
                                Disabled
                            </button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-primary">Normal</button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-primary hover" id="btnHover">
                                Hovered
                            </button>
                        </div>
                        <div className="mx-1">
                            <button className="btn-primary focus" id="btnFocus">
                                Focused
                            </button>
                        </div>
                    </div>
                    <div className="space xlarge" />
                    <div className="divider" />
                </div>
            </section>
            <section id="forms" className="padtop">
                <div className="content">
                    <div className="u-text-center content">
                        <h5 className="uppercase">Forms</h5>
                        <p className="lead">
                            Dozens of beautifully styled form controls for making development a breeze. Keep things
                            simple with default controls or jazz it up with styled inputs.
                        </p>
                    </div>
                    <div className="frame mb-3">
                        <div className="frame__header">
                            <h6 className="frame__title m-0">Inputs</h6>
                        </div>
                        <div className="frame__body">
                            <div className="form-section">
                                <label>Regular Input</label>
                                <input type="text" placeholder="Type here..." />
                            </div>
                            <div className="divider" />
                            <div className="form-section">
                                <label>Success</label>
                                <input className="input-success" type="text" placeholder="Wooooo" />
                                <span className="fg-success info">You did it!</span>
                            </div>
                            <div className="form-section">
                                <label>Error</label>
                                <input className="input-error" type="text" placeholder="Darn" />
                                <span className="fg-danger info">Try again.</span>
                            </div>
                            <div className="form-section">
                                <label>Disabled</label>
                                <input disabled type="text" placeholder="Can't touch me." />
                                <span className="info">Unless you inspect element.</span>
                            </div>
                            <div className="divider" />
                            <div className="form-section">
                                <label>Left Glyph</label>
                                <div className="input-control">
                                    <input type="email" className="input-contains-icon" placeholder="Left glyph" />
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'layer-group']} />
                                    </span>
                                </div>
                            </div>
                            <div className="form-section">
                                <label>Right Glyph</label>
                                <div className="input-control">
                                    <input
                                        type="email"
                                        className="input-contains-icon-right"
                                        placeholder="Right glyph"
                                    />
                                    <span className="icon icon-right">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'poop']} />
                                    </span>
                                </div>
                            </div>
                            <div className="form-section">
                                <label>Left and Right Glyphs</label>
                                <div className="input-control">
                                    <input
                                        type="email"
                                        className="input-contains-icon input-contains-icon-right"
                                        placeholder="Left and right glyphs"
                                    />
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'layer-group']} />
                                    </span>
                                    <span className="icon icon-right">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'poop']} />
                                    </span>
                                </div>
                            </div>
                            <div className="space" />
                        </div>
                        <div className="frame__footer" />
                    </div>
                    <div className="frame mb-3">
                        <div className="frame__header">
                            <h6 className="frame__title m-0">Checkboxes</h6>
                        </div>
                        <div className="frame__body">
                            <div className="form-ext-control form-ext-checkbox">
                                <input id="check1" className="form-ext-input" type="checkbox" />
                                <label className="form-ext-label" htmlFor="check1">
                                    Unchecked
                                </label>
                            </div>
                            <div className="form-ext-control form-ext-checkbox">
                                <input id="check2" className="form-ext-input" type="checkbox" defaultChecked />
                                <label className="form-ext-label" htmlFor="check2">
                                    Checked
                                </label>
                            </div>
                            <div className="divider" />
                            <div className="form-ext-control form-ext-checkbox">
                                <input id="check3" className="form-ext-input" type="checkbox" disabled />
                                <label className="form-ext-label" htmlFor="check3">
                                    Unchecked
                                </label>
                            </div>
                            <div className="form-ext-control form-ext-checkbox">
                                <input id="check4" className="form-ext-input" type="checkbox" defaultChecked disabled />
                                <label className="form-ext-label" htmlFor="check4">
                                    Checked
                                </label>
                            </div>
                            <div className="divider" />
                            <div className="form-ext-control form-ext-checkbox">
                                <input
                                    id="check5"
                                    className="form-ext-input form-ext-input--success"
                                    type="checkbox"
                                    defaultChecked
                                />
                                <label className="form-ext-label" htmlFor="check5">
                                    Success
                                </label>
                            </div>
                            <div className="form-ext-control form-ext-checkbox">
                                <input
                                    id="check6"
                                    className="form-ext-input form-ext-input--error"
                                    type="checkbox"
                                    defaultChecked
                                />
                                <label className="form-ext-label" htmlFor="check6">
                                    Error
                                </label>
                            </div>
                        </div>
                        <div className="frame__footer"></div>
                    </div>
                    <div className="frame mb-3">
                        <div className="frame__header">
                            <h6 className="frame__title">Radio Buttons</h6>
                        </div>
                        <div className="frame__body">
                            <div className="form-ext-control form-ext-radio">
                                <input id="radio-1a" name="customRadio1" className="form-ext-input" type="radio" />
                                <label className="form-ext-label" htmlFor="radio-1a">
                                    Unselected
                                </label>
                            </div>
                            <div className="form-ext-control form-ext-radio">
                                <input
                                    id="radio-2a"
                                    name="customRadio1"
                                    className="form-ext-input"
                                    type="radio"
                                    defaultChecked
                                />
                                <label className="form-ext-label" htmlFor="radio-2a">
                                    Selected
                                </label>
                            </div>
                            <div className="form-ext-control form-ext-radio">
                                <input id="radio-3a" name="customRadio1" className="form-ext-input" type="radio" />
                                <label className="form-ext-label" htmlFor="radio-3a">
                                    Unselected
                                </label>
                            </div>
                            <div className="divider" />
                            <div className="form-ext-control form-ext-radio">
                                <input
                                    id="radio-1b"
                                    name="customRadio2"
                                    className="form-ext-input"
                                    type="radio"
                                    disabled
                                />
                                <label className="form-ext-label" htmlFor="radio-1b">
                                    Unselected
                                </label>
                            </div>
                            <div className="form-ext-control form-ext-radio">
                                <input
                                    id="radio-2b"
                                    name="customRadio2"
                                    className="form-ext-input"
                                    type="radio"
                                    defaultChecked
                                    disabled
                                />
                                <label className="form-ext-label" htmlFor="radio-2b">
                                    Selected
                                </label>
                            </div>
                            <div className="form-ext-control form-ext-radio">
                                <input
                                    id="radio-3b"
                                    name="customRadio2"
                                    className="form-ext-input"
                                    type="radio"
                                    disabled
                                />
                                <label className="form-ext-label" htmlFor="radio-3b">
                                    Unselected
                                </label>
                            </div>
                            <div className="divider" />
                            <div className="form-ext-control form-ext-radio">
                                <input
                                    id="radio-1c"
                                    name="customRadio3"
                                    className="form-ext-input form-ext-input--success"
                                    type="radio"
                                    defaultChecked
                                />
                                <label className="form-ext-label" htmlFor="radio-1c">
                                    Sucess
                                </label>
                            </div>
                            <div className="form-ext-control form-ext-radio">
                                <input
                                    id="radio-2c"
                                    name="customRadio3"
                                    className="form-ext-input form-ext-input--error"
                                    type="radio"
                                />
                                <label className="form-ext-label" htmlFor="radio-2c">
                                    Error
                                </label>
                            </div>
                        </div>
                        <div className="frame__footer" />
                    </div>
                    <div className="frame mb-3">
                        <div className="frame__header">
                            <h6 className="frame__title">Toggles</h6>
                        </div>
                        <div className="frame__body">
                            <div className="form-ext-control">
                                <label className="form-ext-toggle__label">
                                    <span>Toggle off</span>
                                    <div className="form-ext-toggle">
                                        <input name="toggleCheckbox" type="checkbox" className="form-ext-input" />
                                        <div className="form-ext-toggle__toggler">
                                            <i />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="form-ext-control">
                                <label className="form-ext-toggle__label">
                                    <span>Toggle on</span>
                                    <div className="form-ext-toggle">
                                        <input
                                            name="toggleCheckbox"
                                            type="checkbox"
                                            className="form-ext-input"
                                            defaultChecked
                                        />
                                        <div className="form-ext-toggle__toggler">
                                            <i />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="divider" />
                            <div className="form-ext-control">
                                <label className="form-ext-toggle__label">
                                    <span>Toggle off disabled</span>
                                    <div className="form-ext-toggle">
                                        <input
                                            name="toggleCheckbox"
                                            type="checkbox"
                                            className="form-ext-input"
                                            disabled
                                        />
                                        <div className="form-ext-toggle__toggler">
                                            <i />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="form-ext-control">
                                <label className="form-ext-toggle__label">
                                    <span>Toggle on disabled</span>
                                    <div className="form-ext-toggle">
                                        <input
                                            name="toggleCheckbox"
                                            type="checkbox"
                                            className="form-ext-input"
                                            defaultChecked
                                            disabled
                                        />
                                        <div className="form-ext-toggle__toggler">
                                            <i />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="divider" />
                            <div className="form-ext-control">
                                <label className="form-ext-toggle__label">
                                    <span>Toggle success</span>
                                    <div className="form-ext-toggle form-ext-toggle--success">
                                        <input name="toggleCheckbox" type="checkbox" className="form-ext-input" />
                                        <div className="form-ext-toggle__toggler">
                                            <i />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="form-ext-control">
                                <label className="form-ext-toggle__label">
                                    <span>Toggle error</span>
                                    <div className="form-ext-toggle form-ext-toggle--error">
                                        <input
                                            name="toggleCheckbox"
                                            type="checkbox"
                                            className="form-ext-input"
                                            defaultChecked
                                        />
                                        <div className="form-ext-toggle__toggler">
                                            <i />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="divider" />
                            <div className="form-ext-control">
                                <label className="form-ext-toggle__label">
                                    <span>Toggle success</span>
                                    <div className="form-ext-toggle form-ext-toggle--success">
                                        <input name="toggleCheckbox" type="checkbox" className="form-ext-input" />
                                        <div className="form-ext-toggle__toggler">
                                            <i className="fa" data-check-icon="" data-uncheck-icon="" />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="form-ext-control">
                                <label className="form-ext-toggle__label">
                                    <span>Toggle error</span>
                                    <div className="form-ext-toggle form-ext-toggle--error">
                                        <input
                                            name="toggleCheckbox"
                                            type="checkbox"
                                            className="form-ext-input"
                                            defaultChecked
                                        />
                                        <div className="form-ext-toggle__toggler">
                                            <i className="fa" data-check-icon="" data-uncheck-icon="" />
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="frame__footer" />
                    </div>
                    <div className="frame mb-3">
                        <div className="frame__header">
                            <h6 className="frame__title">Pilled</h6>
                        </div>
                        <div className="frame__body">
                            <div className="form-section">
                                <label>Regular Input</label>
                                <input type="text" placeholder="Type here..." className="input-control--pilled" />
                            </div>
                            <div className="divider" />
                            <div className="form-section">
                                <label>Left Glyph</label>
                                <div className="input-control">
                                    <input
                                        type="email"
                                        className="input-contains-icon input-control--pilled"
                                        placeholder="Left glyph"
                                    />
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'layer-group']} />
                                    </span>
                                </div>
                            </div>
                            <div className="form-section">
                                <label>Right Glyph</label>
                                <div className="input-control">
                                    <input
                                        type="email"
                                        className="input-contains-icon-right input-control--pilled"
                                        placeholder="Right glyph"
                                    />
                                    <span className="icon icon-right">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'poop']} />
                                    </span>
                                </div>
                            </div>
                            <div className="form-section">
                                <label>Left and Right Glyphs</label>
                                <div className="input-control">
                                    <input
                                        type="email"
                                        className="input-contains-icon input-contains-icon-right input-control--pilled"
                                        placeholder="Left and right glyphs"
                                    />
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'layer-group']} />
                                    </span>
                                    <span className="icon icon-right">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'poop']} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="frame__footer"></div>
                    </div>
                    <div className="space xlarge" />
                    <div className="divider" />
                </div>
            </section>
            <section className="padtop" id="headers">
                <div className="content">
                    <div className="u-text-center content">
                        <h5 className="uppercase">Headers</h5>
                        <p className="lead">Dead simple responsive navigation menus for any webpage.</p>
                    </div>
                </div>
                <div className="space xlarge" />
                <div className="header unselectable header-animated">
                    <div className="header-brand">
                        <div className="nav-item no-hover">
                            <h6 className="title">Logo</h6>
                        </div>
                        <div className="nav-item nav-btn" id="header-btn">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div className="header-nav" id="header-menu">
                        <div className="nav-left">
                            <div className="nav-item">
                                <a href="#">Home</a>
                            </div>
                            <div className="nav-item">
                                <a href="#">About</a>
                            </div>
                            <div className="nav-item">
                                <a href="#">Tutorials</a>
                            </div>
                            <div className="nav-item">
                                <a href="#">Contact</a>
                            </div>
                        </div>
                        <div className="nav-right">
                            <div className="nav-item">
                                <button className="btn-primary my-1 p-0">
                                    <a href="#" className="text-white">
                                        <span className="icon">
                                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'user']} />
                                        </span>
                                        Join
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header header-dark unselectable header-animated">
                    <div className="header-brand">
                        <div className="nav-item no-hover">
                            <h6 className="title">Logo</h6>
                        </div>
                        <div className="nav-item nav-btn" id="header-btn">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div className="header-nav" id="header-menu">
                        <div className="nav-left">
                            <div className="nav-item u-text-center">
                                <a href="#">
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fab', 'github']} />
                                    </span>
                                </a>
                            </div>
                            <div className="nav-item u-text-center">
                                <a href="#">
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fab', 'twitter']} />
                                    </span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#">Contact</a>
                            </div>
                            <div className="nav-item has-sub toggle-hover" id="dropdown">
                                <a className="nav-dropdown-link">Services</a>
                                <ul className="dropdown-menu dropdown-animated" role="menu">
                                    <li role="menu-item">
                                        <a href="#">First Item</a>
                                    </li>
                                    <li role="menu-item">
                                        <a href="#">Second Item</a>
                                    </li>
                                    <li role="menu-item">
                                        <a href="#">Third Item</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <a href="#">Profile</a>
                            </div>
                        </div>
                        <div className="nav-right">
                            <div className="form-group">
                                <input type="search" className="form-group-input" placeholder="Search" />
                                <button className="form-group-btn">Go</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        height: '20rem',
                        background:
                            'url("https://images.unsplash.com/photo-1534065101271-ba29bb6c7c13?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=299a66c6fae411cee828040a6309a89f&auto=format&fit=crop&w=1350&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                    }}
                >
                    <div className="header header-clear unselectable header-animated" style={{ paddingTop: '1rem' }}>
                        <div className="header-brand">
                            <div className="nav-item no-hover">
                                <h6 className="title">Logo</h6>
                            </div>
                            <div className="nav-item nav-btn" id="header-btn">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                        <div className="header-nav" id="header-menu">
                            <div className="nav-left" />
                            <div className="nav-center">
                                <div className="nav-item">
                                    <a href="#">Home</a>
                                </div>
                                <div className="nav-item">
                                    <a href="#">About</a>
                                </div>
                                <div className="nav-item">
                                    <a href="#">Tutorials</a>
                                </div>
                                <div className="nav-item">
                                    <a href="#">Contact</a>
                                </div>
                            </div>
                            <div className="nav-right">
                                <div className="nav-item has-sub toggle-hover" id="dropdown">
                                    <figure className="avatar avatar--sm" data-text="JD" />
                                    <a className="nav-dropdown-link">John Doe</a>
                                    <ul className="dropdown-menu dropdown-animated" role="menu">
                                        <li role="menu-item">
                                            <a href="#">Profile</a>
                                        </li>
                                        <li role="menu-item">
                                            <a href="#">Settings</a>
                                        </li>
                                        <li className="dropdown-menu-divider" />
                                        <li role="menu-item">
                                            <a href="#">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="space xlarge" />
                        <div className="space xlarge" />
                        <div className="space xlarge" />
                        <div className="space xlarge" />
                        <div className="divider" />
                    </div>
                </div>
            </section>
            <section className="padtop" id="tooltips">
                <div className="content">
                    <div className="u-text-center content">
                        <h5 className="uppercase">Tooltips</h5>
                        <p className="lead">Provide contextual cues to any component on the page.</p>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="m-1">
                                <button
                                    className="demo-tooltip btn-link tooltip tooltip--top-left"
                                    data-tooltip="Tooltip Top Left"
                                >
                                    Tooltip Top Left
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="m-1">
                                <button
                                    className="demo-tooltip btn-link tooltip tooltip--top"
                                    data-tooltip="Tooltip Top (Default)"
                                >
                                    Tooltip Top
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="m-1">
                                <button
                                    className="demo-tooltip btn-link tooltip tooltip--top-right"
                                    data-tooltip="Tooltip Top Right"
                                >
                                    Tooltip Top Right
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="m-1">
                                <button
                                    className="demo-tooltip btn-link tooltip tooltip--left"
                                    data-tooltip="Tooltip Left"
                                >
                                    Tooltip Left
                                </button>
                            </div>
                        </div>
                        <div className="col-4 offset-4">
                            <div className="m-1">
                                <button
                                    className="demo-tooltip btn-link tooltip tooltip--right"
                                    data-tooltip="Tooltip Right"
                                >
                                    Tooltip Right
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="m-1">
                                <button
                                    className="demo-tooltip btn-link tooltip tooltip--bottom-left"
                                    data-tooltip="Tooltip Bottom Left"
                                >
                                    Tooltip Bottom Left
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="m-1">
                                <button
                                    className="demo-tooltip btn-link tooltip tooltip--bottom"
                                    data-tooltip="Tooltip Bottom"
                                >
                                    Tooltip Bottom
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="m-1">
                                <button
                                    className="demo-tooltip btn-link tooltip tooltip--bottom-right"
                                    data-tooltip="Tooltip Bottom Right"
                                >
                                    Tooltip Bottom Right
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="divider" />
                </div>
            </section>
            <section className="padtop" id="cards">
                <div className="content">
                    <div className="u-text-center content">
                        <h5 className="uppercase">Cards</h5>
                        <p className="lead">
                            Cards are designed to provide an easy and flexible way for developers to present data in an
                            elegant fashion.
                        </p>
                    </div>
                    <div className="row">
                        <div className="row fluid-container">
                            {/* 3 cards per row */}
                            <div className="col-4">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{ backgroundImage: 'url(https://placeimg.com/640/480/nature)' }}
                                        />
                                        <div className="card__title-container">
                                            <p className="title">Views</p>
                                            <span className="subtitle">By John Doe</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Nec invenire inciderint scriptorem et. Et viderer euismod alienum eos, no
                                            his melius ancillae, an essent accusata quaerendum quo.
                                        </p>
                                    </div>
                                    <div className="card__action-bar u-text-center">
                                        <button className="btn">SHARE</button>
                                        <button className="btn">LEARN MORE</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundImage: 'url(https://source.unsplash.com/random/640x480)',
                                            }}
                                        ></div>
                                        <div className="card__title-container">
                                            <p className="title">Views</p>
                                            <span className="subtitle">By John Doe</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Nec invenire inciderint scriptorem et. Et viderer euismod alienum eos, no
                                            his melius ancillae, an essent accusata quaerendum quo.
                                        </p>
                                    </div>
                                    <div className="card__action-bar u-text-center">
                                        <button className="btn">SHARE</button>
                                        <button className="btn">LEARN MORE</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundImage:
                                                    'url(https://source.unsplash.com/category/nature/640x480)',
                                            }}
                                        />
                                        <div className="card__title-container">
                                            <p className="title">Views</p>
                                            <span className="subtitle">By John Doe</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Nec invenire inciderint scriptorem et. Et viderer euismod alienum eos, no
                                            his melius ancillae, an essent accusata quaerendum quo.
                                        </p>
                                    </div>
                                    <div className="card__action-bar u-text-center">
                                        <button className="btn">SHARE</button>
                                        <button className="btn">LEARN MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>
                        For a more compact verison, use <code>Tiles</code> instead.
                    </p>
                    <div className="row">
                        <div className="col-8 offset-2">
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
                                    <p className="tile__subtitle m-0 u-text-ellipsis">
                                        Robert shared: 'Stark Industries is...'
                                    </p>
                                    <span className="info">23 minutes ago</span>
                                </div>
                                <div className="tile__buttons">
                                    <button className="btn-primary btn--sm uppercase">View</button>
                                    <button className="btn--sm uppercase">Dismiss</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space" />
                    <div className="divider" />
                </div>
            </section>
            <section className="padtop" id="modals">
                <div className="content">
                    <div className="u-text-center content">
                        <h5 className="uppercase">Modals</h5>
                        <p className="lead">Display modal dialogs without using any JavaScript.</p>
                    </div>
                    <div className="r">
                        <a href="#modal-test">
                            <button className="btn-primary u-center">Show Modal Dialog</button>
                        </a>
                    </div>
                    <div className="divider" />
                </div>
            </section>
            <div className="modal modal-large modal-animated--zoom-in" id="modal-test">
                <a href="#searchModalDialog" className="modal-overlay close-btn" aria-label="Close" />
                <div className="modal-content" role="document">
                    <div className="modal-header">
                        <a href="#components" className="u-pull-right" aria-label="Close">
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'times']} />
                            </span>
                        </a>
                        <div className="modal-title">Invite</div>
                    </div>
                    <div className="modal-body">
                        <div className="r">
                            <h3 className="font-alt font-light u-text-center">Invite people to project</h3>
                        </div>
                        <div className="space" />
                        <div className="mx-auto w-80">
                            <div className="input-control">
                                <input
                                    type="text"
                                    className="input-contains-icon"
                                    placeholder="Search for team members"
                                />
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'search']} />
                                </span>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="r">
                            <div
                                className="tile tile--center"
                                style={{
                                    boxShadow: '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)',
                                    margin: '1rem 0',
                                    padding: '0.5rem 1rem',
                                    width: '100%',
                                }}
                            >
                                <div className="tile__icon">
                                    <figure className="avatar" data-text="Jn"></figure>
                                </div>
                                <div className="tile__container">
                                    <p className="tile__title m-0">John Newman</p>
                                    <p className="tile__subtitle m-0">jnewman@gmail.com</p>
                                </div>
                                <div className="tile__buttons">
                                    <button className="btn-success btn--sm uppercase">
                                        <span className="icon">
                                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'plus']} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="tile tile--center"
                                style={{
                                    boxShadow: '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)',
                                    margin: '1rem 0',
                                    padding: '0.5rem 1rem',
                                    width: '100%',
                                }}
                            >
                                <div className="tile__icon">
                                    <figure
                                        className="avatar"
                                        style={{ backgroundColor: '#8D91C7' }}
                                        data-text="Fw"
                                    ></figure>
                                </div>
                                <div className="tile__container">
                                    <p className="tile__title m-0">Franklin Watson</p>
                                    <p className="tile__subtitle m-0">fwatsonm@gmail.com</p>
                                </div>
                                <div className="tile__buttons">
                                    <button className="btn-success btn--sm uppercase">
                                        <span className="icon">
                                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'plus']} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="tile tile--center"
                                style={{
                                    boxShadow: '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)',
                                    margin: '1rem 0',
                                    padding: '0.5rem 1rem',
                                    width: '100%',
                                }}
                            >
                                <div className="tile__icon">
                                    <figure
                                        className="avatar"
                                        style={{ backgroundColor: '#6E75A8' }}
                                        data-text="Cr"
                                    ></figure>
                                </div>
                                <div className="tile__container">
                                    <p className="tile__title m-0">Cornelia Roberts</p>
                                    <p className="tile__subtitle m-0">croberts@outlook.com</p>
                                </div>
                                <div className="tile__buttons">
                                    <button className="btn-danger btn--sm uppercase">
                                        <span className="icon">
                                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'times']} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="tile tile--center"
                                style={{
                                    boxShadow: '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)',
                                    margin: '1rem 0',
                                    padding: '0.5rem 1rem',
                                    width: '100%',
                                }}
                            >
                                <div className="tile__icon">
                                    <figure
                                        className="avatar"
                                        style={{ backgroundColor: '#3E1929' }}
                                        data-text="Da"
                                    ></figure>
                                </div>
                                <div className="tile__container">
                                    <p className="tile__title m-0">Dominic Alvarado</p>
                                    <p className="tile__subtitle m-0">dalvarado@yahoo.com</p>
                                </div>
                                <div className="tile__buttons">
                                    <button className="btn-success btn--sm uppercase">
                                        <span className="icon">
                                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'plus']} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="tile tile--center"
                                style={{
                                    boxShadow: '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)',
                                    margin: '1rem 0',
                                    padding: '0.5rem 1rem',
                                    width: '100%',
                                }}
                            >
                                <div className="tile__icon">
                                    <figure
                                        className="avatar"
                                        style={{ backgroundColor: '#845A6D' }}
                                        data-text="Sl"
                                    ></figure>
                                </div>
                                <div className="tile__container">
                                    <p className="tile__title m-0">Stanley Lim</p>
                                    <p className="tile__subtitle m-0">slim@stanleylim.me</p>
                                </div>
                                <div className="tile__buttons">
                                    <button className="btn-success btn--sm uppercase">
                                        <span className="icon">
                                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'plus']} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="form-section u-text-right">
                            <a href="#components">
                                <button className="btn btn--sm u-inline-block">Cancel</button>
                            </a>
                            <a href="#components">
                                <button className="btn-info btn--sm u-inline-block">Confirm</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="padtop" id="additional">
                <div className="content">
                    <div className="u-text-center content">
                        <h6 className="uppercase">Additional Controls</h6>
                        <p className="lead">
                            See all that Cirrus has to offer. Below are some additional useful components.
                        </p>
                    </div>
                    <div className="r">
                        <h6 className="font-alt">Tabs</h6>
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
                    </div>
                    <div className="r">
                        <h6 className="font-alt">Menu Lists</h6>
                        <div className="row">
                            <div className="frame col-6">
                                <div className="frame__header">
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
                                                    <i
                                                        className="fa-wrapper fas fa-ellipsis-h small"
                                                        aria-hidden="true"
                                                    />
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
                        </div>
                    </div>
                    <div className="r" style={{ overflowX: 'scroll' }}>
                        <h6 className="font-alt">Pagination</h6>
                        <div className="row">
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
                            <div className="col-6 pagination pagination-bordered">
                                <div className="pagination-item short">
                                    <a href="#">Prev</a>
                                </div>
                                <div className="pagination-item short">
                                    <a href="#">1</a>
                                </div>
                                <div className="pagination-item short">
                                    <a>...</a>
                                </div>
                                <div className="pagination-item short">
                                    <a href="#">3</a>
                                </div>
                                <div className="pagination-item short">
                                    <a href="#">4</a>
                                </div>
                                <div className="pagination-item short selected">
                                    <a href="#">5</a>
                                </div>
                                <div className="pagination-item short">
                                    <a>...</a>
                                </div>
                                <div className="pagination-item short">
                                    <a href="#">23</a>
                                </div>
                                <div className="pagination-item short">
                                    <a href="#">Next</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space" />
                    <div className="r">
                        <h6 className="font-alt">Tables</h6>
                        <div className="r" style={{ overflowX: 'scroll' }}>
                            <table className="table">
                                {/* Set the table header and footer */}
                                <thead>
                                    <tr>
                                        <th>
                                            <abbr title="Title1">T1</abbr>
                                        </th>
                                        <th>
                                            <abbr title="Title2">T2</abbr>
                                        </th>
                                        <th>
                                            <abbr title="Title3">T3</abbr>
                                        </th>
                                        <th>
                                            <abbr title="Title4">T4</abbr>
                                        </th>
                                        <th>
                                            <abbr title="Title5">T5</abbr>
                                        </th>
                                        <th>
                                            <abbr title="Short">S</abbr>
                                        </th>
                                        <th>Notes</th>
                                    </tr>
                                </thead>
                                {/* Optional */}
                                <tfoot>
                                    <tr>
                                        <th>
                                            <abbr title="Title1">T1</abbr>
                                        </th>
                                        <th>
                                            <abbr title="Title2">T2</abbr>
                                        </th>
                                        <th>
                                            <abbr title="Title3">T3</abbr>
                                        </th>
                                        <th>
                                            <abbr title="Title4">T4</abbr>
                                        </th>
                                        <th>
                                            <abbr title="Title5">T5</abbr>
                                        </th>
                                        <th>
                                            <abbr title="Short">S</abbr>
                                        </th>
                                        <th>Notes</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Row:1 Cell:1</td>
                                        <td>Row:1 Cell:2</td>
                                        <td>Row:1 Cell:3</td>
                                        <td>Row:1 Cell:4</td>
                                        <td>S</td>
                                        <td>Row:1 Cell:5</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Row:2 Cell:1</td>
                                        <td>Row:2 Cell:2</td>
                                        <td>Row:2 Cell:3</td>
                                        <td>Row:2 Cell:4</td>
                                        <td>S</td>
                                        <td>Row:2 Cell:5</td>
                                    </tr>
                                    <tr className="selected">
                                        <th>3</th>
                                        <td>Row:3 Cell:1</td>
                                        <td>Row:3 Cell:2</td>
                                        <td>Row:3 Cell:3</td>
                                        <td>Row:3 Cell:4</td>
                                        <td>S</td>
                                        <td>Row:3 Cell:5</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>Row:4 Cell:1</td>
                                        <td>Row:4 Cell:2</td>
                                        <td>Row:4 Cell:3</td>
                                        <td>Row:4 Cell:4</td>
                                        <td>S</td>
                                        <td>Row:4 Cell:5</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td>Row:5 Cell:1</td>
                                        <td>Row:5 Cell:2</td>
                                        <td>Row:5 Cell:3</td>
                                        <td>Row:5 Cell:4</td>
                                        <td>S</td>
                                        <td>Row:5 Cell:5</td>
                                    </tr>
                                    <tr>
                                        <th>6</th>
                                        <td>Row:6 Cell:1</td>
                                        <td>Row:6 Cell:2</td>
                                        <td>Row:6 Cell:3</td>
                                        <td>Row:6 Cell:4</td>
                                        <td>S</td>
                                        <td>Row:6 Cell:5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
