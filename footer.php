<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "off-canvas-wrap" div and all content after.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>

<footer class="ba-footer">
	<div class="row column">
		<div class="float-left copyright">
			<p>©2014 tulusdriyo. All Rights Reserved.</p>
		</div>

		<div class="float-right">
			<?php if( have_rows('footer_socials') ): ?>
				<ul class="ba-footer-social text-center">
					<?php while( have_rows('footer_socials') ): the_row();
					$link = get_sub_field('social_link');?>
					<?php if( $link ): ?>
						<li class="ba-footer-social__item">
							<a href="<?php echo $link ?>" class="ba-footer-social__link">
								<svg class="ba-footer-social-svg">
									<?php if (strpos($link, 'facebook') !== false) {
										echo '<use xlink:href="#icon-facebook"></use>';
									} elseif(strpos($link, 'twitter') !== false){
										echo '<use xlink:href="#icon-twitter"></use>';
									} elseif(strpos($link, 'google') !== false){
										echo '<use xlink:href="#icon-plus"></use>';
									} elseif(strpos($link, 'linkedin') !== false){
										echo '<use xlink:href="#icon-linked-in"></use>';
									} elseif(strpos($link, 'behance') !== false){
										echo '<use xlink:href="#icon-behance"></use>';
									}?>
								</svg>
							</a>
						</li>
					<?php endif; ?>
				<?php endwhile; ?>
			</ul>
		<?php endif; ?>
	</div>
	</div>
</footer>

<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) == 'offcanvas' ) : ?>
		</div><!-- Close off-canvas wrapper inner -->
	</div><!-- Close off-canvas wrapper -->
</div><!-- Close off-canvas content wrapper -->
<?php endif; ?>


<?php wp_footer(); ?>
</body>
</html>
