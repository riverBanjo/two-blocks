<?php
/**
 * Plugin Name:       Two Blocks
 * Version:           1.0.0
 * Author:            River Fisher
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       two-blocks
 */

 include( 'blocks/enqueue.php' );

 define( 'TWO_BLOCKS_PLUGIN_URL', __FILE__ );

 add_action( 'enqueue_block_editor_assets', 'rcf_enqueue_block_editor_assets' );
 add_action( 'enqueue_block_assets', 'rcf_enqueue_block_assets' );