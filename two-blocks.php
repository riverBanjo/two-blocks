<?php
/**
 * Plugin Name:       two-blocks
 * Description:       This is a WordPress plugin that will only contain 2 Gutenberg blocks. One will have an image slider and the other will display posts.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            River Fisher
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       two-blocks
 *
 * @package           rcf
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function rcf_two_blocks_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'rcf_two_blocks_block_init' );
