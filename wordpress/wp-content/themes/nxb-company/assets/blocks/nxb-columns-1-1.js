const {registerBlockType} = wp.blocks;
const {InnerBlocks} = wp.editor;

var classNames = require('classnames');


registerBlockType('nxb-blocks/nxb-columns-1-1', {
	title: 'NXB Columns 1-1',
	icon: <svg role="img" aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path fill="none" d="M0 0h24v24H0V0z"/>
		<g>
			<path d="M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z"/>
		</g>
	</svg>,
	category: 'layout',

	edit({className}) {

		const template = [
			['nxb-blocks/column', {size: 6}],
			['nxb-blocks/column', {size: 6}],
		];

		return [
			<div className={classNames([
				className,
				'block',
				'block-columns-1-1',
				'row',
			])}>
				<InnerBlocks
					template={template}
					templateLock="all"
					allowedBlocks={['nxb-blocks/column']}
				/>
			</div>
		];
	},

	save() {
		return (
			<div className={classNames([
				'block',
				'block-columns-1-1',
				'row',
			])}>
				<InnerBlocks.Content/>
			</div>
		);
	},
});
