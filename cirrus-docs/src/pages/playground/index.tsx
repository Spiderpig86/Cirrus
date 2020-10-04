import React, { useEffect, useRef, useState } from 'react';
import { ControlledEditor, ControlledEditorProps } from '@monaco-editor/react';
import SplitPane from 'react-split-pane';
import InnerHTML from 'dangerously-set-html-content'

import './index.scss';
import { IFrame } from '../../layouts/components/iframe';

const CIRRUS_EDITOR_CODE_KEY = 'cirrus-editor-code';

export const PlaygroundPage: React.FC<any> = () => {
    const editorRef = useRef<any>();
    const [code, setCode] = useState(localStorage.getItem(CIRRUS_EDITOR_CODE_KEY) ?? '');

    useEffect(() => {
        localStorage.setItem(CIRRUS_EDITOR_CODE_KEY, code);
    }, [code]);

    function handleEditorMounted(_: any, editor: any) {
        editorRef.current = editor;
        editorRef.current.setValue(code);
    }

    /**
     * Lazily update Monaco editor pane for performance
     */
    function handleSplitPaneDragFinished() {
        if (editorRef) {
            editorRef.current.layout();
        }
    }

    return (
        <div
            className="u-position-relative"
            style={{
                minHeight: '100vh',
            }}
        >
            <SplitPane
                className="mr-1"
                split="vertical"
                minSize={50}
                maxSize={'99%'}
                defaultSize={'50%'}
                onDragFinished={handleSplitPaneDragFinished}
            >
                <div
                    className="p-2 u-hide-overflow h-100"
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
                <IFrame content={code} />
            </SplitPane>
        </div>
    );
};
