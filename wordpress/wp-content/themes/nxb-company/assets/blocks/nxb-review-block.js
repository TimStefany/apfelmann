const {registerBlockType} = wp.blocks;
const {RichText, InnerBlocks, InspectorControls} = wp.editor;
const {SelectControl, PanelBody, ToggleControl} = wp.components;


var classNames = require('classnames');


registerBlockType('nxb-blocks/nxb-review-block', {
    title: 'NXB Review',
    icon: 'index-card',
    category: 'common',

    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: '.block-text-headline',
        },
        link: {
            type: 'array',
            source: 'children',
            selector: '.block-review-link',
        }
    },

    edit({attributes, className, setAttributes}) {
        const {title, link} = attributes;


        return [
            <div className={classNames([
                className,
                'block',
                'block-big-card',
            ])}>

                <div className="">
                    <RichText
                        tagName="h2"
                        className=''
                        placeholder="Headline"
                        value={title}
                        onChange={(value) => {
                            setAttributes({title: value})
                        }}
                    /></div>
                <div className="">
                    <InnerBlocks/>
                </div>
                <div>
                    <RichText
                        tagName="p"
                        className='block-review-link'
                        placeholder="Link"
                        value={link}
                        onChange={(value) => {
                            setAttributes({link: value})
                        }}
                    />
                </div>
            </div>
        ];
    },

    save({attributes}) {
        const {title, link} = attributes;


        return (
            <div className="block block-review block-padding bg-dark">
                <div className="container">
                    <div className="text-center">
                        <RichText.Content
                            tagName="h2"
                            className=''
                            value={title}
                        />
                    </div>
                    <div className="">
                        <InnerBlocks.Content/>
                    </div>
                    <div className="text-center">
                        <RichText.Content
                            tagName="p"
                            className='block-review-link'
                            value={link}
                        />
                    </div>
                </div>
            </div>

        )
            ;

    },
});
