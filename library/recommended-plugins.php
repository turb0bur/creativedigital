<?php

function ba_theme_register_required_plugins() {
	$plugins = array(
		/** This is an example of how to include a plugin pre-packaged with a theme */

		array(
			'name'     => 'Advanced Custom Fields Pro', // The plugin name
			'slug'     => 'advanced-custom-fields-pro', // The plugin slug (typically the folder name)
			'source'   => 'http://projects.beetroot.se/upload/plugins/acf-pro/advanced-custom-fields-pro.zip', // The plugin source
			'required' => true,
		),
		array(
			'name'     => 'Gravity Forms', // The plugin name
			'slug'     => 'gravity-forms', // The plugin slug (typically the folder name)
			'source'   => 'http://projects.beetroot.se/upload/plugins/gravityforms/gravityforms.zip', // The plugin source
			'required' => false,
		),
		array(
			'name'     => 'Custom Post Type UI', // The plugin name
			'slug'     => 'custom-post-type-ui', // The plugin slug (typically the folder name)
			'source'   => 'https://downloads.wordpress.org/plugin/custom-post-type-ui.1.1.1.zip', // The plugin source
			'required' => true,
		),
		array(
			'name'     => 'WordPress SEO by Yoast', // The plugin name
			'slug'     => 'wordpress-seo', // The plugin slug (typically the folder name)
			'source'   => 'https://downloads.wordpress.org/plugin/wordpress-seo.2.2.1.zip', // The plugin source
			'required' => false,
		),
		array(
			'name'     => 'WordPress Duplicator', // The plugin name
			'slug'     => 'duplicator', // The plugin slug (typically the folder name)
			'source'   => 'https://downloads.wordpress.org/plugin/duplicator.0.5.22.zip', // The plugin source
			'required' => false,
		),
		array(
			'name'     => 'Black Studio TinyMCE Widget', // The plugin name
			'slug'     => 'black-studio-tinymce-widget', // The plugin slug (typically the folder name)
			'source'   => 'https://downloads.wordpress.org/plugin/black-studio-tinymce-widget.2.2.4.zip', // The plugin source
			'required' => false,
		),
		array(
			'name'     => 'SVG Support', // The plugin name
			'slug'     => 'svg-support', // The plugin slug (typically the folder name)
			'source'   => 'https://downloads.wordpress.org/plugin/svg-support.2.2.3.2.zip', // The plugin source
			'required' => false,
		)
	);
	tgmpa( $plugins );
}
add_action( 'tgmpa_register', 'ba_theme_register_required_plugins' );
