=== Header Height ===
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

Header Height measures your sticky header on the frontend and writes its current height to CSS custom properties on the root element.

If the configured header is not found, the plugin writes `0px` so layouts do not keep a stale height from a previous state.

Default variables:

* `--header-height`
Default header selector:

* `.sticky-header-custom`

Example CSS:

`.hero-full-height { min-height: calc(100vh - var(--header-height, 0px)); }`

The selector can be customized with the `header_height_selector` filter.

== Installation ==

The GitHub repository uses the `wp-` prefix only to identify it as a WordPress plugin repository. When installing the plugin in WordPress, use the plugin folder name without the `wp-` prefix.

Correct plugin folder: `/wp-content/plugins/header-height/`

Correct ZIP structure: `header-height.zip` containing a root `header-height/` folder with `header-height.php` inside it.

Do not install it as `/wp-content/plugins/wp-header-height/`.

Backend installation:

1. Create a ZIP with `header-height/` as the root folder.
2. Go to Plugins > Add New > Upload Plugin.
3. Upload `header-height.zip`.
4. Activate Header Height.

Manual installation:

1. Upload the `header-height` folder to `/wp-content/plugins/`.
2. Activate Header Height from the WordPress plugins screen.
3. Add `.sticky-header-custom` to your sticky header, or customize the selector with the filter.

== Frequently Asked Questions ==

= Does it work with dynamic sticky headers? =

Yes. The plugin uses browser observers and resize events to keep the CSS variables updated.

= Can I use a different header selector? =

Yes. Use the `header_height_selector` filter.

= Does this plugin store data? =

No. It does not store options, process form submissions, create REST endpoints, or expose AJAX actions.

== Changelog ==

= 1.0.0 =

Initial release.
