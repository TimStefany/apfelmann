const {registerBlockType} = wp.blocks;
const {RichText, InnerBlocks, InspectorControls} = wp.editor;
const {SelectControl, PanelBody, ToggleControl} = wp.components;
// const {SelectControl, BaseControl, Panel, PanelBody, ToggleControl} = wp.components;
// const {Fragment} = wp.element;

var classNames = require('classnames');


registerBlockType('nxb-blocks/nxb-textblock', {
    title: 'NXB Textblock',
    icon: 'index-card',
    category: 'common',

    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: '.block-text-headline',
        },
        text: {
            type: 'array',
            source: 'children',
            selector: '.block-text-text',
        }
    },

    edit({attributes, className, setAttributes}) {
        const {title, text} = attributes;


        return [
            <div className={classNames([
                className,
                'block',
                'block-text',
            ])}>
                <div className="row">
                    <div className="col-sm-8 mt-2">
                        <RichText
                            tagName="h2"
                            className='block-text-headline'
                            placeholder="Headline"
                            value={title}
                            onChange={(value) => {
                                setAttributes({title: value})
                            }}
                        />
                    </div>
                    <div className="col-sm-4 mt-2">
                        <RichText
                            tagName="p"
                            className='block-text-text'
                            placeholder="Text"
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
        const {title, text} = attributes;


        return (
            <div className="block block-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 mt-2">
                            <RichText.Content
                                tagName="h2"
                                className='block-text-headline'
                                value={title}
                            />
                        </div>
                        <div className="col-sm-8 mt-2">
                            <RichText.Content
                                tagName="p"
                                className='block-text-text'
                                value={text}
                            />
                        </div>
                    </div>
                </div>
            </div>

        )
            ;

    },
});
