<?php
/**
 * Plugin Name: Guisfus Header Height
 * Plugin URI: https://github.com/guisfus/guisfus-header-height
 * Description: Exposes the real sticky header height as CSS custom properties for full-height hero sections and layouts.
 * Version: 1.0.0
 * Requires at least: 5.8
 * Requires PHP: 7.4
 * Author: guisfus
 * Author URI: https://github.com/guisfus
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: guisfus-header-height
 *
 * @package Guisfus_Header_Height
 */

defined( 'ABSPATH' ) || exit;

define( 'GUISFUS_HEADER_HEIGHT_VERSION', '1.0.0' );
define( 'GUISFUS_HEADER_HEIGHT_FILE', __FILE__ );

/**
 * Enqueue the frontend script that measures the header height.
 */
function guisfus_header_height_enqueue_script() {
	if ( is_admin() ) {
		return;
	}

	$handle = 'guisfus-header-height';
	$src    = plugin_dir_url( GUISFUS_HEADER_HEIGHT_FILE ) . 'assets/guisfus-header-height.js';

	wp_enqueue_script( $handle, $src, array(), GUISFUS_HEADER_HEIGHT_VERSION, true );

	/**
	 * Filters the CSS selector used to find the sticky header.
	 *
	 * @param string $selector Header CSS selector.
	 */
	$selector = apply_filters( 'guisfus_header_height_selector', '.sticky-header-custom' );
	$selector = is_string( $selector ) ? sanitize_text_field( $selector ) : '.sticky-header-custom';

	$config = array(
		'headerSelector' => $selector,
		'properties'     => array(
			'--guisfus-header-height',
			'--header-height-custom',
		),
	);

	wp_add_inline_script(
		$handle,
		'window.GuisfusHeaderHeight = ' . wp_json_encode( $config ) . ';',
		'before'
	);
}
add_action( 'wp_enqueue_scripts', 'guisfus_header_height_enqueue_script' );
