const {registerBlockType} = wp.blocks;
const {InspectorControls} = wp.editor;
const {PanelBody, TextControl} = wp.components;


registerBlockType('nxb-blocks/anchor', {
	title: 'STB Anchor',
	icon: 'sticky',
	category: 'common',

	attributes: {
		identifier: {
			type: 'string',
			default: ''
		},
	},


	edit({attributes, className, setAttributes}) {
		const {identifier} = attributes;

		return [
			<InspectorControls>
				<PanelBody title='Settings'>
					<TextControl
						label="Identifier"
						value={identifier}
						onChange={(value) => {
							setAttributes({identifier: value})
						}}
					/>
				</PanelBody>
			</InspectorControls>
			,
			<div className={className + ' block block-anchor'} id={identifier}>
				<div className="backend-description">Anchor: Use with #{identifier}</div>
			</div>
		];
	},

	save({attributes}) {
		const {identifier} = attributes;

		return (
			<div className="block block-anchor" id={identifier}>
			</div>
		);

	},
});
