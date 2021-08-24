// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "../../node_modules/swiper/swiper.min.css";
// import "../../node_modules/swiper/components/pagination/pagination.min.css"
// import "../../node_modules/swiper/components/navigation/navigation.min.css"

import "./styles.scss";



// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

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
        console.log( props );
        return [
            <InspectorControls>
                <PanelBody title={ __( 'Basics', 'two-blocks' ) }>
                    <PanelRow>
                        <p>{ __( 'Configure your Image Slider block', 'two-blocks' ) }</p>
                    </PanelRow>
                    <TextControl
                        label={ __( 'Search Term', 'two-blocks' ) }
                        help={ __( 'This will be the term that will determine what your images are.', 'two-blocks' ) }
                        value="test"
                        onChange={ ( new_val ) => {
                            console.log( new_val );
                        }}
                    />
                    <SelectControl
                        label={ __( 'Image Quantity', 'two-blocks' ) }
                        help ={ __( 'This is the amount of images that you want in your slider.', 'two-blocks' ) }
                        value='3'
                        options={ [ 
                            { label: '3', value: '3' },
                            { label: '4', value: '4' },
                            { label: '5', value: '5' },
                            { label: '6', value: '6' }
                        ] }
                        onChange={ ( new_val ) => {
                            console.log( new_val );
                        }}
                    />
                </PanelBody>
            </InspectorControls>,
            <div className={ props.className }>
                <Swiper 
                    slidesPerView={1} 
                    spaceBetween={30} 
                    loop={true} 
                    pagination={{
                        "clickable": true
                    }} 
                    navigation={true} 
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        ];
    },
    save:               ( props ) => {
        return <p>Hello World!</p>
    }
});