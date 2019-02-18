const {registerBlockType} = wp.blocks;
const {RichText, InnerBlocks} = wp.editor;

var classNames = require('classnames');


registerBlockType('nxb-blocks/gray-box', {
	title: 'STB Gray box',
	icon: 'index-card',
	category: 'common',

	attributes: {
		suphead: {
			type: 'array',
			source: 'children',
			selector: '.block-gray-box-suphead',
		},
		headline: {
			type: 'array',
			source: 'children',
			selector: '.block-gray-box-headline',
		},
		subhead: {
			type: 'array',
			source: 'children',
			selector: '.block-gray-box-subhead',
		},
	},

	edit({attributes, className, setAttributes}) {
		const {suphead, headline, subhead} = attributes;


		return [
			<div className={classNames([
				className,
				'block',
				'block-gray-box',
			])}>
				<div className="row">
					<div className="col-md-6 block-gray-box-content-left">
						<RichText
							tagName="div"
							className="block-gray-box-suphead"
							placeholder="Superhead"
							value={suphead}
							onChange={(value) => {
								setAttributes({suphead: value})
							}}
						/>
						<RichText
							tagName="div"
							className="block-gray-box-headline"
							placeholder="Headline"
							value={headline}
							onChange={(value) => {
								setAttributes({headline: value})
							}}
						/>
						<RichText
							tagName="div"
							className="block-gray-box-subhead"
							placeholder="Infos"
							value={subhead}
							onChange={(value) => {
								setAttributes({subhead: value})
							}}
						/>
					</div>
					<div className="col-md-6 block-gray-box-content-right text-right">
						<div className="block-gray-box-content-right-content">
							<InnerBlocks/>
						</div>
					</div>
				</div>
			</div>
		];
	},

	save({attributes}) {
		const {suphead, headline, subhead} = attributes;


		return (
			<div className={classNames([
				'block',
				'block-gray-box',
			])}>
				<div className="row">
					<div className="col-md-6 block-gray-box-content-left">
						<RichText.Content
							tagName="div"
							className="block-gray-box-suphead"
							value={suphead}
						/>
						<RichText.Content
							tagName="div"
							className="block-gray-box-headline"
							value={headline}
						/>
						<RichText.Content
							tagName="div"
							className="block-gray-box-subhead"
							value={subhead}
						/>
					</div>
					<div className="col-md-6 block-gray-box-content-right">
						<div className="block-gray-box-content-right-content">
							<InnerBlocks.Content/>
						</div>
					</div>
				</div>
			</div>
		);

	},
});
