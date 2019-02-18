const {registerBlockType} = wp.blocks;
const {RichText, InnerBlocks, InspectorControls} = wp.editor;
const {SelectControl, PanelBody, ToggleControl} = wp.components;


var classNames = require('classnames');


registerBlockType('nxb-blocks/nxb-telephone', {
    title: 'NXB Telephone',
    icon: 'index-card',
    category: 'common',

    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: '.block-contact-logo',
        },
        text: {
            type: 'array',
            source: 'children',
            selector: '.block-contact-text',
        },
        link: {
            type: 'array',
            source: 'children',
            selector: '.block-contact-link',
        }
    },

    edit({attributes, className, setAttributes}) {
        const {title, text, link} = attributes;


        return [
            <div className={classNames([
                className,
                'block',
                'block-big-card',
                'bg-primary',
                'card',
            ])}>

                <div className="card-header">
                    <RichText
                        tagName="span"
                        className='h2 block-contact-logo ml-2'
                        placeholder="Headline"
                        value={title}
                        onChange={(value) => {
                            setAttributes({title: value})
                        }}
                    /></div>
                <div className="card-body">
                    <RichText
                        tagName="p"
                        className='block-contact-text'
                        placeholder="Text"
                        value={text}
                        onChange={(value) => {
                            setAttributes({text: value})
                        }}
                    />
                    <RichText
                        tagName="p"
                        className='h3 block-contact-link'
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
        const {title, text, link} = attributes;


        return (
            <div className="block block-contact bg-primary card">
                <div className="card-header">
                    <i className="far fa-comment-alt">
                    <RichText.Content
                        tagName="span"
                        className='h2 block-contact-logo ml-2'
                        value={title}
                    /></i>
                </div>
                <div className="card-body">
                    <RichText.Content
                        tagName="p"
                        className='block-contact-text'
                        value={text}
                    />
                    <RichText.Content
                        tagName="p"
                        className='h3 block-contact-link'
                        value={link}
                    />
                </div>
            </div>

        )
            ;

    },
});
