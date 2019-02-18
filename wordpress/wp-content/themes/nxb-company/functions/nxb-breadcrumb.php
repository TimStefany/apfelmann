<?php


function nxb_breadcrumb() {

	$showOnHome  = 0; // 1 - show breadcrumbs on the homepage, 0 - don't show
	$delimiter   = '&gt;'; // delimiter between crumbs
	$home        = 'Startseite'; // text for the 'Home' link
	$showCurrent = 1; // 1 - show current post/page title in breadcrumbs, 0 - don't show
	$before      = '<span class="active">'; // tag before the current crumb
	$after       = '</span>'; // tag after the current crumb
	$mainClass   = "breadcrumb";

	global $post;
	$homeLink = get_bloginfo( 'url' );

	$return = '';


	if ( is_home() || is_front_page() ) {

		if ( $showOnHome == 1 ) {
			$return .= '<div class="' . $mainClass . '"><a href="' . $homeLink . '">' . $home . '</a></div>';
		}

	} else {

		$return .= '<div class="' . $mainClass . '"><a href="' . $homeLink . '">' . $home . '</a> ' . $delimiter . ' ';

		if ( is_category() ) {
			$thisCat = get_category( get_query_var( 'cat' ), false );
			if ( $thisCat->parent != 0 ) {
				$return .= get_category_parents( $thisCat->parent, true, ' ' . $delimiter . ' ' );
			}
			$return .= $before . 'Archive by category "' . single_cat_title( '', false ) . '"' . $after;

		} elseif ( is_search() ) {
			$return .= $before . 'Search results for "' . get_search_query() . '"' . $after;

		} elseif ( is_day() ) {
			$return .= '<a href="' . get_year_link( get_the_time( 'Y' ) ) . '">' . get_the_time( 'Y' ) . '</a> ' . $delimiter . ' ';
			$return .= '<a href="' . get_month_link( get_the_time( 'Y' ), get_the_time( 'm' ) ) . '">' . get_the_time( 'F' ) . '</a> ' . $delimiter . ' ';
			$return .= $before . get_the_time( 'd' ) . $after;

		} elseif ( is_month() ) {
			$return .= '<a href="' . get_year_link( get_the_time( 'Y' ) ) . '">' . get_the_time( 'Y' ) . '</a> ' . $delimiter . ' ';
			$return .= $before . get_the_time( 'F' ) . $after;

		} elseif ( is_year() ) {
			$return .= $before . get_the_time( 'Y' ) . $after;

		} elseif ( is_single() && ! is_attachment() ) {
			if ( get_post_type() != 'post' ) {
				$post_type = get_post_type_object( get_post_type() );
				$slug      = $post_type->rewrite;
				$return    .= '<a href="' . $homeLink . '/' . $slug['slug'] . '/">' . $post_type->labels->singular_name . '</a>';
				if ( $showCurrent == 1 ) {
					$return .= ' ' . $delimiter . ' ' . $before . get_the_title() . $after;
				}
			} else {
				$cat  = get_the_category();
				$cat  = $cat[0];
				$cats = get_category_parents( $cat, true, ' ' . $delimiter . ' ' );
				if ( $showCurrent == 0 ) {
					$cats = preg_replace( "#^(.+)\s$delimiter\s$#", "$1", $cats );
				}
				$return .= $cats;
				if ( $showCurrent == 1 ) {
					$return .= $before . get_the_title() . $after;
				}
			}

		} elseif ( ! is_single() && ! is_page() && get_post_type() != 'post' && ! is_404() ) {
			$post_type = get_post_type_object( get_post_type() );
			$return    .= $before . $post_type->labels->singular_name . $after;

		} elseif ( is_attachment() ) {
			$parent = get_post( $post->post_parent );
			$cat    = get_the_category( $parent->ID );
			$cat    = $cat[0];
			$return .= get_category_parents( $cat, true, ' ' . $delimiter . ' ' );
			$return .= '<a href="' . get_permalink( $parent ) . '">' . $parent->post_title . '</a>';
			if ( $showCurrent == 1 ) {
				$return .= ' ' . $delimiter . ' ' . $before . get_the_title() . $after;
			}

		} elseif ( is_page() && ! $post->post_parent ) {
			if ( $showCurrent == 1 ) {
				$return .= $before . get_the_title() . $after;
			}

		} elseif ( is_page() && $post->post_parent ) {
			$parent_id   = $post->post_parent;
			$breadcrumbs = array();
			while ( $parent_id ) {
				$page          = get_page( $parent_id );
				$breadcrumbs[] = '<a href="' . get_permalink( $page->ID ) . '">' . get_the_title( $page->ID ) . '</a>';
				$parent_id     = $page->post_parent;
			}
			$breadcrumbs = array_reverse( $breadcrumbs );
			for ( $i = 0; $i < count( $breadcrumbs ); $i ++ ) {
				$return .= $breadcrumbs[ $i ];
				if ( $i != count( $breadcrumbs ) - 1 ) {
					$return .= ' ' . $delimiter . ' ';
				}
			}
			if ( $showCurrent == 1 ) {
				$return .= ' ' . $delimiter . ' ' . $before . get_the_title() . $after;
			}

		} elseif ( is_tag() ) {
			$return .= $before . 'Posts tagged "' . single_tag_title( '', false ) . '"' . $after;

		} elseif ( is_author() ) {
			global $author;
			$userdata = get_userdata( $author );
			$return   .= $before . 'Articles posted by ' . $userdata->display_name . $after;

		} elseif ( is_404() ) {
			$return .= $before . 'Error 404' . $after;
		}

		if ( get_query_var( 'paged' ) ) {
			if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) {
				$return .= ' (';
			}
			$return .= __( 'Page' ) . ' ' . get_query_var( 'paged' );
			if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) {
				$return .= ')';
			}
		}

		$return .= '</div>';
	}

	return $return;

}
