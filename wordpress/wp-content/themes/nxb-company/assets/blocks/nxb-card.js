const {registerBlockType} = wp.blocks;
const {RichText, InnerBlocks, InspectorControls} = wp.editor;
const {SelectControl, TextControl, PanelBody, ToggleControl} = wp.components;


var classNames = require('classnames');


registerBlockType('nxb-blocks/nxb-card', {
    title: 'NXB Card',
    icon: 'index-card',
    category: 'common',

    attributes: {
        title: {
            type: 'string',
            default: '',
        },
        icon: {
            type: 'string',
            default: '',
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
        },
    },

    edit({attributes, className, setAttributes}) {
        const {title, text, link, icon} = attributes;


        return [
            <InspectorControls>
                <PanelBody title='Settings'>

                    <TextControl
                        label="Title"
                        value={title}
                        onChange={(value) => {
                            setAttributes({title: value})
                        }}
                    />
                    <SelectControl
                        label="Fontawesome icon"
                        value={icon}
                        options={[
                            {label: '-', value: ''},
                            {label: 'Twitter', value: 'fab fa-twitter'},
                            {label: 'Email', value: 'far fa-envelope'},
                            {label: 'Messenger', value: 'far fa-comment-alt'},
                            {label: 'Facebook', value: 'fab fa-facebook-f'},
                            {label: 'Instagram', value: 'fab fa-instagram'},
                        ]}
                        onChange={(value) => {
                            setAttributes({icon: value})
                        }}
                    />
                </PanelBody>
            </InspectorControls>
            ,
            <div className={classNames([
                className,
                'block',
                'block-big-card',
                'bg-primary',
                'card',
            ])}>

                <div className="card-header">
                    <i className={icon}></i>
                    <span className="ml-2">{title}</span>
                </div>
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
        const {title, text, link, icon} = attributes;


        return (
            <div className="block block-contact bg-primary card">
                <div className="card-header">
                    <i className={icon}></i>
                    <span className="ml-2">{title}</span>
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
