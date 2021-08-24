<?php

function rcf_enqueue_block_editor_assets () {
    wp_register_script(
        'rcf_blocks_bundle',
        plugins_url( '/blocks/dist/bundle.js', TWO_BLOCKS_PLUGIN_URL ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-api' ],
        filemtime( plugin_dir_path( TWO_BLOCKS_PLUGIN_URL ) . '/blocks/dist/bundle.js' )
    );
    wp_enqueue_script( 'rcf_blocks_bundle' );
}