const { registerBlockType }     = wp.blocks;
const { __ }                    = wp.i18n;
const { InspectorControls }     = wp.blockEditor;
const { PanelBody, PanelRow,
        TextControl, 
        SelectControl }         = wp.components;

registerBlockType( 'two-blocks/api-post-list', {
    title:              __( 'API Post List', 'two-blocks' ),
    description:        __(
        'Generate a list of posts using dummy data from an API',
        'two-blocks'
    ),
    category:           'widgets',
    icon:               'media-archive',
    attributes: {
        count:   {
            type: 'number',
            default: 4
        }
    }, 
    
    edit:               ( props ) => {
        const {
            attributes: { count, term },
            setAttributes,
        } = props;
        const sigIDs = Array.from( Array(count).keys() );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Basics', 'two-blocks' ) }>
                    <PanelRow>
                        <p>{ __( 'Configure your posts', 'two-blocks' ) }</p>
                    </PanelRow>
                    <SelectControl
                        label={ __( 'Post Quantity', 'two-blocks' ) }
                        help ={ __( 'This is the amount of posts that you want in your request.', 'two-blocks' ) }
                        value={count}
                        options={ [ 
                            { label: '3', value: 3 },
                            { label: '4', value: 4 },
                            { label: '5', value: 5 },
                            { label: '6', value: 6 }
                        ] }
                        onChange={ ( new_val ) => {
                            setAttributes( { count: Number( new_val ) } );
                        } }
                    />
                </PanelBody>
            </InspectorControls>,
            <div className={ props.className }>
                <button id="rcf-get-posts" class="button">Get Posts</button>
            </div>
        ];
    },
    save:               ( props ) => {
        return (
            <div className={ props.className }>
                <ul id="rcf-post-list">
                </ul>
                <button id="rcf-get-posts" class="button">Get Posts</button>
            </div>
        );
    }
});