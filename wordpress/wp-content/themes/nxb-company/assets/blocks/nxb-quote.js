const {registerBlockType} = wp.blocks;
const {RichText, InspectorControls} = wp.editor;
const {SelectControl, PanelBody} = wp.components;

var classNames = require('classnames');


registerBlockType('nxb-blocks/quote', {
    title: 'NXB Quote',
    icon: 'format-quote',
    category: 'common',

    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: '.block-quote-content',
        },
        author: {
            type: 'array',
            source: 'children',
            selector: '.block-quote-author',
        },
    },

    edit({attributes, className, setAttributes}) {
        const {content, author} = attributes;

        return [
            <div className={classNames([
                className,
                'block',
                'block-quote',
            ])}>
                <RichText
                    tagName="p"
                    className="block-quote-content"
                    placeholder="Quote"
                    value={content}
                    onChange={(value) => {
                        setAttributes({content: value})
                    }}
                />
                <RichText
                    tagName="p"
                    className="block-quote-author"
                    placeholder="Author"
                    value={author}
                    onChange={(value) => {
                        setAttributes({author: value})
                    }}
                />
            </div>
        ];
    },


    save({attributes}) {
        const {content, author} = attributes;

        return (
            <div className={classNames([
                'block',
                'block-quote',
                'bg-primary',
            ])}>
                <div className="container">
                    <RichText.Content
                        tagName="p"
                        className="text-center block-quote-content px-5"
                        value={content}
                    />
                    <RichText.Content
                        tagName="p"
                        className="block-quote-author"
                        value={author}
                    />
                </div>
            </div>
        );

    },
});
