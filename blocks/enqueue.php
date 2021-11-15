<?php

function rcf_enqueue_block_editor_assets () {
    wp_register_script(
        'rcf_swiperJS', 
        plugins_url( '/blocks/node_modules/swiper/swiper-bundle.js', TWO_BLOCKS_PLUGIN_URL ),
        [],
        current_time( 'Y-m-d' )
    );
    wp_enqueue_script( 'rcf_swiperJS' );
    wp_register_script(
        'rcf_blocks_bundle',
        plugins_url( '/blocks/dist/bundle.js', TWO_BLOCKS_PLUGIN_URL ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-api', 'rcf_swiperJS' ],
        filemtime( plugin_dir_path( TWO_BLOCKS_PLUGIN_URL ) . '/blocks/dist/bundle.js' )
    );
    wp_enqueue_script( 'rcf_blocks_bundle' );
}

function rcf_enqueue_block_assets () {
    wp_register_script(
        'rcf_get_posts',
        plugins_url( '/blocks/app/API-post-list/getPosts.js', TWO_BLOCKS_PLUGIN_URL ), [ 'jquery' ], false, true
    );
    wp_enqueue_script( 'rcf_get_posts' );
}