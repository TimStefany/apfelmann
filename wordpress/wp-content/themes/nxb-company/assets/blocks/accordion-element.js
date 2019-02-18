const {registerBlockType} = wp.blocks;
const {RichText, InnerBlocks, InspectorControls} = wp.editor;
const {SelectControl, PanelBody} = wp.components;

var classNames = require('classnames');


registerBlockType('nxb-blocks/accordion-element', {
	title: 'STB Accordion element',
	icon: 'index-card',
	category: 'common',

	parent: ['nxb-blocks/accordion'],

	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: '.block-accordion-element-header',
		},
		background: {
			type: 'string',
			default: 'page'
		},
	},

	edit({attributes, className, setAttributes}) {
		const {title} = attributes;

		return [
			<div className={classNames([
				className,
				'block',
				'block-accordion-element',
			])}>
				<RichText
					tagName="div"
					className='block-accordion-element-header'
					placeholder="Title"
					value={title}
					role="tab"
					onChange={(value) => {
						setAttributes({title: value})
					}}
				/>
				<div className="block-accordion-element-content" role="tabpanel">
					<InnerBlocks/>
				</div>
			</div>
		];
	},

	save({attributes}) {
		const {title} = attributes;

		return (
			<div className="block block-accordion-element">
				<RichText.Content
					tagName="div"
					className='block-accordion-element-header'
					value={title}
					role="tab"
				/>
				<div className="block-accordion-element-content" role="tabpanel">
					<InnerBlocks.Content/>
				</div>
			</div>
		);

	},
});
