const {registerBlockType} = wp.blocks;
const {RichText, InnerBlocks, InspectorControls} = wp.editor;
const {SelectControl, PanelBody, ToggleControl} = wp.components;


var classNames = require('classnames');


registerBlockType('nxb-blocks/nxb-content-right', {
    title: 'NXB Content Right',
    icon: 'index-card',
    category: 'common',

    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: '.block-content-right-headline',
        }
    },

    edit({attributes, className, setAttributes}) {
        const {title} = attributes;


        return [
            <div className={classNames([
                className,
                'block',
                'block-big-card',
            ])}>
                <div className="row">
                    <div className="col-lg-4 mt-2">
                        <RichText
                            tagName="h2"
                            className='block-content-right-headline'
                            placeholder="Headline"
                            value={title}
                            onChange={(value) => {
                                setAttributes({title: value})
                            }}
                        /></div>
                    <div className="col-lg-8 mt-2">
                        <InnerBlocks/>
                    </div>
                </div>
            </div>
        ];
    },

    save({attributes}) {
        const {title} = attributes;


        return (
            <div className="block block-content-right block-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mt-2">
                            <RichText.Content
                                tagName="h2"
                                className='block-content-right-headline'
                                value={title}
                            /></div>
                        <div className="col-lg-8 mt-2">
                            <InnerBlocks.Content/>
                        </div>
                    </div>
                </div>
            </div>

        )
            ;

    },
});
