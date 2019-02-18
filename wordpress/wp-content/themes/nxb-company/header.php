<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header>


    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <div>
                <a class="navbar-brand" href="<?= get_home_url() ?>">
                    <img class="header-logo" src="<?= get_parent_theme_file_uri('assets/images/logo.png') ?>"
                         alt="Logo"/>
                </a>

            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <?php if (has_nav_menu('main')) : ?>
                    <?php wp_nav_menu(['theme_location' => 'main',
                        'menu_class' => 'navbar-nav',
                        'depth' => 2,
                        'container' => false,
                        'walker' => new WP_Bootstrap_Navwalker(),]);
                    ?>
                <?php endif; ?>
            </div>
    </nav>
</header>

