const {registerBlockType} = wp.blocks;
const {RichText, InspectorControls} = wp.editor;
const {SelectControl, PanelBody, TextControl, ToggleControl} = wp.components;

const classNames = require('classnames');


registerBlockType('nxb-blocks/button', {
	title: 'STB Button',
	icon: 'index-card',
	category: 'common',

	attributes: {
		text: {
			type: 'array',
			source: 'children',
			selector: '.block-button-text',
		},
		link: {
			type: 'string',
			default: ''
		},
		linkTargetBlank: {
			type: 'boolean',
			default: false,
		},
		align: {
			type: 'string',
			default: ''
		},
	},

	edit({attributes, className, setAttributes}) {
		const {text, link, align, linkTargetBlank} = attributes;


		return [
			<InspectorControls>
				<PanelBody title='Settings'>
					<TextControl
						label="Link"
						value={link}
						onChange={(value) => {
							setAttributes({link: value})
						}}
					/>
					<ToggleControl
						label="Open link in new window"
						checked={linkTargetBlank}
						onChange={(value) => {
							setAttributes({linkTargetBlank: value})
						}}
					/>
					<SelectControl
						label="Alignment"
						value={align}
						options={[
							{label: 'Left', value: ''},
							{label: 'Center', value: 'center'},
							{label: 'Right', value: 'right'},
						]}
						onChange={(value) => {
							setAttributes({align: value})
						}}
					/>
				</PanelBody>
			</InspectorControls>
			,
			<div className={classNames([
				className,
				'block',
				'block-button-block',
				align ? 'text-' + align : false
			])}>

				<RichText
					tagName="span"
					className={classNames([
						'block-button',
						'block-button-text'
					])}
					placeholder="Text"
					value={text}
					onChange={(value) => {
						setAttributes({text: value})
					}}
					formattingControls={['italic']}
				/>

			</div>
		];
	},

	save({attributes}) {
		const {text, link, align, linkTargetBlank} = attributes;

		return (
			<div className={classNames([
				'block',
				'block-button-block',
				align ? 'text-' + align : false
			])}>
				<RichText.Content
					tagName="a"
					className={classNames([
						'block-button',
						'block-button-text',
					])}
					value={text}
					href={link}
					target={linkTargetBlank ? '_blank' : ''}
				/>
			</div>
		);

	},
});
