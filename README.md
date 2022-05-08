# react-ts-clean-template

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-clean-template)

# With testing vitest

# with snippets and settings


----- snippets


{
  "TagWrapper": {
    "prefix": "_w",
    "body": ["<$1>$TM_SELECTED_TEXT$0</$1>"],
    "description": "Creates open and a closing tag around selected text"
  },
  "Import Hooks": {
    "prefix": ["ih", "import-hooks"],
    "body": [
      "import { createContext, FC, useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'react'"
    ],
    "description": "'Import all React Hooks"
  },
  "impJS": {
    "prefix": ["import"],
    "body": ["import { ${1:Eins} } from './components/${1:Eins}'", "", "$0"],
    "description": "Imports module, adapted by Sven Buschke"
  },
  "typescriptReactArrowFunctionExportDefaultComponent": {
    "prefix": ["tssafcde"],
    "body": [
      "import { FC } from 'react'",
      "//import './${1:$TM_FILENAME_BASE}.css'",
      "",
      "interface ${1:$TM_FILENAME_BASE}Props {",
      "\ttitle: string",
      "}",
      "",
      "const ${1:$TM_FILENAME_BASE}: FC<${1:$TM_FILENAME_BASE}Props> = ({ title }) => {",
      "\treturn (",
      "\t\t<div className='${1:$TM_FILENAME_BASE}'>${1:$TM_FILENAME_BASE} {title}$0</div>",
      "\t)",
      "}",
      "",
      "export default ${1:$TM_FILENAME_BASE}"
    ],
    "description": "Creates a React Arrow Function Component with ES7 module system with deafult export, adapted by Sven Buschke"
  },
  "tsRctArrowFunctionExportComponent": {
    "prefix": ["tssafce"],
    "body": [
      "import { FC } from 'react'",
      "//import './${1:$TM_FILENAME_BASE}.css'",
      "",
      "interface ${1:$TM_FILENAME_BASE}Props {",
      "\ttitle: string",
      "}",
      "",
      "export const ${1:$TM_FILENAME_BASE}: FC<${1:$TM_FILENAME_BASE}Props> = ({ title }) => {",
      "\treturn (",
      "\t\t<div className='${1:$TM_FILENAME_BASE}'>${1:$TM_FILENAME_BASE} {title}$0</div>",
      "\t)",
      "}"
    ],
    "description": "Creates a React Arrow Function Component with ES7 module system, adapted by Sven Buschke"
  },
  "useState": {
    "prefix": ["tsuseStateSnippet"],
    "body": [
      "const [ ${1:variable}, set${1/(.*)/${1:/capitalize}/} ] = useState<${2:type}>(${3:initialVal})"
    ],
    "description": "UseState Snippet, adapted for TypeScript by Sven Buschke"
  },
  "useEffect": {
    "prefix": ["tsuseEffect"],
    "body": ["useEffect(() => {", "\t$0", "", "}, [${1:returnValue}])"],
    "description": "UseEffect Snippet, adapted for TypeScript by Sven Buschke"
  },
  "var set getx": {
    "prefix": "varsetgetx",
    "body": [
      "${1:int} ${2:VARNM};",
      "$1 ${2/(.*)/${1:/downcase}/}(){return $2;}",
      "void ${2/(.*)/${1:/downcase}/}($1 val){$2 = val;}"
    ],
    "description": "Example of downcasing"
  }
  // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
  // Placeholders with the same ids are connected.
  // Example:
  // "Print to console": {
  // 	"scope": "javascript,typescript",
  // 	"prefix": "log",
  // 	"body": [
  // 		"console.log('$1');",
  // 		"$2"
  // 	],
  // 	"description": "Log output to console"
  // }
}


------ settings



{
  "editor.theme": "vs-dark",
  /**
   * Render vertical lines at the specified columns.
   * Defaults to empty array.
   */
  "editor.rulers": [],
  /**
   * A string containing the word separators used when doing word navigation.
   * Defaults to `~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?
   */
  "editor.wordSeparators": "`~!@#$%^&*()-=+[{]}\\\\|;:\\'\",.<>/?",
  /**
   * Enable Linux primary clipboard.
   * Defaults to true.
   */
  "editor.selectionClipboard": true,
  /**
   * Control the rendering of line numbers.
   * If it is a function, it will be invoked when rendering a line number and the return value will be rendered.
   * Otherwise, if it is a truey, line numbers will be rendered normally (equivalent of using an identity function).
   * Otherwise, line numbers will not be rendered.
   * Defaults to true.
   */
  "editor.lineNumbers": "on",
  /**
   * Should the corresponding line be selected when clicking on the line number?
   * Defaults to true.
   */
  "editor.selectOnLineNumbers": true,
  /**
   * Control the width of line numbers, by reserving horizontal space for rendering at least an amount of digits.
   * Defaults to 5.
   */
  "editor.lineNumbersMinChars": 5,
  /**
   * Enable the rendering of the glyph margin.
   * Defaults to true in vscode and to false in monaco-editor.
   */
  "editor.glyphMargin": false,
  /**
   * The width reserved for line decorations (in px).
   * Line decorations are placed between line numbers and the editor content.
   * You can pass in a string in the format floating point followed by "ch". e.g. 1.3ch.
   * Defaults to 10.
   */
  "editor.lineDecorationsWidth": 10,
  /**
   * When revealing the cursor, a virtual padding (px) is added to the cursor, turning it into a rectangle.
   * This virtual padding ensures that the cursor gets revealed before hitting the edge of the viewport.
   * Defaults to 30 (px).
   */
  "editor.revealHorizontalRightPadding": 30,
  /**
   * Render the editor selection with rounded borders.
   * Defaults to true.
   */
  "editor.roundedSelection": true,
  /**
   * Control the behavior and rendering of the minimap.
   */
  "editor.minimap": {
    "enabled": false
  },
  /**
   * Display overflow widgets as `fixed`.
   * Defaults to `false`.
   */
  "editor.fixedOverflowWidgets": false,
  /**
   * The number of vertical lanes the overview ruler should render.
   * Defaults to 2.
   */
  "editor.overviewRulerLanes": 2,
  /**
   * Controls if a border should be drawn around the overview ruler.
   * Defaults to `true`.
   */
  "editor.overviewRulerBorder": true,
  /**
   * Control the cursor animation style, possible values are 'blink', 'smooth', 'phase', 'expand' and 'solid'.
   * Defaults to 'blink'.
   */
  "editor.cursorBlinking": "blink",
  /**
   * Zoom the font in the editor when using the mouse wheel in combination with holding Ctrl.
   * Defaults to false.
   */
  "editor.mouseWheelZoom": false,
  /**
   * Control the cursor style, either 'block' or 'line'.
   * Defaults to 'line'.
   */
  "editor.cursorStyle": "line",
  /**
   * Control the width of the cursor when cursorStyle is set to 'line'
   */
  "editor.cursorWidth": 2,
  /**
   * Enable font ligatures.
   * Defaults to false.
   */
  "editor.fontLigatures": false,
  /**
   * Disable the use of `will-change` for the editor margin and lines layers.
   * The usage of `will-change` acts as a hint for browsers to create an extra layer.
   * Defaults to false.
   */
  "editor.disableLayerHinting": false,
  /**
   * Disable the optimizations for monospace fonts.
   * Defaults to false.
   */
  "editor.disableMonospaceOptimizations": false,
  /**
   * Should the cursor be hidden in the overview ruler.
   * Defaults to false.
   */
  "editor.hideCursorInOverviewRuler": false,
  /**
   * Enable that scrolling can go one screen size after the last line.
   * Defaults to true.
   */
  "editor.scrollBeyondLastLine": true,
  /**
   * Enable that scrolling can go beyond the last column by a number of columns.
   * Defaults to 5.
   */
  "editor.scrollBeyondLastColumn": 5,
  /**
   * Enable that the editor animates scrolling to a position.
   * Defaults to false.
   */
  "editor.smoothScrolling": false,
  /**
   * Enable that the editor will install an interval to check if its container dom node size has changed.
   * Enabling this might have a severe performance impact.
   * Defaults to false.
   */
  "editor.automaticLayout": false,
  /**
   * Control the wrapping of the editor.
   * When `wordWrap` = "off", the lines will never wrap.
   * When `wordWrap` = "on", the lines will wrap at the viewport width.
   * When `wordWrap` = "wordWrapColumn", the lines will wrap at `wordWrapColumn`.
   * When `wordWrap` = "bounded", the lines will wrap at min(viewport width, wordWrapColumn).
   * Defaults to "off".
   */
  "editor.wordWrap": "on",
  /**
   * Control the wrapping of the editor.
   * When `wordWrap` = "off", the lines will never wrap.
   * When `wordWrap` = "on", the lines will wrap at the viewport width.
   * When `wordWrap` = "wordWrapColumn", the lines will wrap at `wordWrapColumn`.
   * When `wordWrap` = "bounded", the lines will wrap at min(viewport width, wordWrapColumn).
   * Defaults to 80.
   */
  "editor.wordWrapColumn": 0,
  /**
   * Force word wrapping when the text appears to be of a minified/generated file.
   * Defaults to true.
   */
  "editor.wordWrapMinified": true,
  /**
   * Control indentation of wrapped lines. Can be: 'none', 'same', 'indent' or 'deepIndent'.
   * Defaults to 'same' in vscode and to 'none' in monaco-editor.
   */
  "editor.wrappingIndent": "same",
  /**
   * Configure word wrapping characters. A break will be introduced before these characters.
   * Defaults to '{([+'.
   */
  "editor.wordWrapBreakBeforeCharacters": "{([+",
  /**
   * Configure word wrapping characters. A break will be introduced after these characters.
   * Defaults to ' \t})]?|&,;'.
   */
  "editor.wordWrapBreakAfterCharacters": " \t})]?|&,;",
  /**
   * Configure word wrapping characters. A break will be introduced after these characters only if no `wordWrapBreakBeforeCharacters` or `wordWrapBreakAfterCharacters` were found.
   * Defaults to '.'.
   */
  "editor.wordWrapBreakObtrusiveCharacters": ".",
  /**
   * Performance guard: Stop rendering a line after x characters.
   * Defaults to 10000.
   * Use -1 to never stop rendering
   */
  "editor.stopRenderingLineAfter": -1,
  /**
   * Configure the editor's hover.
   */
  "editor.hover": {
    /**
     * Enable the hover.
     * Defaults to true.
     */
    "enabled": true,
    /**
     * Delay for showing the hover.
     * Defaults to 300.
     */
    "delay": 300,
    /**
     * Is the hover sticky such that it can be clicked and its contents selected?
     * Defaults to true.
     */
    "sticky": true
  },
  /**
   * Enable detecting links and making them clickable.
   * Defaults to true.
   */
  "editor.links": true,
  /**
   * Enable inline color decorators and color picker rendering.
   */
  "editor.colorDecorators": true,
  /**
   * Enable custom contextmenu.
   * Defaults to true.
   */
  "editor.contextmenu": true,
  /**
   * A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.
   * Defaults to 1.
   */
  "editor.mouseWheelScrollSensitivity": 1,
  /**
   * The modifier to be used to add multiple cursors with the mouse.
   * Defaults to 'alt'
   */
  "editor.multiCursorModifier": "alt",
  /**
   * Merge overlapping selections.
   * Defaults to true
   */
  "editor.multiCursorMergeOverlapping": true,
  /**
   * Configure the editor's accessibility support.
   * Defaults to 'auto'. It is best to leave this to 'auto'.
   */
  "editor.accessibilitySupport": "auto",
  /**
   * Suggest options.
   */
  "editor.suggest": {
    /**
     * Enable graceful matching. Defaults to true.
     */
    "filterGraceful": true,
    /**
     * Prevent quick suggestions when a snippet is active. Defaults to true.
     */
    "snippetsPreventQuickSuggestions": true
  },
  /**
   * Enable quick suggestions (shadow suggestions)
   * Defaults to true.
   */
  "editor.quickSuggestions": true,
  /**
   * Quick suggestions show delay (in ms)
   * Defaults to 500 (ms)
   */
  "editor.quickSuggestionsDelay": 10,
  /**
   * Parameter hint options.
   */
  "editor.parameterHints": true,
  /**
   * Render icons in suggestions box.
   * Defaults to true.
   */
  "editor.iconsInSuggestions": true,
  /**
   * Options for auto closing brackets.
   * Defaults to language defined behavior.
   */
  "editor.autoClosingBrackets": true,
  /**
   * Controls whether the editor should automatically adjust the indentation
   * when users type, paste, move or indent lines.
   * Defaults to advanced.
   */
  "editor.autoIndent": "full",
  /**
   * Enable format on type.
   * Defaults to false.
   */
  "editor.formatOnType": false,
  /**
   * Enable format on paste.
   * Defaults to false.
   */
  "editor.formatOnPaste": false,
  /**
   * Enable format on save.
   * Defaults to true.
   */
  "editor.formatOnSave": true,
  /**
   * Controls if the editor should allow to move selections via drag and drop.
   * Defaults to false.
   */
  "editor.dragAndDrop": false,
  /**
   * Enable the suggestion box to pop-up on trigger characters.
   * Defaults to true.
   */
  "editor.suggestOnTriggerCharacters": true,
  /**
   * Accept suggestions on ENTER.
   * Defaults to 'on'.
   */
  "editor.acceptSuggestionOnEnter": "on",
  /**
   * Accept suggestions on provider defined characters.
   * Defaults to true.
   */
  "editor.acceptSuggestionOnCommitCharacter": true,
  /**
   * Enable snippet suggestions. Default to 'true'.
   */
  "editor.snippetSuggestions": "top",
  /**
   * Copying without a selection copies the current line.
   */
  "editor.emptySelectionClipboard": true,
  /**
   * Enable word based suggestions. Defaults to 'true'
   */
  "editor.wordBasedSuggestions": true,
  /**
   * The history mode for suggestions.
   */
  "editor.suggestSelection": "recentlyUsedByPrefix",
  /**
   * Enable selection highlight.
   * Defaults to true.
   */
  "editor.selectionHighlight": true,
  /**
   * Enable semantic occurrences highlight.
   * Defaults to true.
   */
  "editor.occurrencesHighlight": true,
  /**
   * Show code lens
   * Defaults to true.
   */
  "editor.codeLens": true,
  /**
   * Control the behavior and rendering of the code action lightbulb.
   */
  "editor.lightbulb": {
    "enabled": true
  },
  /**
   * Enable code folding
   * Defaults to true.
   */
  "editor.folding": true,
  /**
   * Selects the folding strategy. 'auto' uses the strategies contributed for the current document, 'indentation' uses the indentation based folding strategy.
   * Defaults to 'auto'.
   */
  "editor.foldingStrategy": "auto",
  /**
   * Controls whether the fold actions in the gutter stay always visible or hide unless the mouse is over the gutter.
   * Defaults to 'mouseover'.
   */
  "editor.showFoldingControls": "mouseover",
  /**
   * Enable highlighting of matching brackets.
   * Defaults to true.
   */
  "editor.matchBrackets": true,
  /**
   * Enable rendering of whitespace.
   * Defaults to none.
   */
  "editor.renderWhitespace": "none",
  /**
   * Enable rendering of control characters.
   * Defaults to false.
   */
  "editor.renderControlCharacters": false,
  /**
   * Enable rendering of indent guides.
   * Defaults to true.
   */
  "editor.renderIndentGuides": true,
  /**
   * Enable highlighting of the active indent guide.
   * Defaults to true.
   */
  "editor.highlightActiveIndentGuide": true,
  /**
   * Enable rendering of current line highlight.
   * Defaults to all.
   */
  "editor.renderLineHighlight": "all",
  /**
   * Inserting and deleting whitespace follows tab stops.
   */
  "editor.useTabStops": true,
  /**
   * The font family
   */
  "editor.fontFamily": "Menlo, Cascadia Code, Consolas, Liberation Mono, monospace",
  /**
   * The font weight
   */
  "editor.fontWeight": "normal",
  /**
   * The font size
   */
  "editor.fontSize": 12,
  /**
   * The line height
   */
  "editor.lineHeight": 18,
  /**
   * The letter spacing
   */
  "editor.letterSpacing": 0,
  /**
   * Controls fading out of unused variables.
   */
  "editor.showUnused": true
}

---

:root {
  --maincol: rgba(220, 20, 60, 1);
  --bgcol: rgba(220, 20, 60, 0.101);
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Actor&family=Advent+Pro&family=Alegreya&family=Almendra&family=Amiri&family=Amita&family=Arima+Madurai&family=Arizonia&family=Arya&family=Athiti&family=Average&family=BIZ+UDPGothic&family=Bai+Jamjuree&family=Berkshire+Swash&family=Bona+Nova&family=Cantora+One&family=Cardo&family=Chau+Philomene+One&family=Cherry+Cream+Soda&family=Cormorant+Garamond:wght@400;600&family=Cormorant+Infant:ital,wght@0,400;0,500;1,400&family=Covered+By+Your+Grace&family=Crimson+Pro&family=Doppio+One&family=Dorsa&family=Dosis&family=Dynalight&family=EB+Garamond&family=Economica&family=Elsie+Swash+Caps&family=Fira+Sans+Extra+Condensed&family=Fira+Sans:wght@400;900&family=Fondamento&family=Freckle+Face&family=Freehand&family=GFS+Didot&family=Georama&family=Grape+Nuts&family=Herr+Von+Muellerhoff&family=Hind&family=IM+Fell+DW+Pica:ital@0;1&family=IM+Fell+Double+Pica&family=Indie+Flower&family=Inria+Sans&family=Istok+Web&family=Jura&family=Kalam&family=Kanit&family=Katibeh&family=Kodchasan&family=Lato:wght@100;400&family=Libre+Barcode+39&family=Libre+Barcode+39+Extended+Text&family=Life+Savers:wght@800&family=Literata:opsz@7..72&family=Lora&family=Luxurious+Script&family=Mansalva&family=Marmelad&family=Miniver&family=Mirza&family=Mitr&family=Mountains+of+Christmas&family=Mouse+Memoirs&family=Mukta&family=Mukta+Mahee&family=Mukta+Malar&family=Mukta+Vaani&family=News+Cycle&family=Nothing+You+Could+Do&family=Oregano&family=Over+the+Rainbow&family=PT+Sans&family=PT+Sans+Caption&family=PT+Sans+Narrow&family=Paprika&family=Petit+Formal+Script&family=Playfair+Display&family=Quattrocento+Sans&family=Raleway&family=Raleway+Dots&family=Ribeye&family=Risque&family=Roboto+Condensed&family=Roboto+Slab&family=Roboto:wght@100;400&family=Ropa+Sans&family=Rosario:wght@400;700&family=Rum+Raisin&family=Sahitya&family=Salsa&family=Sansita+Swashed&family=Share+Tech&family=Shippori+Mincho&family=Smooch+Sans&family=Sorts+Mill+Goudy&family=Style+Script&family=Syne+Tactile&family=Taviraj&family=Truculenta:opsz@12..72&family=UnifrakturCook&family=Vazirmatn&family=Voces&family=Vollkorn&family=Vujahday+Script&family=Yanone+Kaffeesatz&display=swap');

body {
  /* font-family: 'Abhaya Libre', serif; */
  /* font-family: 'Actor', sans-serif; */
  /* font-family: 'Advent Pro', sans-serif; */
  /* font-family: 'Alegreya', serif; */
  /* font-family: 'Almendra', serif; */
  /* font-family: 'Amiri', serif; */
  /* font-family: 'Amita', cursive; */
  /* font-family: 'Arima Madurai', cursive; */
  /* font-family: 'Arizonia', cursive; */
  /* font-family: 'Arya', sans-serif; */
  /* font-family: 'Athiti', sans-serif; */
  /* font-family: 'Average', serif; */
  /* font-family: 'Bai Jamjuree', sans-serif; */
  /* font-family: 'Berkshire Swash', cursive; */
  /* font-family: 'BIZ UDPGothic', sans-serif; */
  /* font-family: 'Bona Nova', serif; */
  /* font-family: 'Cantora One', sans-serif; */
  /* font-family: 'Cardo', serif; */
  /* font-family: 'Chau Philomene One', sans-serif; */
  /* font-family: 'Cherry Cream Soda', cursive; */
  font-family: 'Cormorant Garamond', serif;
  /* font-family: 'Cormorant Infant', serif; */
  /* font-family: 'Covered By Your Grace', cursive; */
  /* font-family: 'Crimson Pro', serif; */
  /* font-family: 'Doppio One', sans-serif; */
  /* font-family: 'Dorsa', sans-serif; */
  /* font-family: 'Dosis', sans-serif; */
  /* font-family: 'Dynalight', cursive; */
  /* font-family: 'EB Garamond', serif; */
  /* font-family: 'Economica', sans-serif; */
  /* font-family: 'Elsie Swash Caps', cursive; */
  /* font-family: 'Fira Sans', sans-serif; */
  /* font-family: 'Fira Sans Extra Condensed', sans-serif; */
  /* font-family: 'Fondamento', cursive; */
  /* font-family: 'Freckle Face', cursive; */
  /* font-family: 'Freehand', cursive; */
  /* font-family: 'Georama', sans-serif; */
  /* font-family: 'GFS Didot', serif; */
  /* font-family: 'Grape Nuts', cursive; */
  /* font-family: 'Herr Von Muellerhoff', cursive; */
  /* font-family: 'Hind', sans-serif; */
  /* font-family: 'IM Fell Double Pica', serif; */
  /* font-family: 'IM Fell DW Pica', serif; */
  /* font-family: 'Indie Flower', cursive; */
  /* font-family: 'Inria Sans', sans-serif; */
  /* font-family: 'Istok Web', sans-serif; */
  /* font-family: 'Jura', sans-serif; */
  /* font-family: 'Kalam', cursive; */
  /* font-family: 'Kanit', sans-serif; */
  /* font-family: 'Katibeh', cursive; */
  /* font-family: 'Kodchasan', sans-serif; */
  /* font-family: 'Lato', sans-serif; */
  /* font-family: 'Libre Barcode 39', cursive; */
  /* font-family: 'Libre Barcode 39 Extended Text', cursive; */
  /* font-family: 'Life Savers', cursive; */
  /* font-family: 'Literata', serif; */
  /* font-family: 'Lora', serif; */
  /* font-family: 'Luxurious Script', cursive; */
  /* font-family: 'Mansalva', cursive; */
  /* font-family: 'Marmelad', sans-serif; */
  /* font-family: 'Miniver', cursive; */
  /* font-family: 'Mirza', cursive; */
  /* font-family: 'Mitr', sans-serif; */
  /* font-family: 'Mountains of Christmas', cursive; */
  /* font-family: 'Mouse Memoirs', sans-serif; */
  /* font-family: 'Mukta', sans-serif; */
  /* font-family: 'Mukta Mahee', sans-serif; */
  /* font-family: 'Mukta Malar', sans-serif; */
  /* font-family: 'Mukta Vaani', sans-serif; */
  /* font-family: 'News Cycle', sans-serif; */
  /* font-family: 'Nothing You Could Do', cursive; */
  /* font-family: 'Oregano', cursive; */
  /* font-family: 'Over the Rainbow', cursive; */
  /* font-family: 'Paprika', cursive; */
  /* font-family: 'Petit Formal Script', cursive; */
  /* font-family: 'Playfair Display', serif; */
  /* font-family: 'PT Sans', sans-serif; */
  /* font-family: 'PT Sans Caption', sans-serif; */
  /* font-family: 'PT Sans Narrow', sans-serif; */
  /* font-family: 'Quattrocento Sans', sans-serif; */
  /* font-family: 'Raleway', sans-serif; */
  /* font-family: 'Raleway Dots', cursive; */
  /* font-family: 'Ribeye', cursive; */
  /* font-family: 'Risque', cursive; */
  /* font-family: 'Roboto', sans-serif; */
  /* font-family: 'Roboto Condensed', sans-serif; */
  /* font-family: 'Roboto Slab', serif; */
  /* font-family: 'Ropa Sans', sans-serif; */
  /* font-family: 'Rosario', sans-serif; */
  /* font-family: 'Rum Raisin', sans-serif; */
  /* font-family: 'Sahitya', serif; */
  /* font-family: 'Salsa', cursive; */
  /* font-family: 'Sansita Swashed', cursive; */
  /* font-family: 'Share Tech', sans-serif; */
  /* font-family: 'Shippori Mincho', serif; */
  /* font-family: 'Smooch Sans', sans-serif; */
  /* font-family: 'Sorts Mill Goudy', serif; */
  /* font-family: 'Style Script', cursive; */
  /* font-family: 'Syne Tactile', cursive; */
  /* font-family: 'Taviraj', serif; */
  /* font-family: 'Truculenta', sans-serif; */
  /* font-family: 'UnifrakturCook', cursive; */
  /* font-family: 'Vazirmatn', sans-serif; */
  /* font-family: 'Voces', cursive; */
  /* font-family: 'Vollkorn', serif; */
  /* font-family: 'Vujahday Script', cursive; */
  /* font-family: 'Yanone Kaffeesatz', sans-serif; */
}