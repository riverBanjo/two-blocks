const { registerBlockType } = wp.blocks;
const { __ }                = wp.i18n;

registerBlockType( 'two-blocks/image-slider', {
    title:              __( 'Image Slider', 'two-blocks' ),
    description:        __(
        'Image slider via API!',
        'two-blocks'
    ),
    category:           'design',
    icon:               'images-alt2',
    save:               () => {
        return <p>Hello World!</p>
    }
});