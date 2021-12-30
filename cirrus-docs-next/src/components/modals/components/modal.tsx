import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ModalProps {
    id: string;
    children?: React.ReactNode;
    size?: string;
    animation?: string;
}

export const Modal: React.FC<ModalProps> = (props) => {
    return (
        <div className={`modal ${props.size ?? ``} ${props.animation ?? ``}`} id={props.id}>
            <a href="#searchModalDialog" className="modal-overlay close-btn" aria-label="Close"></a>
            <div className="modal-content" role="document">
                {props.children ? (
                    props.children
                ) : (
                    <>
                        <div className="modal-header">
                            <a href="#components" className="u-pull-right" aria-label="Close">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'times']} />
                                </span>
                            </a>
                            <div className="modal-title">Modal Dialog</div>
                        </div>
                        <div className="modal-body">
                            <h4>How to use.</h4>
                            <p>Insert anything you want inside this modal dialog.</p>

                            <h4>What is Lorem Ipsum?</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.
                            </p>

                            <h4>Ipsum</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <h4>Ipsum II</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna.
                                Facilisis gravida neque convallis a cras semper. A iaculis at erat pellentesque
                                adipiscing commodo elit at imperdiet. Erat imperdiet sed euismod nisi porta lorem.{' '}
                            </p>
                        </div>
                        <div className="modal-footer u-text-right">
                            <a href="#components" className="u-inline-block">
                                <button className="btn--sm">Cancel</button>
                            </a>
                            <a href="#components" className="u-inline-block">
                                <button className="btn-primary btn--sm">Share</button>
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
