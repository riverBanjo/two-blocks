// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles;
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import { useState } from 'react';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


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
    edit:               ( props ) => {
        const [ term, setTerm ] = useState('');
        const [ selection, setSelection ] = useState('3');
        const sigIDs = [];
        for( let i = 1; i <= selection; i++){
            sigIDs[i] = i;
        }
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
                            setTerm(new_val);
                        }}
                    />
                    <SelectControl
                        label={ __( 'Image Quantity', 'two-blocks' ) }
                        help ={ __( 'This is the amount of images that you want in your slider.', 'two-blocks' ) }
                        value={selection}
                        options={ [ 
                            { label: '3', value: '3' },
                            { label: '4', value: '4' },
                            { label: '5', value: '5' },
                            { label: '6', value: '6' }
                        ] }
                        onChange={ ( new_val ) => {
                            setSelection(new_val);
                        } }
                    />
                </PanelBody>
            </InspectorControls>,
            <div className={ props.className }>
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">
                    {
                        sigIDs.map( sigID => <SwiperSlide><img src={`https://source.unsplash.com/1600x900/?sig=${sigID}&${term}`} key={sigID}/></SwiperSlide>    )
                    }
                </Swiper>
            </div>
        ];
    },
    save:               ( props ) => {
        return <p>Hello World!</p>
    }
});