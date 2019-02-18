const {registerBlockType} = wp.blocks;
const {InnerBlocks, InspectorControls} = wp.editor;
const {PanelBody, ToggleControl} = wp.components;

var classNames = require('classnames');


registerBlockType('nxb-blocks/nxb-columns-1-1-1-1', {
    title: 'NXB Columns 1-1-1-1',
    icon: <svg role="img" aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0h24v24H0V0z"/>
        <g>
            <path d="M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z"/>
        </g>
    </svg>,
    category: 'layout',
    attributes: {
        borderBottom: {
            type: 'boolean',
            default: false,
        },
    },

    edit({attributes, className, setAttributes}) {

        const {borderBottom} = attributes;

        const template = [
            ['nxb-blocks/column', {size: 3}],
            ['nxb-blocks/column', {size: 3}],
            ['nxb-blocks/column', {size: 3}],
            ['nxb-blocks/column', {size: 3}]
        ];

        return [
            <InspectorControls>
                <PanelBody title='Settings'>
                    <ToggleControl
                        label="Border bottom"
                        checked={borderBottom}
                        onChange={(value) => {
                            setAttributes({borderBottom: value})
                        }}
                    />
                </PanelBody>
            </InspectorControls>
            ,
            <div className={classNames([
                className,
                'block',
                'block-columns-1-1-1-1',
                'mt-4',
            ])}>
                <InnerBlocks
                    template={template}
                    templateLock="all"
                    allowedBlocks={['nxb-blocks/column']}
                />
            </div>
        ];
    },

    save({attributes}) {
        const {borderBottom} = attributes;
        return (
            <div className={classNames([
                'block',
                'block-columns-1-1-1-1',
                'row',
                borderBottom ? 'block-columns-border-bottom': false,
            ])}>
                <InnerBlocks.Content/>
            </div>
        );
    },
});
