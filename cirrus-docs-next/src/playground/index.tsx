import React, { useEffect, useRef, useState } from 'react';
import { withLayout } from '@moxy/next-layout';
import Link from 'next/link';
import { ControlledEditor } from '@monaco-editor/react';
import SplitPane from 'react-split-pane';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IFrame } from '../../layouts/components/iframe';
import { BlankLayout } from '../../layouts/blank';
import {
    CIRRUS_DEFAULT_PLAYGROUND_CODE,
    CIRRUS_PLAYGROUND_KEY,
    PLAYGROUND_ENDPOINT_MAP,
    PLAYGROUND_VERSIONS,
} from '../../constants/playground';

import initializeHeaderToggle from '../../static/js/header-toggle.js';

import PlaygroundFullscreenSVG from '../../static/svg/playground-fullscreen.svg';
import PlaygroundHalfscreenSVG from '../../static/svg/playground-half.svg';
import PlaygroundCodeSVG from '../../static/svg/playground-code.svg';

export const PlaygroundPage: React.FC<any> = () => {
    const editorRef = useRef<any>();
    const [code, setCode] = useState(CIRRUS_DEFAULT_PLAYGROUND_CODE);
    const [isDragging, setDragging] = useState(false); // Hacky workaround https://github.com/tomkp/react-split-pane/issues/30
    const [isEditorHorizontal, setEditorHorizontal] = useState(false);
    const [playgroundCdn, setPlaygroundCdn] = useState(PLAYGROUND_VERSIONS[0]);
    const [iframeKey, setIFrameKey] = useState(`original`);
    const [splitPaneSize, setSplitPaneSize] = useState<string | number>(`50%`);

    const BUTTON_ACCENT_COLOR = `#f03d4d`;

    useEffect(() => {
        initializeHeaderToggle();
        setCode(localStorage.getItem(CIRRUS_PLAYGROUND_KEY));
    }, []);

    useEffect(() => {
        localStorage.setItem(CIRRUS_PLAYGROUND_KEY, code);
    }, [code]);

    function handleEditorMounted(_: () => string, editor: any) {
        // monacoEditor.editor.IStandaloneCodeEditor
        editorRef.current = editor;
        editorRef.current.setValue(code);
    }

    function handleSplitPaneDragStarted() {
        setDragging(true);
    }

    /**
     * Lazily update Monaco editor pane for performance
     */
    function handleSplitPaneDragFinished(newSize: number) {
        setSplitPaneSize(newSize);
        setDragging(false);
        if (editorRef) {
            editorRef.current.layout();
        }
    }

    function toggleEditorOrientation() {
        setEditorHorizontal(!isEditorHorizontal);
        setTimeout(() => {
            editorRef.current.layout();
        }, 100);
    }

    function handleSaveCode() {
        saveFile(constructTemplate(code), `playground`, `text/html`);
    }

    function saveFile(content: any, fileName: string, contentType: string) {
        const a = document.createElement('a');
        const file = new Blob([content], { type: contentType });

        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();

        URL.revokeObjectURL(a.href);
    }

    function setEditorSize(size: string) {
        setSplitPaneSize(size);
        if (editorRef) {
            setTimeout(() => {
                editorRef.current.layout();
            }, 100);
        }
    }

    // TODO: Refactor code, make template dynamic so we can swap out different versions of the framework
    function constructTemplate(code: string) {
        let template = `<link href="${PLAYGROUND_ENDPOINT_MAP.get(playgroundCdn)}" rel="stylesheet" />
<body>${code}</body>
<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">`;
        return template;
    }

    function reloadIFrame() {
        setIFrameKey(Math.random().toString(36).substring(7));
    }

    return (
        <div className="u-hide-overflow">
            <div
                className="header header-dark header-fixed u-unselectable header-animated mb-0"
                style={{
                    minHeight: '3.5rem',
                    zIndex: 1000,
                }}
            >
                <div className="header-brand">
                    <div className="nav-item no-hover">
                        <Link href="../">
                            <a>
                                <h6 className="title mb-0">Playground</h6>
                                <span
                                    className="uppercase ml-1 mt-1 font-bold"
                                    style={{
                                        color: BUTTON_ACCENT_COLOR,
                                        fontSize: '.75rem',
                                    }}
                                >
                                    for Cirrus
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="nav-item nav-btn" id="header-btn">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div className="header-nav" id="header-menu">
                    <div className="nav-right">
                        <div className="nav-item" onClick={() => setEditorSize(`100%`)}>
                            <div
                                className="px-2 py-1 tooltip tooltip--bottom"
                                data-tooltip="Code Only"
                                style={{
                                    lineHeight: '1rem',
                                }}
                            >
                                <PlaygroundCodeSVG
                                    style={{
                                        stroke: splitPaneSize === '100%' ? BUTTON_ACCENT_COLOR : '#fff',
                                        fill: splitPaneSize === '100%' ? BUTTON_ACCENT_COLOR : '#fff',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="nav-item" onClick={() => setEditorSize(`50%`)}>
                            <div
                                className="px-2 py-1 tooltip tooltip--bottom"
                                data-tooltip="Half"
                                style={{
                                    lineHeight: '1rem',
                                }}
                            >
                                <PlaygroundHalfscreenSVG
                                    style={{
                                        stroke:
                                            splitPaneSize !== '100%' && splitPaneSize !== '0%'
                                                ? BUTTON_ACCENT_COLOR
                                                : '#fff',
                                        fill:
                                            splitPaneSize !== '100%' && splitPaneSize !== '0%'
                                                ? BUTTON_ACCENT_COLOR
                                                : '#fff',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="nav-item" onClick={() => setEditorSize(`0%`)}>
                            <div
                                className="px-2 py-1 tooltip tooltip--bottom"
                                data-tooltip="Fullscreen"
                                style={{
                                    lineHeight: '1rem',
                                }}
                            >
                                <PlaygroundFullscreenSVG
                                    style={{
                                        stroke: splitPaneSize === '0%' ? BUTTON_ACCENT_COLOR : '#fff',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="nav-item" onClick={toggleEditorOrientation}>
                            <div className="px-2 py-1 tooltip tooltip--bottom" data-tooltip="Rotate">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'sync']} />
                            </div>
                        </div>
                        <div className="nav-item" onClick={handleSaveCode}>
                            <div className="px-2 py-1 tooltip tooltip--bottom" data-tooltip="Save">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'save']} />
                            </div>
                        </div>
                        <div className="nav-item has-sub toggle-hover" id="dropdown">
                            <a className="nav-dropdown-link">Version / {playgroundCdn}</a>
                            <ul className="dropdown-menu dropdown-animated" role="menu">
                                {PLAYGROUND_VERSIONS.map((version) => {
                                    return (
                                        <li
                                            role="menu-item"
                                            onClick={() => {
                                                setPlaygroundCdn(version);
                                                reloadIFrame();
                                            }}
                                        >
                                            <a>{version}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="u-position-relative"
                style={{
                    minHeight: 'calc(100vh - 3.5rem)',
                    marginTop: '3.5rem',
                }}
            >
                <SplitPane
                    split={isEditorHorizontal ? 'horizontal' : 'vertical'}
                    minSize={0}
                    maxSize={'99%'}
                    size={splitPaneSize}
                    onDragStarted={handleSplitPaneDragStarted}
                    onDragFinished={handleSplitPaneDragFinished}
                >
                    <div
                        className={`p-2 u-hide-overflow h-100` + (isDragging ? ` is-dragging` : ``)}
                        style={{
                            backgroundColor: '#202124',
                        }}
                    >
                        <ControlledEditor
                            language="html"
                            theme="dark"
                            height="100%"
                            width="100%"
                            editorDidMount={handleEditorMounted}
                            onChange={(_, value) => setCode(value ?? '')}
                            options={{
                                acceptSuggestionOnCommitCharacter: true,
                                acceptSuggestionOnEnter: 'on',
                                accessibilitySupport: 'auto',
                                autoClosingBrackets: 'always',
                                autoClosingQuotes: 'always',
                                autoIndent: 'advanced',
                                automaticLayout: true,
                                codeLens: true,
                                colorDecorators: true,
                                contextmenu: true,
                                cursorBlinking: 'phase',
                                cursorSmoothCaretAnimation: false,
                                cursorStyle: 'line',
                                disableLayerHinting: false,
                                disableMonospaceOptimizations: false,
                                dragAndDrop: false,
                                fixedOverflowWidgets: false,
                                folding: true,
                                foldingStrategy: 'auto',
                                fontLigatures: true,
                                fontSize: 14,
                                formatOnPaste: false,
                                formatOnType: false,
                                hideCursorInOverviewRuler: false,
                                highlightActiveIndentGuide: true,
                                lineHeight: 24,
                                links: true,
                                mouseWheelZoom: false,
                                multiCursorMergeOverlapping: true,
                                multiCursorModifier: 'alt',
                                overviewRulerBorder: true,
                                overviewRulerLanes: 2,
                                quickSuggestions: true,
                                quickSuggestionsDelay: 100,
                                readOnly: false,
                                renderControlCharacters: false,
                                renderFinalNewline: true,
                                renderIndentGuides: true,
                                renderLineHighlight: 'all',
                                renderWhitespace: 'do',
                                revealHorizontalRightPadding: 30,
                                roundedSelection: true,
                                rulers: [],
                                scrollBeyondLastColumn: 5,
                                scrollBeyondLastLine: true,
                                selectOnLineNumbers: true,
                                selectionClipboard: true,
                                selectionHighlight: true,
                                showFoldingControls: 'mouseover',
                                smoothScrolling: false,
                                suggestOnTriggerCharacters: true,
                                wordBasedSuggestions: true,
                                wordSeparators: '~!@#$%^&*()-=+[{]}|;:\'",.<>/?',
                                wordWrap: 'off',
                                wordWrapBreakAfterCharacters: '\t})]?|&,;',
                                wordWrapBreakBeforeCharacters: '{([+',
                                wordWrapBreakObtrusiveCharacters: '.',
                                wordWrapColumn: 80,
                                wordWrapMinified: true,
                                wrappingIndent: 'none',
                            }}
                        />
                    </div>
                    <div className={`h-100` + (isDragging ? ` is-dragging` : ``)}>
                        <IFrame key={iframeKey} content={constructTemplate(code)} />
                    </div>
                </SplitPane>
            </div>
        </div>
    );
};

export default withLayout(<BlankLayout />)(PlaygroundPage);
