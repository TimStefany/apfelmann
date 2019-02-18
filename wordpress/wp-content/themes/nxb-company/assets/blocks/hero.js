const {registerBlockType} = wp.blocks;
const {RichText, MediaUpload, InspectorControls} = wp.editor;
const {Button, PanelBody, ToggleControl} = wp.components;

const classNames = require('classnames');


registerBlockType('nxb-blocks/hero', {
	title: 'STB Hero',
	icon: 'format-image',
	category: 'common',

	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h1',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		subhead: {
			type: 'array',
			source: 'children',
			selector: '.subhead',
		},
		textInvert: {
			type: 'boolean',
			default: true,
		},
		textShadow: {
			type: 'boolean',
			default: false,
		},
	},

	edit({attributes, className, setAttributes}) {
		const {title, mediaID, mediaURL, subhead, textInvert, textShadow} = attributes;

		return [
			<InspectorControls>
				<PanelBody title='Settings'>
					<ToggleControl
						label="Invert text"
						checked={textInvert}
						onChange={(value) => {
							setAttributes({textInvert: value})
						}}
					/>
					<ToggleControl
						label="Shadow behind text"
						checked={textShadow}
						onChange={(value) => {
							setAttributes({textShadow: value})
						}}
					/>
				</PanelBody>
			</InspectorControls>
			,
			<div className={className + ' block block-hero'}>
				<MediaUpload
					onSelect={(media) => {
						setAttributes({
							mediaURL: media.url,
							mediaID: media.id,
						})
					}}
					type="image"
					value={mediaID}
					className="block-hero-bgimg"
					render={({open}) => (
						<Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
							{!mediaID ? 'Upload Image' : <img src={mediaURL} alt='Upload Image'/>}
						</Button>
					)}
				/>
				<div className={classNames([
					'container',
					'block-hero-textcontainer',
					'text-center',
				])}>
					<div className="row justify-content-center">
						<RichText
							tagName="h1"
							className="block-hero-headline"
							placeholder="Headline"
							value={title}
							onChange={(value) => {
								setAttributes({title: value})
							}}
						/>
					</div>
					<RichText
						tagName="div"
						className="subhead"
						placeholder="Subhead"
						value={subhead}
						onChange={(value) => {
							setAttributes({subhead: value})
						}}
					/>
				</div>
			</div>
		];
	},

	save({attributes}) {
		const {title, mediaURL, subhead, textInvert, textShadow} = attributes;

		return (
			<div className={classNames([
				'block',
				'block-hero',
				textShadow ? 'text-shadow' : false,
			])}>
				{
					mediaURL && (
						<img className="block-hero-bgimg" src={mediaURL} alt={title}/>
					)
				}
				<div className={classNames([
					'container',
					'block-hero-textcontainer',
					textInvert ? 'text-invert' : false,
					textShadow ? 'text-shadow' : false,
					'text-center',
				])}>
					<div className="row justify-content-center">
						<RichText.Content
							tagName="h1"
							className="block-hero-headline"
							value={title}
						/>
					</div>
					<RichText.Content
						tagName="div"
						className="subhead"
						value={subhead}
					/>
				</div>
			</div>
		);
	},

});
