import React, { useEffect, useRef, useState } from 'react';
import { ControlledEditor } from '@monaco-editor/react';
import SplitPane from 'react-split-pane';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IFrame } from '../../layouts/components/iframe';

import './index.scss';

const CIRRUS_EDITOR_CODE_KEY = 'cirrus-editor-code';

export const PlaygroundPage: React.FC<any> = () => {
    const editorRef = useRef<any>();
    const iframeRef = useRef<any>();
    const [code, setCode] = useState(localStorage.getItem(CIRRUS_EDITOR_CODE_KEY) ?? '');
    const [isDragging, setDragging] = useState(false); // Hacky workaround https://github.com/tomkp/react-split-pane/issues/30
    const [isEditorHorizontal, setEditorHorizontal] = useState(false);

    useEffect(() => {
        localStorage.setItem(CIRRUS_EDITOR_CODE_KEY, code);
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
    function handleSplitPaneDragFinished() {
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

    // TODO: Refactor code, make template dynamic so we can swap out different versions of the framework
    function constructTemplate(code: string) {
        let template = `<link href="https://raw.githack.com/Spiderpig86/Cirrus/master/dist/cirrus.min.css" rel="stylesheet" />
<body>${code}</body>`;
        return template;
    }

    return (
        <div>
            <div
                className="header header-dark u-position-relative u-unselectable header-animated mb-0"
                style={{
                    height: '3.5rem',
                    zIndex: 1000,
                }}
            >
                <div className="header-brand">
                    <div className="nav-item no-hover">
                        <Link to="../">
                            <h6 className="title">Cirrus</h6>
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
                        <div className="nav-item">
                            <div
                                className="px-2 py-1 tooltip tooltip--bottom"
                                onClick={toggleEditorOrientation}
                                data-tooltip="Rotate"
                            >
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'sync']} />
                            </div>
                        </div>
                        <div className="nav-item">
                            <div
                                className="px-2 py-1 tooltip tooltip--bottom"
                                onClick={handleSaveCode}
                                data-tooltip="Save"
                            >
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'save']} />
                            </div>
                        </div>
                        <div className="nav-item has-sub toggle-hover" id="dropdown">
                            <a className="nav-dropdown-link">Version / 0.6.0</a>
                            <ul className="dropdown-menu dropdown-animated" role="menu">
                                <li role="menu-item">
                                    <a href="#">0.6.0</a>
                                </li>
                                <li role="menu-item">
                                    <a href="#">0.5.5</a>
                                </li>
                                <li role="menu-item">
                                    <a href="#">0.5.4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="u-position-relative"
                style={{
                    minHeight: 'calc(100vh - 3.5rem)',
                }}
            >
                <SplitPane
                    split={isEditorHorizontal ? 'horizontal' : 'vertical'}
                    minSize={50}
                    maxSize={'99%'}
                    defaultSize={'50%'}
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
                        <IFrame content={constructTemplate(code)} />
                    </div>
                </SplitPane>
            </div>
        </div>
    );
};
