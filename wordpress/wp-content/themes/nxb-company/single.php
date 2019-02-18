<?php get_header(); ?>
<main>

	<?php while ( have_posts() ) : the_post(); ?>
		<div class="container pt-5">
			<div class="block block-headline">
				<!-- <div class="block-headline-suphead suphead"></div>-->
				<h2 class="block-headline-headline"><?= esc_html( get_the_title() ); ?></h2>
			</div>
			<p class="text-muted"><?= get_the_date(); ?> <?= get_the_time(); ?></p>
		</div>
		<?= get_the_content(); ?>
	<?php endwhile; ?>


	<div class="block block-section block-padding">
		<div class="container">
			<?= nxb_shortcode_share(); ?>
		</div>
	</div>

	<div class="block block-section block-padding bg-gray">
		<div class="container">
			<div class="text-uppercase mb-4">Das könnte dich auch interessieren</div>
			<?= nxb_shortcode_news_list(['limit' => 2]); ?>
		</div>
	</div>

	<?php include 'partials/partners.php' ?>
</main>
<?php get_footer(); ?>
