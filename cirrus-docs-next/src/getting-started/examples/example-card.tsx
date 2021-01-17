import React from 'react';

export interface ExampleCardData {
    imageUrl: string;
    url: string;
    title: string;
    tags: string[];
    description: string;
}

export interface ExampleCardProps {
    data: ExampleCardData;
}

export const ExampleCard: React.FC<ExampleCardProps> = (props) => {
    return (
        <div className="col-lg-4 mb-2">
            <div className="card h-100 u-flex u-flex-column">
                <div className="card__container">
                    <div
                        className="card__image"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 55%, rgba(226, 88, 104, 1)), url(${props.data.imageUrl})`,
                        }}
                    ></div>
                    <div className="card__title-container">
                        <p className="title">{props.data.title}</p>
                        <div className="subtitle m-0">
                            {props.data.tags.map((tag, index) => (
                                <div key={index} className="tag tag--link">{tag}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p>{props.data.description}</p>
                </div>
                <div className="card__action-bar u-text-center">
                    <a
                        href={`${props.data.url}`}
                        className="u-flex"
                        target="_blank"
                        style={{
                            flexGrow: 1,
                        }}
                    >
                        <button
                            className="btn btn-primary uppercase"
                            style={{
                                flexGrow: 1,
                            }}
                        >
                            Preview
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
