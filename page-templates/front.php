<?php
/*
Template Name: Front
*/
get_header(); ?>

<section id="ba-intro" class="ba-intro-text text-center" style="background-image: url(<?php the_field('intro_background_image') ?>)">
	<div class="row column">
		<h1 class="ba-intro-text__title">
			<?php the_field('intro_title') ?>
		</h1>
	<?php if( get_field('intro_text') ): ?>
		<p class="ba-intro-text__info">
			<?php the_field('intro_text') ?>
		</p>
	<?php endif; ?>
	</div>
</section>

<section id="ba-about" class="ba-section">
	<div class="row column">
		<div class="columns medium-4">
			<div class="ba-about-img">
				<img src="<?php the_field('about_background_image'); ?>" alt="">

				<div class="ba-about-img__overlay">
					<h5 class="ba-about-img__title" style="background: url(<?php the_field('about_icon') ?>) 50% 0 no-repeat;">
						<?php the_field('about_title') ?>
					</h5>
				</div>
			</div>
		</div>

		<div class="columns medium-7 medium-offset-1">
			<div class="ba-about-text">
			<?php if( get_field('about_text') ):

				the_field('about_text');

			 endif; ?>

			<?php if( get_field('about_button_text') ): ?>
				<div class="ba-about-text__button">
					<a href="<?php the_field('about_button_link') ?>" class="button hollow">
						<?php the_field('about_button_text') ?>
					</a>
				</div>
			<?php endif; ?>

			</div>
		</div>
	</div>
</section>

<section id="ba-services" class="ba-section ba-services">
	<div class="row small-collapse ba-services-flex">
		<div class="column medium-8">
			<div class="ba-services__block row medium-up-2 small-up-1 medium-collapse data-equalizer" >

			<?php if (have_rows('services_list')) : ?>
				 <?php while (have_rows('services_list')) : the_row(); ?>
					<div class="column">
						<div class="ba-services__item">
							<h4 class="ba-services__title ba-services__title--design" style="background: url(<?php the_sub_field('image'); ?>) 50% 0 no-repeat">
								<?php the_sub_field('title') ?>
							</h4>
							<p>
								<?php the_sub_field('text') ?>
							</p>
						</div>
					</div>
				 <?php endwhile; ?>
			<?php endif; ?>

			</div>
		</div>

		<div class="ba-single-service column medium-4">
			<div class="ba-services__item ba-services__item--big" style="background: url(<?php the_field('services_bacgkround_image') ?>)">
				<div class="ba-services__info">
					<h4 class="ba-services__title ba-services__title--big">
						<?php the_field('services_title') ?>
					</h4>

					<?php if( get_field('services_text') ): ?>

						<?php the_field('services_text') ?>

					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="ba-works" class="ba-section ba-works" style="background: url(<?php the_field('works_background_image') ?>) 50% no-repeat; background-size: cover;">
	<div class="row column">
		<h2 class="ba-works__title" style="background: url(<?php the_field('works_icon') ?>) 50% 0 no-repeat;">
			<?php the_field('works_title') ?>
		</h2>

		<div class="row">
		<?php
		$worksArgs = array(
			'post_type'=>'works_slider',
			'posts_per_page'=>-1,
		);
			$works = new WP_Query($worksArgs);?>
			<?php if($works->have_posts()): ?>
				<div class="column medium-centered medium-8">
					<div class="ba-works-slider">
						<?php while($works->have_posts()): $works->the_post() ?>
							<div class="ba-works-slide">
								<?php the_post_thumbnail('slider'); ?>
							</div>
						<?php endwhile; ?>
						<svg class="ba-works-prev">
							<use xlink:href="#icon-prev"></use>
						</svg>
						<svg class="ba-works-next">
							<use xlink:href="#icon-next"></use>
						</svg>
					</div>
				</div>
			<?php wp_reset_postdata(); ?>
			<?php endif;?>

			<a href="<?php the_field('works_button_link') ?>" class="button button--works">
				<?php the_field('works_button_text') ?>
			</a>
		</div>

	</div>
</section>

<section id="ba-team" class="ba-section ba-team">
	<div class="row column">
		<h2 class="ba-team__title" style="background: url(<?php the_field('team_section_icon') ?>) 50% 0 no-repeat;">
			<?php the_field('team_section_title') ?>
		</h2>

		<?php
		$membeArgsArgs = array(
			'post_type'=>'team_slider',
			'posts_per_page'=>-1,
		);
		$membeArgs = new WP_Query($membeArgsArgs);?>

		<?php if($membeArgs->have_posts()): ?>
			<div class="ba-team-slider">

			<?php while($membeArgs->have_posts()): $membeArgs->the_post() ?>
				<div class="ba-team-slide">

					<div class="ba-team-slide__info">
						<h4 class="ba-team-slide__title">
							<?php the_title() ?>
						</h4>
						<p>
							<?php if( get_field('member_position') ): ?>
								<?php the_field('member_position'); ?>
							<?php endif; ?>
						</p>
						<?php the_post_thumbnail('team'); ?>
					</div>


					<?php if( have_rows('member_socials') ): ?>
						<ul class="ba-team-slide-social text-center">
							<?php while( have_rows('member_socials') ): the_row();
							$link = get_sub_field('social_link');?>
							<?php if( $link ): ?>
								<li class="ba-team-slide-social__item">
									<a href="<?php echo $link ?>" class="ba-team-slide-social__link">
										<svg class="ba-team-slide-social-svg">
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
			<?php endwhile; ?>

				<svg class="ba-team-prev">
					<use xlink:href="#icon-prev"></use>
				</svg>
				<svg class="ba-team-next">
					<use xlink:href="#icon-next"></use>
				</svg>
			</div>
		<?php endif;?>
		<?php wp_reset_postdata(); ?>
	</div>
</section>

<section id="ba-contact" class="ba-contact">
	<div class="ba-map">
		<?php

		$location = get_field('contact_map');

		if( !empty($location) ): ?>
		<div class="acf-map">
			<div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
		</div>
		<?php endif; ?>
	</div>
<div class="ba-contact-content">
	<div class="row column">

		<h2 class="ba-contact-content__title" style="background: url(<?php the_field('contact_icon') ?>) 50% 0 no-repeat;">
			<?php the_field('contact_title') ?>
		</h2>

		<?php the_field('contact_form'); ?>
	</div>
</div>
</section>

<?php get_footer();
