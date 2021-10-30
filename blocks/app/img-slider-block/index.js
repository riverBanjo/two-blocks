// Import Swiper React components
import React from 'react';

// import swiper render function
import { rcf_render_slider } from './sliderRender.js';

const { registerBlockType }     = wp.blocks;
const { __ }                    = wp.i18n;
const { InspectorControls }     = wp.blockEditor;
const { PanelBody, PanelRow,
        TextControl, 
        SelectControl }         = wp.components;


registerBlockType( 'two-blocks/image-slider', {
    title:              __( 'Image Slider', 'two-blocks' ),
    description:        __(
        'Image slider via API!',
        'two-blocks'
    ),
    category:           'design',
    icon:               'images-alt2',
    attributes: {
        count:   {
            type: 'number',
            default: 4
        },
        term:   {
            type: 'string',
            default: 'clown'
        },
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
                        <p>{ __( 'Configure your Image Slider block', 'two-blocks' ) }</p>
                    </PanelRow>
                    <TextControl
                        label={ __( 'Search Term', 'two-blocks' ) }
                        help={ __( 'This will be the term that will determine what your images are.', 'two-blocks' ) }
                        value={term}
                        onChange={ ( new_val ) => {
                            setAttributes( { term: new_val } );
                        }}
                    />
                    <SelectControl
                        label={ __( 'Image Quantity', 'two-blocks' ) }
                        help ={ __( 'This is the amount of images that you want in your slider.', 'two-blocks' ) }
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
                { rcf_render_slider(sigIDs, term) }
            </div>
        ];
    },
    save:               ( props ) => {
        const {
            attributes: { count, term },
        } = props;
        const sigIDs = Array.from( Array(count).keys() );
        return [
            <div className={ props.className }>
                { rcf_render_slider(sigIDs, term) }
            </div>
        ];
    }
});