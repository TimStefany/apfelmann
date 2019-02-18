const {registerBlockType} = wp.blocks;
const {RichText, InnerBlocks, InspectorControls} = wp.editor;
const {SelectControl, PanelBody, ToggleControl} = wp.components;
// const {SelectControl, BaseControl, Panel, PanelBody, ToggleControl} = wp.components;
// const {Fragment} = wp.element;

var classNames = require('classnames');


registerBlockType('nxb-blocks/accordion', {
	title: 'STB Accordion',
	icon: 'feedback',
	category: 'common',


	edit({className}) {

		return [
			<div
				className={classNames([
					className,
					'block',
					'block-accordion',
				])}
				role="tablist">
				<InnerBlocks
					allowedBlocks={['nxb-blocks/accordion-element']}
					template={[['nxb-blocks/accordion-element', {}]]}
				/>
			</div>
		];
	},

	save({attributes}) {
		const {title, background} = attributes;

		return (
			<div className="block block-accordion">
				<InnerBlocks.Content/>
			</div>
		);

	},
});
