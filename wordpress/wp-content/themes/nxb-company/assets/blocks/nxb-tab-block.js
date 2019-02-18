const {registerBlockType} = wp.blocks;
const {RichText, InnerBlocks, InspectorControls} = wp.editor;
const {SelectControl, PanelBody, ToggleControl} = wp.components;
// const {SelectControl, BaseControl, Panel, PanelBody, ToggleControl} = wp.components;
// const {Fragment} = wp.element;

var classNames = require('classnames');


registerBlockType('nxb-blocks/nxb-tab-block', {
    title: 'NXB Tab Block',
    icon: 'feedback',
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
            selector: '.block-review-link',
        }
    },


    edit({className}) {

        return [
            <div
                className={classNames([
                    className,
                    'block',
                    'block-tab',
                ])}>
                <div><RichText
                    tagName="h2"
                    className=''
                    placeholder="Headline"
                    value={title}
                    onChange={(value) => {
                        setAttributes({title: value})
                    }}
                /></div>
                <div><RichText
                    tagName="p"
                    className='block-tab-text'
                    placeholder="Text"
                    value={text}
                    onChange={(value) => {
                        setAttributes({text: value})
                    }}
                /></div>
                <div role="tablist">
                    <InnerBlocks
                        allowedBlocks={['nxb-blocks/tab-element']}
                        template={[['nxb-blocks/tab-element', {}]]}
                    />
                </div>
            </div>
        ];
    },

    save({attributes}) {
        const {title, text} = attributes;

        return (
            <div className="block block-tab">
                <div className="container">
                    <div className="text-center">
                        <RichText.Content
                            tagName="h2"
                            className=''
                            value={title}
                        />
                    </div>
                    <div className="text-center">
                        <RichText.Content
                            tagName="p"
                            className='block-tab-text'
                            value={text}
                        />
                    </div>
                    <div>
                        <InnerBlocks.Content/>
                    </div>
                </div>
            </div>
        );

    },
});
