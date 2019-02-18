/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/blocks.js":
/*!**************************!*\
  !*** ./assets/blocks.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {



__webpack_require__(/*! ./blocks/accordion */ "./assets/blocks/accordion.js");
__webpack_require__(/*! ./blocks/accordion-element */ "./assets/blocks/accordion-element.js");
__webpack_require__(/*! ./blocks/anchor */ "./assets/blocks/anchor.js");
__webpack_require__(/*! ./blocks/button */ "./assets/blocks/button.js");
__webpack_require__(/*! ./blocks/column */ "./assets/blocks/column.js");
__webpack_require__(/*! ./blocks/column-lg */ "./assets/blocks/column-lg.js");
__webpack_require__(/*! ./blocks/gray-box */ "./assets/blocks/gray-box.js");
__webpack_require__(/*! ./blocks/headline */ "./assets/blocks/headline.js");
__webpack_require__(/*! ./blocks/hero */ "./assets/blocks/hero.js");
__webpack_require__(/*! ./blocks/image-card */ "./assets/blocks/image-card.js");
__webpack_require__(/*! ./blocks/nxb-quote */ "./assets/blocks/nxb-quote.js");
__webpack_require__(/*! ./blocks/section */ "./assets/blocks/section.js");
__webpack_require__(/*! ./blocks/nxb-textblock */ "./assets/blocks/nxb-textblock.js");
__webpack_require__(/*! ./blocks/nxb-columns-1-1 */ "./assets/blocks/nxb-columns-1-1.js");
__webpack_require__(/*! ./blocks/nxb-columns-1-1-1 */ "./assets/blocks/nxb-columns-1-1-1.js");
__webpack_require__(/*! ./blocks/nxb-columns-1-1-1-1 */ "./assets/blocks/nxb-columns-1-1-1-1.js");
__webpack_require__(/*! ./blocks/nxb-content-right-block */ "./assets/blocks/nxb-content-right-block.js");
__webpack_require__(/*! ./blocks/nxb-tab-block */ "./assets/blocks/nxb-tab-block.js");
__webpack_require__(/*! ./blocks/nxb-card */ "./assets/blocks/nxb-card.js");
__webpack_require__(/*! ./blocks/nxb-review-block */ "./assets/blocks/nxb-review-block.js");
__webpack_require__(/*! ./blocks/nxb-mail */ "./assets/blocks/nxb-mail.js");
__webpack_require__(/*! ./blocks/nxb-telephone */ "./assets/blocks/nxb-telephone.js");

/***/ }),

/***/ "./assets/blocks/accordion-element.js":
/*!********************************************!*\
  !*** ./assets/blocks/accordion-element.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/accordion-element', {
	title: 'STB Accordion element',
	icon: 'index-card',
	category: 'common',

	parent: ['nxb-blocks/accordion'],

	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: '.block-accordion-element-header'
		},
		background: {
			type: 'string',
			default: 'page'
		}
	},

	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    className = _ref.className,
		    setAttributes = _ref.setAttributes;
		var title = attributes.title;


		return [wp.element.createElement(
			'div',
			{ className: classNames([className, 'block', 'block-accordion-element']) },
			wp.element.createElement(RichText, {
				tagName: 'div',
				className: 'block-accordion-element-header',
				placeholder: 'Title',
				value: title,
				role: 'tab',
				onChange: function onChange(value) {
					setAttributes({ title: value });
				}
			}),
			wp.element.createElement(
				'div',
				{ className: 'block-accordion-element-content', role: 'tabpanel' },
				wp.element.createElement(InnerBlocks, null)
			)
		)];
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes;
		var title = attributes.title;


		return wp.element.createElement(
			'div',
			{ className: 'block block-accordion-element' },
			wp.element.createElement(RichText.Content, {
				tagName: 'div',
				className: 'block-accordion-element-header',
				value: title,
				role: 'tab'
			}),
			wp.element.createElement(
				'div',
				{ className: 'block-accordion-element-content', role: 'tabpanel' },
				wp.element.createElement(InnerBlocks.Content, null)
			)
		);
	}
});

/***/ }),

/***/ "./assets/blocks/accordion.js":
/*!************************************!*\
  !*** ./assets/blocks/accordion.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;
// const {SelectControl, BaseControl, Panel, PanelBody, ToggleControl} = wp.components;
// const {Fragment} = wp.element;

var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/accordion', {
	title: 'STB Accordion',
	icon: 'feedback',
	category: 'common',

	edit: function edit(_ref) {
		var className = _ref.className;


		return [wp.element.createElement(
			'div',
			{
				className: classNames([className, 'block', 'block-accordion']),
				role: 'tablist' },
			wp.element.createElement(InnerBlocks, {
				allowedBlocks: ['nxb-blocks/accordion-element'],
				template: [['nxb-blocks/accordion-element', {}]]
			})
		)];
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes;
		var title = attributes.title,
		    background = attributes.background;


		return wp.element.createElement(
			'div',
			{ className: 'block block-accordion' },
			wp.element.createElement(InnerBlocks.Content, null)
		);
	}
});

/***/ }),

/***/ "./assets/blocks/anchor.js":
/*!*********************************!*\
  !*** ./assets/blocks/anchor.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;


registerBlockType('nxb-blocks/anchor', {
	title: 'STB Anchor',
	icon: 'sticky',
	category: 'common',

	attributes: {
		identifier: {
			type: 'string',
			default: ''
		}
	},

	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    className = _ref.className,
		    setAttributes = _ref.setAttributes;
		var identifier = attributes.identifier;


		return [wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: 'Settings' },
				wp.element.createElement(TextControl, {
					label: 'Identifier',
					value: identifier,
					onChange: function onChange(value) {
						setAttributes({ identifier: value });
					}
				})
			)
		), wp.element.createElement(
			'div',
			{ className: className + ' block block-anchor', id: identifier },
			wp.element.createElement(
				'div',
				{ className: 'backend-description' },
				'Anchor: Use with #',
				identifier
			)
		)];
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes;
		var identifier = attributes.identifier;


		return wp.element.createElement('div', { className: 'block block-anchor', id: identifier });
	}
});

/***/ }),

/***/ "./assets/blocks/button.js":
/*!*********************************!*\
  !*** ./assets/blocks/button.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/button', {
	title: 'STB Button',
	icon: 'index-card',
	category: 'common',

	attributes: {
		text: {
			type: 'array',
			source: 'children',
			selector: '.block-button-text'
		},
		link: {
			type: 'string',
			default: ''
		},
		linkTargetBlank: {
			type: 'boolean',
			default: false
		},
		align: {
			type: 'string',
			default: ''
		}
	},

	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    className = _ref.className,
		    setAttributes = _ref.setAttributes;
		var text = attributes.text,
		    link = attributes.link,
		    align = attributes.align,
		    linkTargetBlank = attributes.linkTargetBlank;


		return [wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: 'Settings' },
				wp.element.createElement(TextControl, {
					label: 'Link',
					value: link,
					onChange: function onChange(value) {
						setAttributes({ link: value });
					}
				}),
				wp.element.createElement(ToggleControl, {
					label: 'Open link in new window',
					checked: linkTargetBlank,
					onChange: function onChange(value) {
						setAttributes({ linkTargetBlank: value });
					}
				}),
				wp.element.createElement(SelectControl, {
					label: 'Alignment',
					value: align,
					options: [{ label: 'Left', value: '' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
					onChange: function onChange(value) {
						setAttributes({ align: value });
					}
				})
			)
		), wp.element.createElement(
			'div',
			{ className: classNames([className, 'block', 'block-button-block', align ? 'text-' + align : false]) },
			wp.element.createElement(RichText, {
				tagName: 'span',
				className: classNames(['block-button', 'block-button-text']),
				placeholder: 'Text',
				value: text,
				onChange: function onChange(value) {
					setAttributes({ text: value });
				},
				formattingControls: ['italic']
			})
		)];
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes;
		var text = attributes.text,
		    link = attributes.link,
		    align = attributes.align,
		    linkTargetBlank = attributes.linkTargetBlank;


		return wp.element.createElement(
			'div',
			{ className: classNames(['block', 'block-button-block', align ? 'text-' + align : false]) },
			wp.element.createElement(RichText.Content, {
				tagName: 'a',
				className: classNames(['block-button', 'block-button-text']),
				value: text,
				href: link,
				target: linkTargetBlank ? '_blank' : ''
			})
		);
	}
});

/***/ }),

/***/ "./assets/blocks/column-lg.js":
/*!************************************!*\
  !*** ./assets/blocks/column-lg.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

function generateClass(attributes) {
    var size = attributes.size,
        breakingPoint = attributes.breakingPoint,
        classOverwrite = attributes.classOverwrite;


    if (classOverwrite !== '') {
        return classOverwrite;
    }
    var classes = ['block-column', 'col-' + breakingPoint + '-' + size];

    return classNames(classes);
}

registerBlockType('nxb-blocks/column-lg', {
    title: 'STB Columns (two)',
    icon: 'columns',
    category: 'common',
    parent: ['nxb-blocks/columns-1-1', 'nxb-blocks/columns-1-2'],

    attributes: {
        size: {
            type: 'number',
            default: 6
        },
        breakingPoint: {
            type: 'string',
            default: 'lg'
        },
        classOverwrite: {
            type: 'string',
            default: ''
        }
    },

    edit: function edit(_ref) {
        var attributes = _ref.attributes;


        return wp.element.createElement(
            'div',
            { className: generateClass(attributes) },
            wp.element.createElement(InnerBlocks, { templateLock: false })
        );
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes;

        return wp.element.createElement(
            'div',
            { className: generateClass(attributes) },
            wp.element.createElement(InnerBlocks.Content, null)
        );
    }
});

/***/ }),

/***/ "./assets/blocks/column.js":
/*!*********************************!*\
  !*** ./assets/blocks/column.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

function generateClass(attributes) {
	var size = attributes.size,
	    breakingPoint = attributes.breakingPoint,
	    classOverwrite = attributes.classOverwrite;


	if (classOverwrite !== '') {
		return classOverwrite;
	}
	var classes = ['block-column', 'col-' + breakingPoint + '-' + size];

	return classNames(classes);
}

registerBlockType('nxb-blocks/column', {
	title: 'STB Columns (two)',
	icon: 'columns',
	category: 'common',
	parent: ['nxb-blocks/columns-1-1', 'nxb-blocks/columns-1-2'],

	attributes: {
		size: {
			type: 'number',
			default: 6
		},
		breakingPoint: {
			type: 'string',
			default: 'md'
		},
		classOverwrite: {
			type: 'string',
			default: ''
		}
	},

	edit: function edit(_ref) {
		var attributes = _ref.attributes;


		return wp.element.createElement(
			'div',
			{ className: generateClass(attributes) },
			wp.element.createElement(InnerBlocks, { templateLock: false })
		);
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes;

		return wp.element.createElement(
			'div',
			{ className: generateClass(attributes) },
			wp.element.createElement(InnerBlocks.Content, null)
		);
	}
});

/***/ }),

/***/ "./assets/blocks/gray-box.js":
/*!***********************************!*\
  !*** ./assets/blocks/gray-box.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/gray-box', {
	title: 'STB Gray box',
	icon: 'index-card',
	category: 'common',

	attributes: {
		suphead: {
			type: 'array',
			source: 'children',
			selector: '.block-gray-box-suphead'
		},
		headline: {
			type: 'array',
			source: 'children',
			selector: '.block-gray-box-headline'
		},
		subhead: {
			type: 'array',
			source: 'children',
			selector: '.block-gray-box-subhead'
		}
	},

	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    className = _ref.className,
		    setAttributes = _ref.setAttributes;
		var suphead = attributes.suphead,
		    headline = attributes.headline,
		    subhead = attributes.subhead;


		return [wp.element.createElement(
			'div',
			{ className: classNames([className, 'block', 'block-gray-box']) },
			wp.element.createElement(
				'div',
				{ className: 'row' },
				wp.element.createElement(
					'div',
					{ className: 'col-md-6 block-gray-box-content-left' },
					wp.element.createElement(RichText, {
						tagName: 'div',
						className: 'block-gray-box-suphead',
						placeholder: 'Superhead',
						value: suphead,
						onChange: function onChange(value) {
							setAttributes({ suphead: value });
						}
					}),
					wp.element.createElement(RichText, {
						tagName: 'div',
						className: 'block-gray-box-headline',
						placeholder: 'Headline',
						value: headline,
						onChange: function onChange(value) {
							setAttributes({ headline: value });
						}
					}),
					wp.element.createElement(RichText, {
						tagName: 'div',
						className: 'block-gray-box-subhead',
						placeholder: 'Infos',
						value: subhead,
						onChange: function onChange(value) {
							setAttributes({ subhead: value });
						}
					})
				),
				wp.element.createElement(
					'div',
					{ className: 'col-md-6 block-gray-box-content-right text-right' },
					wp.element.createElement(
						'div',
						{ className: 'block-gray-box-content-right-content' },
						wp.element.createElement(InnerBlocks, null)
					)
				)
			)
		)];
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes;
		var suphead = attributes.suphead,
		    headline = attributes.headline,
		    subhead = attributes.subhead;


		return wp.element.createElement(
			'div',
			{ className: classNames(['block', 'block-gray-box']) },
			wp.element.createElement(
				'div',
				{ className: 'row' },
				wp.element.createElement(
					'div',
					{ className: 'col-md-6 block-gray-box-content-left' },
					wp.element.createElement(RichText.Content, {
						tagName: 'div',
						className: 'block-gray-box-suphead',
						value: suphead
					}),
					wp.element.createElement(RichText.Content, {
						tagName: 'div',
						className: 'block-gray-box-headline',
						value: headline
					}),
					wp.element.createElement(RichText.Content, {
						tagName: 'div',
						className: 'block-gray-box-subhead',
						value: subhead
					})
				),
				wp.element.createElement(
					'div',
					{ className: 'col-md-6 block-gray-box-content-right' },
					wp.element.createElement(
						'div',
						{ className: 'block-gray-box-content-right-content' },
						wp.element.createElement(InnerBlocks.Content, null)
					)
				)
			)
		);
	}
});

/***/ }),

/***/ "./assets/blocks/headline.js":
/*!***********************************!*\
  !*** ./assets/blocks/headline.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/headline', {
	title: 'STB Headline',
	icon: 'editor-textcolor',
	category: 'common',

	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: '.block-headline-headline'
		},
		suphead: {
			type: 'array',
			source: 'children',
			selector: '.block-headline-suphead'
		}
	},

	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    className = _ref.className,
		    setAttributes = _ref.setAttributes;
		var title = attributes.title,
		    suphead = attributes.suphead;


		return [wp.element.createElement(
			'div',
			{ className: classNames([className, 'block', 'block-headline']) },
			wp.element.createElement(RichText, {
				tagName: 'div',
				className: 'block-headline-suphead suphead',
				placeholder: 'Above headline',
				value: suphead,
				onChange: function onChange(value) {
					setAttributes({ suphead: value });
				}
			}),
			wp.element.createElement(RichText, {
				tagName: 'h2',
				className: 'block-headline-headline',
				placeholder: 'Headline',
				value: title,
				onChange: function onChange(value) {
					setAttributes({ title: value });
				}
			})
		)];
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes;
		var title = attributes.title,
		    suphead = attributes.suphead;


		return wp.element.createElement(
			'div',
			{ className: classNames(['block', 'block-headline']) },
			wp.element.createElement(RichText.Content, {
				tagName: 'div',
				className: 'block-headline-suphead suphead',
				value: suphead
			}),
			wp.element.createElement(RichText.Content, {
				tagName: 'h2',
				className: 'block-headline-headline',
				value: title
			})
		);
	}
});

/***/ }),

/***/ "./assets/blocks/hero.js":
/*!*******************************!*\
  !*** ./assets/blocks/hero.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/hero', {
	title: 'STB Hero',
	icon: 'format-image',
	category: 'common',

	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h1'
		},
		mediaID: {
			type: 'number'
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src'
		},
		subhead: {
			type: 'array',
			source: 'children',
			selector: '.subhead'
		},
		textInvert: {
			type: 'boolean',
			default: true
		},
		textShadow: {
			type: 'boolean',
			default: false
		}
	},

	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    className = _ref.className,
		    setAttributes = _ref.setAttributes;
		var title = attributes.title,
		    mediaID = attributes.mediaID,
		    mediaURL = attributes.mediaURL,
		    subhead = attributes.subhead,
		    textInvert = attributes.textInvert,
		    textShadow = attributes.textShadow;


		return [wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: 'Settings' },
				wp.element.createElement(ToggleControl, {
					label: 'Invert text',
					checked: textInvert,
					onChange: function onChange(value) {
						setAttributes({ textInvert: value });
					}
				}),
				wp.element.createElement(ToggleControl, {
					label: 'Shadow behind text',
					checked: textShadow,
					onChange: function onChange(value) {
						setAttributes({ textShadow: value });
					}
				})
			)
		), wp.element.createElement(
			'div',
			{ className: className + ' block block-hero' },
			wp.element.createElement(MediaUpload, {
				onSelect: function onSelect(media) {
					setAttributes({
						mediaURL: media.url,
						mediaID: media.id
					});
				},
				type: 'image',
				value: mediaID,
				className: 'block-hero-bgimg',
				render: function render(_ref2) {
					var open = _ref2.open;
					return wp.element.createElement(
						Button,
						{ className: mediaID ? 'image-button' : 'button button-large', onClick: open },
						!mediaID ? 'Upload Image' : wp.element.createElement('img', { src: mediaURL, alt: 'Upload Image' })
					);
				}
			}),
			wp.element.createElement(
				'div',
				{ className: classNames(['container', 'block-hero-textcontainer', 'text-center']) },
				wp.element.createElement(
					'div',
					{ className: 'row justify-content-center' },
					wp.element.createElement(RichText, {
						tagName: 'h1',
						className: 'block-hero-headline',
						placeholder: 'Headline',
						value: title,
						onChange: function onChange(value) {
							setAttributes({ title: value });
						}
					})
				),
				wp.element.createElement(RichText, {
					tagName: 'div',
					className: 'subhead',
					placeholder: 'Subhead',
					value: subhead,
					onChange: function onChange(value) {
						setAttributes({ subhead: value });
					}
				})
			)
		)];
	},
	save: function save(_ref3) {
		var attributes = _ref3.attributes;
		var title = attributes.title,
		    mediaURL = attributes.mediaURL,
		    subhead = attributes.subhead,
		    textInvert = attributes.textInvert,
		    textShadow = attributes.textShadow;


		return wp.element.createElement(
			'div',
			{ className: classNames(['block', 'block-hero', textShadow ? 'text-shadow' : false]) },
			mediaURL && wp.element.createElement('img', { className: 'block-hero-bgimg', src: mediaURL, alt: title }),
			wp.element.createElement(
				'div',
				{ className: classNames(['container', 'block-hero-textcontainer', textInvert ? 'text-invert' : false, textShadow ? 'text-shadow' : false, 'text-center']) },
				wp.element.createElement(
					'div',
					{ className: 'row justify-content-center' },
					wp.element.createElement(RichText.Content, {
						tagName: 'h1',
						className: 'block-hero-headline',
						value: title
					})
				),
				wp.element.createElement(RichText.Content, {
					tagName: 'div',
					className: 'subhead',
					value: subhead
				})
			)
		);
	}
});

/***/ }),

/***/ "./assets/blocks/image-card.js":
/*!*************************************!*\
  !*** ./assets/blocks/image-card.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/image-card', {
	title: 'STB Card (image)',
	icon: 'index-card',
	category: 'common',

	attributes: {
		emblem: {
			type: 'array',
			source: 'children',
			selector: '.block-image-card-emblem'
		},
		title: {
			type: 'array',
			source: 'children',
			selector: '.block-image-card-headline'
		},
		text: {
			type: 'array',
			source: 'children',
			selector: '.block-image-card-text-element'
		},
		mediaID: {
			type: 'number'
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src'
		},
		link: {
			type: 'string',
			default: ''
		}
	},

	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    className = _ref.className,
		    setAttributes = _ref.setAttributes;
		var title = attributes.title,
		    text = attributes.text,
		    emblem = attributes.emblem,
		    mediaID = attributes.mediaID,
		    mediaURL = attributes.mediaURL,
		    link = attributes.link;


		return [wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: 'Settings' },
				wp.element.createElement(TextControl, {
					label: 'Link',
					value: link,
					onChange: function onChange(value) {
						setAttributes({ link: value });
					}
				})
			)
		), wp.element.createElement(
			'div',
			{ className: classNames([className, 'block', 'block-image-card']) },
			wp.element.createElement(
				'div',
				{ className: 'block-image-card-image' },
				wp.element.createElement(MediaUpload, {
					onSelect: function onSelect(media) {
						setAttributes({
							mediaURL: media.url,
							mediaID: media.id
						});
					},
					type: 'image',
					value: mediaID,
					render: function render(_ref2) {
						var open = _ref2.open;
						return wp.element.createElement(
							Button,
							{ className: mediaID ? 'image-button' : 'button button-large', onClick: open },
							!mediaID ? 'Upload Image' : wp.element.createElement('img', { src: mediaURL, alt: 'Upload Image' })
						);
					}
				})
			),
			wp.element.createElement(
				'div',
				{ className: 'block-image-card-content' },
				wp.element.createElement(RichText, {
					tagName: 'div',
					className: 'block-image-card-emblem',
					placeholder: 'Emblem',
					value: emblem,
					onChange: function onChange(value) {
						setAttributes({ emblem: value });
					}
				}),
				wp.element.createElement(RichText, {
					tagName: 'div',
					className: 'block-image-card-headline',
					placeholder: 'Title',
					value: title,
					onChange: function onChange(value) {
						setAttributes({ title: value });
					}
				}),
				wp.element.createElement(
					'div',
					{ className: 'block-image-card-text' },
					wp.element.createElement(RichText, {
						tagName: 'p',
						className: 'block-image-card-text-element',
						placeholder: 'Placeholder text',
						value: text,
						onChange: function onChange(value) {
							setAttributes({ text: value });
						}
					})
				)
			)
		)];
	},
	save: function save(_ref3) {
		var attributes = _ref3.attributes;
		var title = attributes.title,
		    text = attributes.text,
		    emblem = attributes.emblem,
		    mediaURL = attributes.mediaURL,
		    link = attributes.link;

		// Conditionally wrap link

		var ContainerLink = function ContainerLink(_ref4) {
			var children = _ref4.children;

			if (link) {
				return wp.element.createElement(
					'a',
					{ href: link },
					children
				);
			} else {
				return children;
			}
		};

		return wp.element.createElement(
			'div',
			{ className: classNames(['block', 'block-image-card']) },
			wp.element.createElement(
				ContainerLink,
				null,
				wp.element.createElement(
					'div',
					{ className: 'block-image-card-image' },
					mediaURL && wp.element.createElement('img', { src: mediaURL, alt: title })
				),
				wp.element.createElement(
					'div',
					{ className: 'block-image-card-content' },
					wp.element.createElement(RichText.Content, {
						tagName: 'div',
						className: 'block-image-card-emblem',
						value: emblem
					}),
					wp.element.createElement(RichText.Content, {
						tagName: 'div',
						className: 'block-image-card-headline',
						value: title
					}),
					wp.element.createElement(
						'div',
						{ className: 'block-image-card-text' },
						wp.element.createElement(RichText.Content, {
							tagName: 'p',
							className: 'block-image-card-text-element',
							value: text
						})
					)
				)
			)
		);
	}
});

/***/ }),

/***/ "./assets/blocks/nxb-card.js":
/*!***********************************!*\
  !*** ./assets/blocks/nxb-card.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/nxb-card', {
    title: 'NXB Card',
    icon: 'index-card',
    category: 'common',

    attributes: {
        title: {
            type: 'string',
            default: ''
        },
        icon: {
            type: 'string',
            default: ''
        },
        text: {
            type: 'array',
            source: 'children',
            selector: '.block-contact-text'
        },
        link: {
            type: 'array',
            source: 'children',
            selector: '.block-contact-link'
        }
    },

    edit: function edit(_ref) {
        var attributes = _ref.attributes,
            className = _ref.className,
            setAttributes = _ref.setAttributes;
        var title = attributes.title,
            text = attributes.text,
            link = attributes.link,
            icon = attributes.icon;


        return [wp.element.createElement(
            InspectorControls,
            null,
            wp.element.createElement(
                PanelBody,
                { title: 'Settings' },
                wp.element.createElement(TextControl, {
                    label: 'Title',
                    value: title,
                    onChange: function onChange(value) {
                        setAttributes({ title: value });
                    }
                }),
                wp.element.createElement(SelectControl, {
                    label: 'Fontawesome icon',
                    value: icon,
                    options: [{ label: '-', value: '' }, { label: 'Twitter', value: 'fab fa-twitter' }, { label: 'Email', value: 'far fa-envelope' }, { label: 'Messenger', value: 'far fa-comment-alt' }, { label: 'Facebook', value: 'fab fa-facebook-f' }, { label: 'Instagram', value: 'fab fa-instagram' }],
                    onChange: function onChange(value) {
                        setAttributes({ icon: value });
                    }
                })
            )
        ), wp.element.createElement(
            'div',
            { className: classNames([className, 'block', 'block-big-card', 'bg-primary', 'card']) },
            wp.element.createElement(
                'div',
                { className: 'card-header' },
                wp.element.createElement('i', { className: icon }),
                wp.element.createElement(
                    'span',
                    { className: 'ml-2' },
                    title
                )
            ),
            wp.element.createElement(
                'div',
                { className: 'card-body' },
                wp.element.createElement(RichText, {
                    tagName: 'p',
                    className: 'block-contact-text',
                    placeholder: 'Text',
                    value: text,
                    onChange: function onChange(value) {
                        setAttributes({ text: value });
                    }
                }),
                wp.element.createElement(RichText, {
                    tagName: 'p',
                    className: 'h3 block-contact-link',
                    placeholder: 'Link',
                    value: link,
                    onChange: function onChange(value) {
                        setAttributes({ link: value });
                    }
                })
            )
        )];
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes;
        var title = attributes.title,
            text = attributes.text,
            link = attributes.link,
            icon = attributes.icon;


        return wp.element.createElement(
            'div',
            { className: 'block block-contact bg-primary card' },
            wp.element.createElement(
                'div',
                { className: 'card-header' },
                wp.element.createElement('i', { className: icon }),
                wp.element.createElement(
                    'span',
                    { className: 'ml-2' },
                    title
                )
            ),
            wp.element.createElement(
                'div',
                { className: 'card-body' },
                wp.element.createElement(RichText.Content, {
                    tagName: 'p',
                    className: 'block-contact-text',
                    value: text
                }),
                wp.element.createElement(RichText.Content, {
                    tagName: 'p',
                    className: 'h3 block-contact-link',
                    value: link
                })
            )
        );
    }
});

/***/ }),

/***/ "./assets/blocks/nxb-columns-1-1-1-1.js":
/*!**********************************************!*\
  !*** ./assets/blocks/nxb-columns-1-1-1-1.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/nxb-columns-1-1-1-1', {
    title: 'NXB Columns 1-1-1-1',
    icon: wp.element.createElement(
        'svg',
        { role: 'img', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        wp.element.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
        wp.element.createElement(
            'g',
            null,
            wp.element.createElement('path', { d: 'M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z' })
        )
    ),
    category: 'layout',
    attributes: {
        borderBottom: {
            type: 'boolean',
            default: false
        }
    },

    edit: function edit(_ref) {
        var attributes = _ref.attributes,
            className = _ref.className,
            setAttributes = _ref.setAttributes;
        var borderBottom = attributes.borderBottom;


        var template = [['nxb-blocks/column', { size: 3 }], ['nxb-blocks/column', { size: 3 }], ['nxb-blocks/column', { size: 3 }], ['nxb-blocks/column', { size: 3 }]];

        return [wp.element.createElement(
            InspectorControls,
            null,
            wp.element.createElement(
                PanelBody,
                { title: 'Settings' },
                wp.element.createElement(ToggleControl, {
                    label: 'Border bottom',
                    checked: borderBottom,
                    onChange: function onChange(value) {
                        setAttributes({ borderBottom: value });
                    }
                })
            )
        ), wp.element.createElement(
            'div',
            { className: classNames([className, 'block', 'block-columns-1-1-1-1', 'mt-4']) },
            wp.element.createElement(InnerBlocks, {
                template: template,
                templateLock: 'all',
                allowedBlocks: ['nxb-blocks/column']
            })
        )];
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes;
        var borderBottom = attributes.borderBottom;

        return wp.element.createElement(
            'div',
            { className: classNames(['block', 'block-columns-1-1-1-1', 'row', borderBottom ? 'block-columns-border-bottom' : false]) },
            wp.element.createElement(InnerBlocks.Content, null)
        );
    }
});

/***/ }),

/***/ "./assets/blocks/nxb-columns-1-1-1.js":
/*!********************************************!*\
  !*** ./assets/blocks/nxb-columns-1-1-1.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/nxb-columns-1-1-1', {
	title: 'NXB Columns 1-1-1',
	icon: wp.element.createElement(
		'svg',
		{ role: 'img', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
		wp.element.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
		wp.element.createElement(
			'g',
			null,
			wp.element.createElement('path', { d: 'M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z' })
		)
	),
	category: 'layout',
	attributes: {
		borderBottom: {
			type: 'boolean',
			default: false
		}
	},

	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    className = _ref.className,
		    setAttributes = _ref.setAttributes;
		var borderBottom = attributes.borderBottom;


		var template = [['nxb-blocks/column', { size: 4 }], ['nxb-blocks/column', { size: 4 }], ['nxb-blocks/column', { size: 4 }]];

		return [wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: 'Settings' },
				wp.element.createElement(ToggleControl, {
					label: 'Border bottom',
					checked: borderBottom,
					onChange: function onChange(value) {
						setAttributes({ borderBottom: value });
					}
				})
			)
		), wp.element.createElement(
			'div',
			{ className: classNames([className, 'block', 'block-columns-1-1-1', 'mt-4']) },
			wp.element.createElement(InnerBlocks, {
				template: template,
				templateLock: 'all',
				allowedBlocks: ['nxb-blocks/column']
			})
		)];
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes;
		var borderBottom = attributes.borderBottom;

		return wp.element.createElement(
			'div',
			{ className: classNames(['block', 'block-columns-1-1-1', 'row', borderBottom ? 'block-columns-border-bottom' : false]) },
			wp.element.createElement(InnerBlocks.Content, null)
		);
	}
});

/***/ }),

/***/ "./assets/blocks/nxb-columns-1-1.js":
/*!******************************************!*\
  !*** ./assets/blocks/nxb-columns-1-1.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/nxb-columns-1-1', {
	title: 'NXB Columns 1-1',
	icon: wp.element.createElement(
		'svg',
		{ role: 'img', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
		wp.element.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
		wp.element.createElement(
			'g',
			null,
			wp.element.createElement('path', { d: 'M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z' })
		)
	),
	category: 'layout',

	edit: function edit(_ref) {
		var className = _ref.className;


		var template = [['nxb-blocks/column', { size: 6 }], ['nxb-blocks/column', { size: 6 }]];

		return [wp.element.createElement(
			'div',
			{ className: classNames([className, 'block', 'block-columns-1-1', 'row']) },
			wp.element.createElement(InnerBlocks, {
				template: template,
				templateLock: 'all',
				allowedBlocks: ['nxb-blocks/column']
			})
		)];
	},
	save: function save() {
		return wp.element.createElement(
			'div',
			{ className: classNames(['block', 'block-columns-1-1', 'row']) },
			wp.element.createElement(InnerBlocks.Content, null)
		);
	}
});

/***/ }),

/***/ "./assets/blocks/nxb-content-right-block.js":
/*!**************************************************!*\
  !*** ./assets/blocks/nxb-content-right-block.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/nxb-content-right', {
    title: 'NXB Content Right',
    icon: 'index-card',
    category: 'common',

    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: '.block-content-right-headline'
        }
    },

    edit: function edit(_ref) {
        var attributes = _ref.attributes,
            className = _ref.className,
            setAttributes = _ref.setAttributes;
        var title = attributes.title;


        return [wp.element.createElement(
            'div',
            { className: classNames([className, 'block', 'block-big-card']) },
            wp.element.createElement(
                'div',
                { className: 'row' },
                wp.element.createElement(
                    'div',
                    { className: 'col-lg-4 mt-2' },
                    wp.element.createElement(RichText, {
                        tagName: 'h2',
                        className: 'block-content-right-headline',
                        placeholder: 'Headline',
                        value: title,
                        onChange: function onChange(value) {
                            setAttributes({ title: value });
                        }
                    })
                ),
                wp.element.createElement(
                    'div',
                    { className: 'col-lg-8 mt-2' },
                    wp.element.createElement(InnerBlocks, null)
                )
            )
        )];
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes;
        var title = attributes.title;


        return wp.element.createElement(
            'div',
            { className: 'block block-content-right block-padding' },
            wp.element.createElement(
                'div',
                { className: 'container' },
                wp.element.createElement(
                    'div',
                    { className: 'row' },
                    wp.element.createElement(
                        'div',
                        { className: 'col-lg-4 mt-2' },
                        wp.element.createElement(RichText.Content, {
                            tagName: 'h2',
                            className: 'block-content-right-headline',
                            value: title
                        })
                    ),
                    wp.element.createElement(
                        'div',
                        { className: 'col-lg-8 mt-2' },
                        wp.element.createElement(InnerBlocks.Content, null)
                    )
                )
            )
        );
    }
});

/***/ }),

/***/ "./assets/blocks/nxb-mail.js":
/*!***********************************!*\
  !*** ./assets/blocks/nxb-mail.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/nxb-mail', {
    title: 'NXB Mail',
    icon: 'index-card',
    category: 'common',

    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: '.block-contact-logo'
        },
        text: {
            type: 'array',
            source: 'children',
            selector: '.block-contact-text'
        },
        link: {
            type: 'array',
            source: 'children',
            selector: '.block-contact-link'
        }
    },

    edit: function edit(_ref) {
        var attributes = _ref.attributes,
            className = _ref.className,
            setAttributes = _ref.setAttributes;
        var title = attributes.title,
            text = attributes.text,
            link = attributes.link;


        return [wp.element.createElement(
            'div',
            { className: classNames([className, 'block', 'block-big-card', 'bg-primary', 'card']) },
            wp.element.createElement(
                'div',
                { className: 'card-header' },
                wp.element.createElement(RichText, {
                    tagName: 'span',
                    className: 'h2 block-contact-logo ml-2',
                    placeholder: 'Headline',
                    value: title,
                    onChange: function onChange(value) {
                        setAttributes({ title: value });
                    }
                })
            ),
            wp.element.createElement(
                'div',
                { className: 'card-body' },
                wp.element.createElement(RichText, {
                    tagName: 'p',
                    className: 'block-contact-text',
                    placeholder: 'Text',
                    value: text,
                    onChange: function onChange(value) {
                        setAttributes({ text: value });
                    }
                }),
                wp.element.createElement(RichText, {
                    tagName: 'p',
                    className: 'h3 block-contact-link',
                    placeholder: 'Link',
                    value: link,
                    onChange: function onChange(value) {
                        setAttributes({ link: value });
                    }
                })
            )
        )];
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes;
        var title = attributes.title,
            text = attributes.text,
            link = attributes.link;

        return wp.element.createElement(
            'div',
            { className: 'block block-contact bg-primary card' },
            wp.element.createElement(
                'div',
                { className: 'card-header' },
                wp.element.createElement(
                    'i',
                    { className: 'far fa-envelope' },
                    wp.element.createElement(RichText.Content, {
                        tagName: 'span',
                        className: 'h2 block-contact-logo ml-2',
                        value: title
                    })
                )
            ),
            wp.element.createElement(
                'div',
                { className: 'card-body' },
                wp.element.createElement(RichText.Content, {
                    tagName: 'p',
                    className: 'block-contact-text',
                    value: text
                }),
                wp.element.createElement(RichText.Content, {
                    tagName: 'p',
                    className: 'h3 block-contact-link',
                    value: link
                })
            )
        );
    }
});

/***/ }),

/***/ "./assets/blocks/nxb-quote.js":
/*!************************************!*\
  !*** ./assets/blocks/nxb-quote.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/quote', {
    title: 'NXB Quote',
    icon: 'format-quote',
    category: 'common',

    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: '.block-quote-content'
        },
        author: {
            type: 'array',
            source: 'children',
            selector: '.block-quote-author'
        }
    },

    edit: function edit(_ref) {
        var attributes = _ref.attributes,
            className = _ref.className,
            setAttributes = _ref.setAttributes;
        var content = attributes.content,
            author = attributes.author;


        return [wp.element.createElement(
            'div',
            { className: classNames([className, 'block', 'block-quote']) },
            wp.element.createElement(RichText, {
                tagName: 'p',
                className: 'block-quote-content',
                placeholder: 'Quote',
                value: content,
                onChange: function onChange(value) {
                    setAttributes({ content: value });
                }
            }),
            wp.element.createElement(RichText, {
                tagName: 'p',
                className: 'block-quote-author',
                placeholder: 'Author',
                value: author,
                onChange: function onChange(value) {
                    setAttributes({ author: value });
                }
            })
        )];
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes;
        var content = attributes.content,
            author = attributes.author;


        return wp.element.createElement(
            'div',
            { className: classNames(['block', 'block-quote', 'bg-primary']) },
            wp.element.createElement(
                'div',
                { className: 'container' },
                wp.element.createElement(RichText.Content, {
                    tagName: 'p',
                    className: 'text-center block-quote-content px-5',
                    value: content
                }),
                wp.element.createElement(RichText.Content, {
                    tagName: 'p',
                    className: 'block-quote-author',
                    value: author
                })
            )
        );
    }
});

/***/ }),

/***/ "./assets/blocks/nxb-review-block.js":
/*!*******************************************!*\
  !*** ./assets/blocks/nxb-review-block.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/nxb-review-block', {
    title: 'NXB Review',
    icon: 'index-card',
    category: 'common',

    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: '.block-text-headline'
        },
        link: {
            type: 'array',
            source: 'children',
            selector: '.block-review-link'
        }
    },

    edit: function edit(_ref) {
        var attributes = _ref.attributes,
            className = _ref.className,
            setAttributes = _ref.setAttributes;
        var title = attributes.title,
            link = attributes.link;


        return [wp.element.createElement(
            'div',
            { className: classNames([className, 'block', 'block-big-card']) },
            wp.element.createElement(
                'div',
                { className: '' },
                wp.element.createElement(RichText, {
                    tagName: 'h2',
                    className: '',
                    placeholder: 'Headline',
                    value: title,
                    onChange: function onChange(value) {
                        setAttributes({ title: value });
                    }
                })
            ),
            wp.element.createElement(
                'div',
                { className: '' },
                wp.element.createElement(InnerBlocks, null)
            ),
            wp.element.createElement(
                'div',
                null,
                wp.element.createElement(RichText, {
                    tagName: 'p',
                    className: 'block-review-link',
                    placeholder: 'Link',
                    value: link,
                    onChange: function onChange(value) {
                        setAttributes({ link: value });
                    }
                })
            )
        )];
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes;
        var title = attributes.title,
            link = attributes.link;


        return wp.element.createElement(
            'div',
            { className: 'block block-review block-padding bg-dark' },
            wp.element.createElement(
                'div',
                { className: 'container' },
                wp.element.createElement(
                    'div',
                    { className: 'text-center' },
                    wp.element.createElement(RichText.Content, {
                        tagName: 'h2',
                        className: '',
                        value: title
                    })
                ),
                wp.element.createElement(
                    'div',
                    { className: '' },
                    wp.element.createElement(InnerBlocks.Content, null)
                ),
                wp.element.createElement(
                    'div',
                    { className: 'text-center' },
                    wp.element.createElement(RichText.Content, {
                        tagName: 'p',
                        className: 'block-review-link',
                        value: link
                    })
                )
            )
        );
    }
});

/***/ }),

/***/ "./assets/blocks/nxb-tab-block.js":
/*!****************************************!*\
  !*** ./assets/blocks/nxb-tab-block.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;
// const {SelectControl, BaseControl, Panel, PanelBody, ToggleControl} = wp.components;
// const {Fragment} = wp.element;

var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/nxb-tab-block', {
    title: 'NXB Tab Block',
    icon: 'feedback',
    category: 'common',

    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: '.block-text-headline'
        },
        text: {
            type: 'array',
            source: 'children',
            selector: '.block-review-link'
        }
    },

    edit: function edit(_ref) {
        var className = _ref.className;


        return [wp.element.createElement(
            'div',
            {
                className: classNames([className, 'block', 'block-tab']) },
            wp.element.createElement(
                'div',
                null,
                wp.element.createElement(RichText, {
                    tagName: 'h2',
                    className: '',
                    placeholder: 'Headline',
                    value: title,
                    onChange: function onChange(value) {
                        setAttributes({ title: value });
                    }
                })
            ),
            wp.element.createElement(
                'div',
                null,
                wp.element.createElement(RichText, {
                    tagName: 'p',
                    className: 'block-tab-text',
                    placeholder: 'Text',
                    value: text,
                    onChange: function onChange(value) {
                        setAttributes({ text: value });
                    }
                })
            ),
            wp.element.createElement(
                'div',
                { role: 'tablist' },
                wp.element.createElement(InnerBlocks, {
                    allowedBlocks: ['nxb-blocks/tab-element'],
                    template: [['nxb-blocks/tab-element', {}]]
                })
            )
        )];
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes;
        var title = attributes.title,
            text = attributes.text;


        return wp.element.createElement(
            'div',
            { className: 'block block-tab' },
            wp.element.createElement(
                'div',
                { className: 'container' },
                wp.element.createElement(
                    'div',
                    { className: 'text-center' },
                    wp.element.createElement(RichText.Content, {
                        tagName: 'h2',
                        className: '',
                        value: title
                    })
                ),
                wp.element.createElement(
                    'div',
                    { className: 'text-center' },
                    wp.element.createElement(RichText.Content, {
                        tagName: 'p',
                        className: 'block-tab-text',
                        value: text
                    })
                ),
                wp.element.createElement(
                    'div',
                    null,
                    wp.element.createElement(InnerBlocks.Content, null)
                )
            )
        );
    }
});

/***/ }),

/***/ "./assets/blocks/nxb-telephone.js":
/*!****************************************!*\
  !*** ./assets/blocks/nxb-telephone.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/nxb-telephone', {
    title: 'NXB Telephone',
    icon: 'index-card',
    category: 'common',

    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: '.block-contact-logo'
        },
        text: {
            type: 'array',
            source: 'children',
            selector: '.block-contact-text'
        },
        link: {
            type: 'array',
            source: 'children',
            selector: '.block-contact-link'
        }
    },

    edit: function edit(_ref) {
        var attributes = _ref.attributes,
            className = _ref.className,
            setAttributes = _ref.setAttributes;
        var title = attributes.title,
            text = attributes.text,
            link = attributes.link;


        return [wp.element.createElement(
            'div',
            { className: classNames([className, 'block', 'block-big-card', 'bg-primary', 'card']) },
            wp.element.createElement(
                'div',
                { className: 'card-header' },
                wp.element.createElement(RichText, {
                    tagName: 'span',
                    className: 'h2 block-contact-logo ml-2',
                    placeholder: 'Headline',
                    value: title,
                    onChange: function onChange(value) {
                        setAttributes({ title: value });
                    }
                })
            ),
            wp.element.createElement(
                'div',
                { className: 'card-body' },
                wp.element.createElement(RichText, {
                    tagName: 'p',
                    className: 'block-contact-text',
                    placeholder: 'Text',
                    value: text,
                    onChange: function onChange(value) {
                        setAttributes({ text: value });
                    }
                }),
                wp.element.createElement(RichText, {
                    tagName: 'p',
                    className: 'h3 block-contact-link',
                    placeholder: 'Link',
                    value: link,
                    onChange: function onChange(value) {
                        setAttributes({ link: value });
                    }
                })
            )
        )];
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes;
        var title = attributes.title,
            text = attributes.text,
            link = attributes.link;


        return wp.element.createElement(
            'div',
            { className: 'block block-contact bg-primary card' },
            wp.element.createElement(
                'div',
                { className: 'card-header' },
                wp.element.createElement(
                    'i',
                    { className: 'far fa-comment-alt' },
                    wp.element.createElement(RichText.Content, {
                        tagName: 'span',
                        className: 'h2 block-contact-logo ml-2',
                        value: title
                    })
                )
            ),
            wp.element.createElement(
                'div',
                { className: 'card-body' },
                wp.element.createElement(RichText.Content, {
                    tagName: 'p',
                    className: 'block-contact-text',
                    value: text
                }),
                wp.element.createElement(RichText.Content, {
                    tagName: 'p',
                    className: 'h3 block-contact-link',
                    value: link
                })
            )
        );
    }
});

/***/ }),

/***/ "./assets/blocks/nxb-textblock.js":
/*!****************************************!*\
  !*** ./assets/blocks/nxb-textblock.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;
// const {SelectControl, BaseControl, Panel, PanelBody, ToggleControl} = wp.components;
// const {Fragment} = wp.element;

var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/nxb-textblock', {
    title: 'NXB Textblock',
    icon: 'index-card',
    category: 'common',

    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: '.block-text-headline'
        },
        text: {
            type: 'array',
            source: 'children',
            selector: '.block-text-text'
        }
    },

    edit: function edit(_ref) {
        var attributes = _ref.attributes,
            className = _ref.className,
            setAttributes = _ref.setAttributes;
        var title = attributes.title,
            text = attributes.text;


        return [wp.element.createElement(
            'div',
            { className: classNames([className, 'block', 'block-text']) },
            wp.element.createElement(
                'div',
                { className: 'row' },
                wp.element.createElement(
                    'div',
                    { className: 'col-sm-8 mt-2' },
                    wp.element.createElement(RichText, {
                        tagName: 'h2',
                        className: 'block-text-headline',
                        placeholder: 'Headline',
                        value: title,
                        onChange: function onChange(value) {
                            setAttributes({ title: value });
                        }
                    })
                ),
                wp.element.createElement(
                    'div',
                    { className: 'col-sm-4 mt-2' },
                    wp.element.createElement(RichText, {
                        tagName: 'p',
                        className: 'block-text-text',
                        placeholder: 'Text',
                        value: text,
                        onChange: function onChange(value) {
                            setAttributes({ text: value });
                        }
                    })
                )
            )
        )];
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes;
        var title = attributes.title,
            text = attributes.text;


        return wp.element.createElement(
            'div',
            { className: 'block block-text' },
            wp.element.createElement(
                'div',
                { className: 'container' },
                wp.element.createElement(
                    'div',
                    { className: 'row' },
                    wp.element.createElement(
                        'div',
                        { className: 'col-sm-4 mt-2' },
                        wp.element.createElement(RichText.Content, {
                            tagName: 'h2',
                            className: 'block-text-headline',
                            value: title
                        })
                    ),
                    wp.element.createElement(
                        'div',
                        { className: 'col-sm-8 mt-2' },
                        wp.element.createElement(RichText.Content, {
                            tagName: 'p',
                            className: 'block-text-text',
                            value: text
                        })
                    )
                )
            )
        );
    }
});

/***/ }),

/***/ "./assets/blocks/section.js":
/*!**********************************!*\
  !*** ./assets/blocks/section.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

registerBlockType('nxb-blocks/section', {
	title: 'STB Section',
	icon: 'align-center',
	category: 'layout',

	attributes: {
		background: {
			type: 'string',
			default: ''
		},
		padding: {
			type: 'boolean',
			default: true
		},
		paddingtop: {
			type: 'boolean',
			default: true
		},
		container: {
			type: 'boolean',
			default: true
		}
	},

	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    className = _ref.className,
		    setAttributes = _ref.setAttributes;
		var background = attributes.background,
		    padding = attributes.padding,
		    paddingtop = attributes.paddingtop,
		    container = attributes.container;


		return [wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: 'Settings' },
				wp.element.createElement(SelectControl, {
					label: 'Background color',
					value: background,
					options: [{ label: '-', value: '' }, { label: 'White', value: 'white' }, { label: 'Gray', value: 'gray' }, { label: 'Yellow', value: 'yellow' }],
					onChange: function onChange(value) {
						setAttributes({ background: value });
					}
				}),
				wp.element.createElement(ToggleControl, {
					label: 'Padding (top and bottom)',
					checked: padding,
					onChange: function onChange(value) {
						setAttributes({ padding: value });
					}
				}),
				wp.element.createElement(ToggleControl, {
					label: 'Padding (top)',
					checked: paddingtop,
					onChange: function onChange(value) {
						setAttributes({ paddingtop: value });
					}
				}),
				wp.element.createElement(ToggleControl, {
					label: 'Container (center vertically)',
					checked: container,
					onChange: function onChange(value) {
						setAttributes({ container: value });
					}
				})
			)
		), wp.element.createElement(
			'div',
			{ className: classNames([className, 'block', 'block-section', background ? 'section-' + background : false, padding ? 'block-padding' : false, paddingtop ? 'pt-4' : false]) },
			wp.element.createElement(InnerBlocks, null)
		)];
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes;
		var background = attributes.background,
		    padding = attributes.padding,
		    paddingtop = attributes.paddingtop,
		    container = attributes.container;

		// Conditionally wrap div.container

		var ContainerDiv = function ContainerDiv(_ref3) {
			var children = _ref3.children;

			if (container) {
				return wp.element.createElement(
					'div',
					{ className: 'container' },
					children
				);
			} else {
				return children;
			}
		};

		return wp.element.createElement(
			'div',
			{ className: classNames(['block', 'block-section', background ? 'section-' + background : false, padding ? 'block-padding' : false, paddingtop ? 'pt-4' : false]) },
			wp.element.createElement(
				ContainerDiv,
				null,
				wp.element.createElement(InnerBlocks.Content, null)
			)
		);
	}
});

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

/******/ });
//# sourceMappingURL=blocks.js.map