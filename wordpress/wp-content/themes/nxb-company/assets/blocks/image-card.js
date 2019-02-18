const {registerBlockType} = wp.blocks;
const {RichText, InspectorControls, MediaUpload} = wp.editor;
const {Button, SelectControl, PanelBody, TextControl} = wp.components;

var classNames = require('classnames');


registerBlockType('nxb-blocks/image-card', {
	title: 'STB Card (image)',
	icon: 'index-card',
	category: 'common',

	attributes: {
		emblem: {
			type: 'array',
			source: 'children',
			selector: '.block-image-card-emblem',
		},
		title: {
			type: 'array',
			source: 'children',
			selector: '.block-image-card-headline',
		},
		text: {
			type: 'array',
			source: 'children',
			selector: '.block-image-card-text-element',
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
		link: {
			type: 'string',
			default: ''
		},
	},

	edit({attributes, className, setAttributes}) {
		const {title, text, emblem, mediaID, mediaURL, link} = attributes;


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
				</PanelBody>
			</InspectorControls>
			,
			<div className={classNames([
				className,
				'block',
				'block-image-card',
			])}>

				<div className="block-image-card-image">
					<MediaUpload
						onSelect={(media) => {
							setAttributes({
								mediaURL: media.url,
								mediaID: media.id,
							})
						}}
						type="image"
						value={mediaID}
						render={({open}) => (
							<Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
								{!mediaID ? 'Upload Image' : <img src={mediaURL} alt='Upload Image'/>}
							</Button>
						)}
					/>
				</div>


				<div className='block-image-card-content'>
					<RichText
						tagName="div"
						className='block-image-card-emblem'
						placeholder="Emblem"
						value={emblem}
						onChange={(value) => {
							setAttributes({emblem: value})
						}}
					/>

					<RichText
						tagName="div"
						className="block-image-card-headline"
						placeholder="Title"
						value={title}
						onChange={(value) => {
							setAttributes({title: value})
						}}
					/>


					<div className="block-image-card-text">

						<RichText
							tagName="p"
							className="block-image-card-text-element"
							placeholder="Placeholder text"
							value={text}
							onChange={(value) => {
								setAttributes({text: value})
							}}
						/>

					</div>
				</div>
			</div>
		];
	},

	save({attributes}) {
		const {title, text, emblem, mediaURL, link} = attributes;

		// Conditionally wrap link
		const ContainerLink = function ({children}) {
			if (link) {
				return <a href={link}>{children}</a>
			} else {
				return children
			}
		};

		return (
			<div className={classNames([
				'block',
				'block-image-card',
			])}>
				<ContainerLink>
					<div className="block-image-card-image">
						{
							mediaURL && (
								<img src={mediaURL} alt={title}/>
							)
						}
					</div>

					<div className='block-image-card-content'>
						<RichText.Content
							tagName="div"
							className='block-image-card-emblem'
							value={emblem}
						/>

						<RichText.Content
							tagName="div"
							className="block-image-card-headline"
							value={title}
						/>

						<div className="block-image-card-text">
							<RichText.Content
								tagName="p"
								className="block-image-card-text-element"
								value={text}
							/>
						</div>
					</div>
				</ContainerLink>
			</div>
		);

	},
});
