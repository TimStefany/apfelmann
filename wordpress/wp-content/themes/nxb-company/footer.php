<footer class="block-padding">

    <div class="container">
        <div class="footer-center">
            <img class="footer-logo" src="<?= get_parent_theme_file_uri('assets/images/logo.png') ?>">
            <div class="footer-nav">
                <?php if (has_nav_menu('footer')) : ?>
                    <nav class="footer-nav-content">
                        <?php wp_nav_menu([
                            'theme_location' => 'footer',
                            'menu_class' => 'nav',
                            'container' => false,
                            'depth' => 1,
                            'walker' => new WP_Bootstrap_Navwalker(),
                        ]);
                        ?>
                    </nav>
                <?php endif; ?>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
