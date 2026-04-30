# Header Height

Small WordPress plugin that exposes the real sticky header height as CSS custom properties, useful for full-height hero sections, banners and layouts that need to account for a fixed or sticky header.

## CSS Variables

The plugin writes these variables to the root element:

```css
:root {
  --header-height: 80px;
}
```

Use `--header-height` in your theme or layout CSS.

If the configured header is not found, the plugin writes `0px` so layouts do not keep a stale height from a previous state.

## Default Selector

By default, the plugin measures:

```css
.sticky-header-custom
```

Example markup:

```html
<header class="sticky-header-custom">...</header>
```

## Usage Example

```css
.hero-full-height {
  min-height: calc(100vh - var(--header-height, 0px));
}
```

## Custom Header Selector

You can change the selector with a WordPress filter:

```php
add_filter( 'header_height_selector', function () {
	return '#site-header';
} );
```

## Requirements

- WordPress 5.8 or higher
- PHP 7.4 or higher

## Security

- Runs only on the frontend.
- Exits directly if loaded outside WordPress.
- Uses WordPress enqueue APIs.
- Encodes frontend configuration with `wp_json_encode()`.
- Sanitizes the selector passed through the customization filter.
- Does not store options, process form submissions, create REST endpoints, or expose AJAX actions.

## Frontend Footprint

- Loads one script: `assets/header-height.js`.
- Exposes one config object before the script runs: `window.HeaderHeightConfig`.
- Writes the `--header-height` CSS custom property on `:root`.

## License

GPL-2.0-or-later.
