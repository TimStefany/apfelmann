<?php

/**
 * Load bootstrap navwalker
 */
include 'classes/NXB_Navwalker.php';
include 'classes/WP_Bootstrap_Navwalker.php';

include 'functions/nxb-parse.php';
include 'functions/nxb-acf-recursive.php';
include 'functions/shortcodes.php';
include 'functions/nxb-breadcrumb.php';

function nxb_theme_enqueue_styles()
{
    wp_enqueue_style('nxb-theme', get_stylesheet_directory_uri() . '/dist/main.css');
    wp_enqueue_script('nxb-theme', get_stylesheet_directory_uri() . '/dist/main.js', null, null, true);
}

add_action('wp_enqueue_scripts', 'nxb_theme_enqueue_styles');


function nxb_enqueue_admin_scripts()
{
    wp_enqueue_style('nxb-theme-backend', get_stylesheet_directory_uri() . '/dist/styles-backend.css');

    wp_register_script(
        'nxb-blocks', // Has to be the same as the register_block_type 'script' name
        get_stylesheet_directory_uri() . '/dist/blocks.js',
        ['wp-blocks', 'wp-element', 'wp-editor'],
        filemtime(plugin_dir_path(__FILE__) . 'dist/blocks.js')
    );
    wp_enqueue_script('nxb-blocks');

}

add_action('admin_enqueue_scripts', 'nxb_enqueue_admin_scripts');


function nxb_theme_setup()
{
    load_theme_textdomain('nxb');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails', ['post']);

    add_image_size('stb-image-card', 600, 300, true);
//	add_image_size( 'twentyseventeen-thumbnail-avatar', 100, 100, true );

    register_nav_menus([
        'main' => __('Main Menu', 'nxb'),
        'footer' => __('Footer Menu', 'nxb'),
    ]);

    // Color palette
    add_theme_support('editor-color-palette', [
        [
            'name' => __('Gray'),
            'slug' => 'gray',
            'color' => '#575757',
        ],
        [
            'name' => __('Light-red'),
            'slug' => 'light-red',
            'color' => '#E3321E',
        ],
        [
            'name' => __('Dark-Red'),
            'slug' => 'dark-red',
            'color' => '#6A1417',
        ],
        [
            'name' => __('White'),
            'slug' => 'white',
            'color' => '#FFFFFF',
        ],

    ]);
}

add_action('after_setup_theme', 'nxb_theme_setup');


/**
 * Registers Gutenberg blocks.
 */
function nxb_blocks_register_blocks()
{

    if (!function_exists('register_block_type')) {
        // Gutenberg is not active.
        return;
    }
    register_block_type('nxb-blocks/accordion');
    register_block_type('nxb-blocks/accordion-element');
    register_block_type('nxb-blocks/anchor');
    register_block_type('nxb-blocks/nxb-textblock');
    register_block_type('nxb-blocks/button');
    register_block_type('nxb-blocks/column');
    register_block_type('nxb-blocks/column-lg');
    register_block_type('nxb-blocks/nxb-columns-1-1');
    register_block_type('nxb-blocks/nxb-columns-1-1-1');
    register_block_type('nxb-blocks/nxb-columns-1-1-1-1');
    register_block_type('nxb-blocks/gray-box');
    register_block_type('nxb-blocks/headline');
    register_block_type('nxb-blocks/hero');
    register_block_type('nxb-blocks/image-card');
    register_block_type('nxb-blocks/quote');
    register_block_type('nxb-blocks/section');
    register_block_type('nxb-blocks/nxb-content-right');
    register_block_type('nxb-blocks/nxb-review-block');
    register_block_type('nxb-blocks/nxb-tab-block');
	register_block_type('nxb-blocks/nxb-card');
    register_block_type('nxb-blocks/nxb-review-block');
    register_block_type('nxb-blocks/nxb-mail');
    register_block_type('nxb-blocks/nxb-telephone');
}

add_action('init', 'nxb_blocks_register_blocks');


/**
 * Stop WordPress from modifying .htaccess permalink rules
 */
add_filter('flush_rewrite_rules_hard', '__return_false');


/**
 * Add ACF fields
 */
function nxb_acf_add_local_field_groups()
{

    acf_add_local_field_group([
        'key' => 'group_page_options', // Must start with group_
        'title' => 'Optionen',
        'position' => 'side',
        'fields' => [
            [
                'key' => 'field_page_slider', // Must start with field_
                'label' => 'Slider',
                'name' => 'page_slider',
                'type' => 'text',
                'placeholder' => '[rev_slider alias="slideralias"]',
            ],
        ],
        'location' => [
            [
                [
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'page',
                ],
            ],
        ],
    ]);

//	acf_add_local_field( [
//		'key'    => 'field_1',
//		'label'  => 'Sub Title',
//		'name'   => 'sub_title',
//		'type'   => 'text',
//		'parent' => 'page_options',
//	] );

}

add_action('acf/init', 'nxb_acf_add_local_field_groups');


/**
 * Custom Logo - Navbar
 */

function themename_custom_logo_setup()
{
    $defaults = array(
        'height' => 30,
        'width' => 30,
        'flex-height' => true,
        'flex-width' => true,
        'header-text' => array('site-title', 'site-description'),
    );
    add_theme_support('custom-logo', $defaults);
}

add_action('after_setup_theme', 'themename_custom_logo_setup');



