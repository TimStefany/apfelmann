const {registerBlockType} = wp.blocks;
const {InnerBlocks, InspectorControls} = wp.editor;
const {SelectControl, PanelBody, ToggleControl} = wp.components;

var classNames = require('classnames');


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
			default: true,
		},
        paddingtop: {
            type: 'boolean',
            default: true,
        },
		container: {
			type: 'boolean',
			default: true,
		},
	},

	edit({attributes, className, setAttributes}) {
		const {background, padding, paddingtop, container} = attributes;

		return [
			<InspectorControls>
				<PanelBody title='Settings'>
					<SelectControl
						label="Background color"
						value={background}
						options={[
							{label: '-', value: ''},
							{label: 'White', value: 'white'},
							{label: 'Gray', value: 'gray'},
							{label: 'Yellow', value: 'yellow'},
						]}
						onChange={(value) => {
							setAttributes({background: value})
						}}
					/>
					<ToggleControl
						label="Padding (top and bottom)"
						checked={padding}
						onChange={(value) => {
							setAttributes({padding: value})
						}}
					/>
                    <ToggleControl
                        label="Padding (top)"
                        checked={paddingtop}
                        onChange={(value) => {
                            setAttributes({paddingtop: value})
                        }}
                    />
					<ToggleControl
						label="Container (center vertically)"
						checked={container}
						onChange={(value) => {
							setAttributes({container: value})
						}}
					/>
				</PanelBody>
			</InspectorControls>
			,
			<div className={classNames([
				className,
				'block',
				'block-section',
				background ? 'section-' + background : false,
				padding ? 'block-padding' : false,
                paddingtop ? 'pt-4' : false,
			])}>
				<InnerBlocks/>
			</div>
		];
	},

	save({attributes}) {
		const {background, padding, paddingtop, container} = attributes;

		// Conditionally wrap div.container
		const ContainerDiv = function ({children}) {
			if (container) {
				return <div className='container'>{children}</div>
			} else {
				return children
			}
		};

		return (
			<div className={classNames([
				'block',
				'block-section',
				background ? 'section-' + background : false,
				padding ? 'block-padding' : false,
				paddingtop ? 'pt-4' : false,
			])}>
				<ContainerDiv>
					<InnerBlocks.Content/>
				</ContainerDiv>
			</div>
		);
	},
});
