const {registerBlockType} = wp.blocks;
const {InnerBlocks} = wp.editor;

const classNames = require('classnames');


function generateClass(attributes) {
    const {size, breakingPoint, classOverwrite} = attributes;

    if (classOverwrite !== '') {
        return classOverwrite;
    }
    const classes = [
        'block-column',
        'col-' + breakingPoint + '-' + size,
    ];

    return classNames(classes);
}

registerBlockType('nxb-blocks/column-lg', {
    title: 'STB Columns (two)',
    icon: 'columns',
    category: 'common',
    parent: ['nxb-blocks/columns-1-1','nxb-blocks/columns-1-2'],

    attributes: {
        size: {
            type: 'number',
            default: 6,
        },
        breakingPoint: {
            type: 'string',
            default: 'lg',
        },
        classOverwrite: {
            type: 'string',
            default: '',
        }
    },


    edit({attributes}) {

        return (
            <div className={generateClass(attributes)}>
                <InnerBlocks templateLock={false}/>
            </div>
        );
    },

    save({attributes}) {
        return (
            <div className={generateClass(attributes)}>
                <InnerBlocks.Content/>
            </div>
        );
    },
});
