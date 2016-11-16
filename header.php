<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<svg style="position: absolute; width: 0; height: 0;" >
			<defs>
				<symbol id="icon-facebook" viewBox="0 0 32 32">
					<title>facebook</title>
					<filter  x="1220" y="4337" width="32" height="32" filterUnits="userSpaceOnUse">
						<feFlood result="flood" flood-color="#ebebeb"/>
						<feComposite result="composite" operator="in" in2="SourceGraphic"/>
						<feBlend result="blend" in2="SourceGraphic"/>
					</filter>
					<path id="facebook.svg" class="cls-1" d="M1236,4337a16,16,0,1,1-16,16A16,16,0,0,1,1236,4337Zm6,6v4h-2a1.17,1.17,0,0,0-1,1v2h3l-1,4h-2v9h-4v-9h-2v-4h2v-3s-0.75-4,3.13-4H1242Z" transform="translate(-1220 -4337)"/>

				</symbol>
				<symbol id="icon-twitter" viewBox="0 0 32 32">
					<title>twitter</title>
					<filter  x="1277" y="4337" width="32" height="32" filterUnits="userSpaceOnUse">
						<feFlood result="flood" flood-color="#ebebeb"/>
						<feComposite result="composite" operator="in" in2="SourceGraphic"/>
						<feBlend result="blend" in2="SourceGraphic"/>
					</filter>
					<path id="twitter.svg" class="cls-1" d="M1293,4337a16,16,0,1,1-16,16A16,16,0,0,1,1293,4337Zm9.9,10.2a6.844,6.844,0,0,1-2.12.64,4.034,4.034,0,0,0,1.62-2.23,6.977,6.977,0,0,1-2.35.98,3.523,3.523,0,0,0-2.69-1.28,3.876,3.876,0,0,0-3.69,4.04,4.63,4.63,0,0,0,.09.92,10.226,10.226,0,0,1-7.61-4.22,4.3,4.3,0,0,0-.5,2.03,4.141,4.141,0,0,0,1.64,3.36,3.467,3.467,0,0,1-1.67-.5v0.05a3.962,3.962,0,0,0,2.96,3.96,3.5,3.5,0,0,1-.97.14,3.26,3.26,0,0,1-.7-0.07,3.759,3.759,0,0,0,3.45,2.8,6.96,6.96,0,0,1-4.58,1.73,8.334,8.334,0,0,1-.88-0.05,9.83,9.83,0,0,0,5.66,1.81c6.79,0,10.5-6.15,10.5-11.49,0-.18,0-0.35-0.01-0.52a7.791,7.791,0,0,0,1.85-2.1" transform="translate(-1277 -4337)"/>
				</symbol>
				<symbol id="icon-logo" viewBox="0 0 53.531 72">
					<title>Logo</title>
					<path id="logo.svg" class="cls-1" d="M274.714,88.981A46.989,46.989,0,0,1,271.3,103.7c-0.623,1.416-1.756,2.767-2.279,4.3h-0.228v-1.132c0.428-.665.219-1.575,0.456-2.491,1.128-4.357,1.213-10.17-.684-13.811-3.24-6.221-9.728-4.129-16.181-6.793a12.425,12.425,0,0,1-5.7-5.434l-1.368-3.849A14.911,14.911,0,0,1,246,66.339c3.107-8.131,10.872-11.709,20.284-7.245V58.415c-0.807-1.1-.545-2.733-0.912-4.3-0.985-4.219-1.744-18.067,2.963-18.113,1.277,0.926,3.731.885,3.875,2.944a1.666,1.666,0,0,0-.456,1.358h0.228V40.075c0.981-1.03,1.25-3.371,2.963-3.623,1.368,1.22,3.683,1.463,4.1,3.623a17.49,17.49,0,0,0-2.735,5.887h0.456c1.428-1.877,7.312-7.251,10.028-6.793a14.113,14.113,0,0,1,2.051,4.3c-1.435.51-2.095,1.9-3.191,2.717-4,3-7.231,7.374-9.8,11.774h0.684c1.569-1.22,7.973-1.811,10.712-1.132,7.222,1.792,9.252,4.271,10.939,11.547a13.388,13.388,0,0,1,.228,4.755c-2.183,9.442-6.79,14.209-16.409,16.3C279.436,89.993,276.873,89.1,274.714,88.981Z" transform="translate(-245 -36)"/>
				</symbol>
				<symbol id="icon-prev" viewBox="0 0 22 38">
					<title>prev</title>
					<filter  x="162" y="4175" width="22" height="38" filterUnits="userSpaceOnUse">
						<feFlood result="flood" flood-color="#665f60"/>
						<feComposite result="composite" operator="in" in2="SourceGraphic"/>
						<feBlend result="blend" in2="SourceGraphic"/>
					</filter>

					<path id="arrow-left.svg" class="cls-1" d="M183.877,4175.53a1.125,1.125,0,0,1-.359,1.46l-20.057,17.87a0.94,0.94,0,0,1-1.338-.39,1.121,1.121,0,0,1,.359-1.46l20.057-17.87A0.941,0.941,0,0,1,183.877,4175.53Zm0,36.94a1.123,1.123,0,0,0-.359-1.46l-20.057-17.87a0.94,0.94,0,0,0-1.338.39,1.124,1.124,0,0,0,.359,1.46l20.057,17.87A0.941,0.941,0,0,0,183.877,4212.47Z" transform="translate(-162 -4175)"/>
				</symbol>
				<symbol id="icon-next" viewBox="0 0 22 38">
					<title>next</title>
					<filter  x="1410" y="4175" width="22" height="38" filterUnits="userSpaceOnUse">
						<feFlood result="flood" flood-color="#665f60"/>
						<feComposite result="composite" operator="in" in2="SourceGraphic"/>
						<feBlend result="blend" in2="SourceGraphic"/>
					</filter>

					<path id="arrow-right.svg" class="cls-1" d="M1410.12,4175.53a1.124,1.124,0,0,0,.36,1.46l20.06,17.87a0.942,0.942,0,0,0,1.34-.39,1.122,1.122,0,0,0-.36-1.46l-20.06-17.87A0.942,0.942,0,0,0,1410.12,4175.53Zm0,36.94a1.122,1.122,0,0,1,.36-1.46l20.06-17.87a0.942,0.942,0,0,1,1.34.39,1.124,1.124,0,0,1-.36,1.46l-20.06,17.87A0.942,0.942,0,0,1,1410.12,4212.47Z" transform="translate(-1410 -4175)"/>
				</symbol>

				<symbol id="icon-behance" viewBox="0 0 32 32">
					<title>behance</title>
					<filter  x="1048" y="4337" width="32" height="32" filterUnits="userSpaceOnUse">
						<feFlood result="flood" flood-color="#ebebeb"/>
						<feComposite result="composite" operator="in" in2="SourceGraphic"/>
						<feBlend result="blend" in2="SourceGraphic"/>
					</filter>

					<path id="behance.svg" class="cls-1" d="M1064,4337a16,16,0,1,1-16,16A16,16,0,0,1,1064,4337Zm-10,10h5.79c2.35,0,3.93.79,3.93,2.97a2.556,2.556,0,0,1-1.67,2.44,2.88,2.88,0,0,1,2.26,2.97c0,2.37-2.12,3.39-4.35,3.39H1054V4347Zm2.47,4.71h2.98a1.394,1.394,0,0,0,1.65-1.39c0-1.12-.89-1.35-1.86-1.35h-2.77v2.74Zm0,5.16h3.13c1.07,0,1.92-.33,1.92-1.54s-0.71-1.67-1.87-1.67h-3.18v3.21Zm10.93-2.04c0.07,1.47.83,2.42,2.19,2.42a2.3,2.3,0,0,0,2.03-1.3h2.16a4.553,4.553,0,0,1-8.85-1.41,4.371,4.371,0,0,1,4.57-4.47c3.03,0,4.5,2.16,4.33,4.76h-6.43Zm3.98-1.52c-0.22-1.18-.76-1.48-1.95-1.48-1.55,0-2,.82-2.03,1.48h3.98Zm0.78-3.95h-4.94v-1.57h4.94v1.57Z" transform="translate(-1048 -4337)"/>
				</symbol>
				<symbol id="icon-plus" viewBox="0 0 32 32">
					<title>plus</title>
					<filter  x="1163" y="4337" width="32" height="32" filterUnits="userSpaceOnUse">
						<feFlood result="flood" flood-color="#ebebeb"/>
						<feComposite result="composite" operator="in" in2="SourceGraphic"/>
						<feBlend result="blend" in2="SourceGraphic"/>
					</filter>

					<path id="google-plus.svg" class="cls-1" d="M1179,4337a16.005,16.005,0,1,1-16,16A16,16,0,0,1,1179,4337Zm-1.35,7.27a6,6,0,0,1,2.43,4.78c0,2.62-1.43,3.86-2.87,5.03a2.538,2.538,0,0,0-.96,1.74,1.947,1.947,0,0,0,.89,1.52l1.23,1c1.51,1.31,2.88,2.51,2.88,4.96,0,3.33-3.12,6.7-9,6.7-4.96,0-7.36-2.45-7.36-5.07a5.127,5.127,0,0,1,2.64-4.32c2.12-1.35,4.99-1.53,6.53-1.63a3.8,3.8,0,0,1-1.02-2.41,3.306,3.306,0,0,1,.34-1.39,10.655,10.655,0,0,1-1.1.07,5.507,5.507,0,0,1-5.68-5.56,6.471,6.471,0,0,1,2.19-4.75,9.1,9.1,0,0,1,6.13-1.95h7.04l-2.18,1.28h-2.13Zm-2.42,15.73a6.445,6.445,0,0,0-.79-0.03,13.082,13.082,0,0,0-3.59.57,3.926,3.926,0,0,0-2.95,3.65c0,2.51,2.37,4.32,6.03,4.32,3.28,0,5.02-1.63,5.02-3.83,0-1.81-1.12-2.76-3.72-4.68h0Zm0.99-6.73a3.7,3.7,0,0,0,.85-2.59c0-2.55-1.47-6.52-4.31-6.52a3.146,3.146,0,0,0-2.39,1.17,4.2,4.2,0,0,0-.76,2.62c0,2.38,1.34,6.31,4.28,6.31a3.428,3.428,0,0,0,2.33-.99h0Zm8.69-10.27h2v8h-2v-8Zm-3,3h8v2h-8v-2Z" transform="translate(-1163 -4337)"/>
				</symbol>
				<symbol id="icon-arrow-up" viewBox="0 0 84 84">
					<title>arrow-up</title>
					<rect class="cls-1" width="84" height="84"/>
					<path id="interface_-_arrow_top_" data-name="interface - arrow top " class="cls-2" d="M1446.49,5308.88a1.065,1.065,0,0,1-1.38-.35l-16.92-19.13a0.9,0.9,0,0,1,.37-1.28,1.065,1.065,0,0,1,1.38.35l16.92,19.13A0.9,0.9,0,0,1,1446.49,5308.88Zm-34.98,0a1.065,1.065,0,0,0,1.38-.35l16.92-19.13a0.9,0.9,0,0,0-.37-1.28,1.065,1.065,0,0,0-1.38.35l-16.92,19.13A0.9,0.9,0,0,0,1411.51,5308.88Z" transform="translate(-1387 -5256)"/>
				</symbol>
				<symbol id="icon-linked-in" viewBox="0 0 32 32">
					<title>linked-in</title>
					<filter  x="1105" y="4337" width="32" height="32" filterUnits="userSpaceOnUse">
						<feFlood result="flood" flood-color="#ebebeb"/>
						<feComposite result="composite" operator="in" in2="SourceGraphic"/>
						<feBlend result="blend" in2="SourceGraphic"/>
					</filter>

					<path id="linked-in.svg" class="cls-1"
					d="M1121,4337a16,16,0,1,1-16,16A16,16,0,0,1,1121,4337Zm-8.52,7.46a1.52,1.52,0,0,0-.47,1.11,1.563,1.563,0,0,0,.48,1.15,1.616,1.616,0,0,0,1.16.47,1.546,1.546,0,0,0,1.14-.46,1.57,1.57,0,0,0,0-2.26A1.667,1.667,0,0,0,1112.48,4344.46ZM1112,4360h3.27v-12.01H1112V4360Zm5.73,0h3.26v-4.36a11.653,11.653,0,0,1,.16-2.5,3.248,3.248,0,0,1,1.12-1.74,3.072,3.072,0,0,1,1.94-.63,2.687,2.687,0,0,1,1.46.38,2.013,2.013,0,0,1,.83,1.11,11.3,11.3,0,0,1,.24,2.93V4360H1130v-7.56a4,4,0,0,0-1.35-3.22,5.03,5.03,0,0,0-3.51-1.28,5.188,5.188,0,0,0-1.86.34,10.261,10.261,0,0,0-2.28,1.31v-1.6h-3.27V4360Z" transform="translate(-1105 -4337)"/>
				</symbol>
			</defs>
		</svg>


	<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) == 'offcanvas' ) : ?>
	<div class="off-canvas-wrapper">
		<div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
		<?php get_template_part( 'template-parts/mobile-off-canvas' ); ?>
	<?php endif; ?>

	<header id="masthead" class="site-header ba-header">
		<div class="row column">
			<div class="title-bar" data-responsive-toggle="site-navigation">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<img src="<?php header_image(); ?>" alt="<?php the_title() ?>" />
				</a>
				<button class="menu-icon float-right" type="button" data-toggle="mobile-menu"></button>

			</div>

			<nav id="site-navigation" class="main-navigation top-bar">
				<div class="top-bar-left">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<img src="<?php header_image(); ?>" alt="<?php the_title() ?>" />
					</a>
				</div>
				<div class="top-bar-right">
					<?php foundationpress_top_bar_r(); ?>

					<?php if ( ! get_theme_mod( 'wpt_mobile_menu_layout' ) || get_theme_mod( 'wpt_mobile_menu_layout' ) == 'topbar' ) : ?>
						<?php get_template_part( 'template-parts/mobile-top-bar' ); ?>
					<?php endif; ?>
				</div>
			</nav>
		</div>
	</header>

