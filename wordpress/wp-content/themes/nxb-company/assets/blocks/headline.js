const {registerBlockType} = wp.blocks;
const {RichText, InspectorControls} = wp.editor;
const {SelectControl, PanelBody} = wp.components;

var classNames = require('classnames');


registerBlockType('nxb-blocks/headline', {
	title: 'STB Headline',
	icon: 'editor-textcolor',
	category: 'common',

	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: '.block-headline-headline',
		},
		suphead: {
			type: 'array',
			source: 'children',
			selector: '.block-headline-suphead',
		},
	},

	edit({attributes, className, setAttributes}) {
		const {title, suphead} = attributes;

		return [
			<div className={classNames([
				className,
				'block',
				'block-headline',
			])}>
				<RichText
					tagName="div"
					className="block-headline-suphead suphead"
					placeholder="Above headline"
					value={suphead}
					onChange={(value) => {
						setAttributes({suphead: value})
					}}
				/>
				<RichText
					tagName="h2"
					className="block-headline-headline"
					placeholder="Headline"
					value={title}
					onChange={(value) => {
						setAttributes({title: value})
					}}
				/>
			</div>
		];
	},

	save({attributes}) {
		const {title, suphead} = attributes;

		return (
			<div className={classNames([
				'block',
				'block-headline',
			])}>
				<RichText.Content
					tagName="div"
					className="block-headline-suphead suphead"
					value={suphead}
				/>
				<RichText.Content
					tagName="h2"
					className="block-headline-headline"
					value={title}
				/>
			</div>
		);

	},
});
