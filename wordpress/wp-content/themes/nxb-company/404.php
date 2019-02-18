<?php
/**
 * Created by PhpStorm.
 * User: marvin
 * Date: 12.08.18
 * Time: 17:14
 */

get_header(); ?>

	<main class="container mt-5 mb-8">
			<h1 class="text-orange">404</h1>
			<p>Die angeforderte Seite existiert leider nicht.<br>Um zur Startseite zurückzukommen, klicken Sie bitte <a href="<?= get_home_url() ?>">hier</a>.</p>
	</main>

<?php
get_footer();
