# GuisFus Header Height

Small WordPress plugin that exposes the real sticky header height as CSS custom properties, useful for full-height hero sections, banners and layouts that need to account for a fixed or sticky header.

## CSS Variables

The plugin writes these variables to the root element:

```css
:root {
  --guisfus-header-height: 80px;
  --header-height-custom: 80px;
}
```

`--header-height-custom` is kept as a compatibility alias. Prefer `--guisfus-header-height` for new code.

## Default Selector

By default, the plugin measures:

```css
.sticky-header-custom
```

Example markup:

```html
<header class="sticky-header-custom">
  ...
</header>
```

## Usage Example

```css
.hero-full-height {
  min-height: calc(100vh - var(--guisfus-header-height, 0px));
}
```

## Custom Header Selector

You can change the selector with a WordPress filter:

```php
add_filter( 'guisfus_header_height_selector', function () {
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

## License

GPL-2.0-or-later.
