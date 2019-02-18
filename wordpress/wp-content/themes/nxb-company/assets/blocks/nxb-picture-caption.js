const {registerBlockType} = wp.blocks;
const {RichText, InnerBlocks, InspectorControls} = wp.editor;
const {SelectControl, PanelBody, ToggleControl} = wp.components;


var classNames = require('classnames');


registerBlockType('nxb-blocks/nxb-image-caption', {
    title: 'NXB Image Caption',
    icon: 'index-card',
    category: 'common',

    attributes: {
        caption: {
            type: 'array',
            source: 'children',
            selector: '.block-caption-text',
        }
    },

    edit({attributes, className, setAttributes}) {
        const {caption} = attributes;


        return [
            <div className={classNames([
                className,
                'block',
                'block-text',
            ])}>
                <div className="container">
                        <RichText
                            tagName="p"
                            className='block-caption'
                            placeholder="Text"
                            value={caption}
                            onChange={(value) => {
                                setAttributes({caption: value})
                            }}
                        />
                </div>
            </div>
        ];
    },

    save({attributes}) {
        const {caption} = attributes;


        return (
            <div className="block block-image-caption bg-dark">
                    <RichText.Content
                        tagName="p"
                        className='block-caption-text card-text text-center'
                        value={caption}
                    />
            </div>

        )
            ;

    },
});
