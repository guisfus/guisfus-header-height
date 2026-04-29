=== Guisfus Header Height ===
Contributors: guisfus
Tags: css, sticky header, header height, custom properties, hero
Requires at least: 5.8
Tested up to: 6.5
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Exposes the real sticky header height as CSS custom properties for full-height hero sections and layouts.

== Description ==

Guisfus Header Height measures your sticky header on the frontend and writes its current height to CSS custom properties on the root element.

Default variables:

* `--guisfus-header-height`
* `--header-height-custom`

Default header selector:

* `.sticky-header-custom`

Example CSS:

`.hero-full-height { min-height: calc(100vh - var(--guisfus-header-height, 0px)); }`

The selector can be customized with the `guisfus_header_height_selector` filter.

== Installation ==

1. Upload the plugin folder to `/wp-content/plugins/guisfus-header-height`.
2. Activate the plugin in WordPress.
3. Add `.sticky-header-custom` to your sticky header, or customize the selector with the filter.

== Frequently Asked Questions ==

= Does it work with dynamic sticky headers? =

Yes. The plugin uses browser observers and resize events to keep the CSS variables updated.

= Can I use a different header selector? =

Yes. Use the `guisfus_header_height_selector` filter.

== Changelog ==

= 1.0.0 =

Initial release.
