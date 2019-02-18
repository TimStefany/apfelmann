<?php

/* Check if Class Exists. */
if ( ! class_exists( 'Navwalker' ) ) {
	/**
	 * Navwalker class.
	 *
	 * Origin of this class is WP_Bootstrap_Navwalker (https://github.com/wp-bootstrap/wp-bootstrap-navwalker) and Advanced Menu Widget (https://de.wordpress.org/plugins/advanced-menu-widget) from JohnnyPea
	 *
	 * These args can be used:
	 * 'only_related'
	 * 'depth'
	 * 'filter'
	 * 'filter_selection'
	 * 'include_parent'
	 * 'start_depth'
	 *
	 *
	 * @author Marvin Enghardt
	 */
	class NXB_Navwalker extends Walker_Nav_Menu {

		protected $ancestors = array();

		/**
		 * Selected children.
		 */
		protected $selected_children = 0;

		protected $direct_path = 0;

		protected $include_parent = 0;

		protected $start_depth = 0;

		/**
		 * Starts the list before the elements are added.
		 *
		 * @since 3.0.0
		 *
		 * @see   Walker::start_lvl()
		 *
		 * @param string   $output Used to append additional content (passed by reference).
		 * @param int      $depth  Depth of menu item. Used for padding.
		 * @param stdClass $args   An object of wp_nav_menu() arguments.
		 */
		public function start_lvl( &$output, $depth = 0, $args = array() ) {

			// Default classes
			$classes = [ 'sub-menu' ];

			/**
			 * Filters the CSS class(es) applied to a menu list element.
			 *
			 * @since 4.8.0
			 *
			 * @param array    $classes The CSS classes that are applied to the menu `<ul>` element.
			 * @param stdClass $args    An object of `wp_nav_menu()` arguments.
			 * @param int      $depth   Depth of menu item. Used for padding.
			 */
			$class_names = join( ' ', apply_filters( 'nav_menu_submenu_css_class', $classes, $args, $depth ) );
			$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

			$output .= "<ul$class_names>";
		}

		/**
		 * Ends the list of after the elements are added.
		 *
		 * @since 3.0.0
		 *
		 * @see   Walker::end_lvl()
		 *
		 * @param string   $output Used to append additional content (passed by reference).
		 * @param int      $depth  Depth of menu item. Used for padding.
		 * @param stdClass $args   An object of wp_nav_menu() arguments.
		 */
		public function end_lvl( &$output, $depth = 0, $args = array() ) {
			$output .= "</ul>";
		}

		/**
		 * Starts the element output.
		 *
		 * @since 3.0.0
		 * @since 4.4.0 The {@see 'nav_menu_item_args'} filter was added.
		 *
		 * @see   Walker::start_el()
		 *
		 * @param string   $output Used to append additional content (passed by reference).
		 * @param WP_Post  $item   Menu item data object.
		 * @param int      $depth  Depth of menu item. Used for padding.
		 * @param stdClass $args   An object of wp_nav_menu() arguments.
		 * @param int      $id     Current item ID.
		 */
		public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {

			$classes = empty( $item->classes ) ? array() : (array) $item->classes;

			/**
			 * Filters the arguments for a single nav menu item.
			 *
			 * @since 4.4.0
			 *
			 * @param stdClass $args  An object of wp_nav_menu() arguments.
			 * @param WP_Post  $item  Menu item data object.
			 * @param int      $depth Depth of menu item. Used for padding.
			 */
			$args = apply_filters( 'nav_menu_item_args', $args, $item, $depth );



			// Apply custom classes "nav-item", "has-children", "current-page-ancestor" and "active"
			$newClasses = [ 'nav-item' ];

			if ( isset( $args->has_children ) && $args->has_children ) {
				$newClasses[] = 'has-children';
			}
			if ( in_array( 'current-page-ancestor', $classes ) ) {
				$newClasses[] = 'current-page-ancestor';
			} else {
				if ( in_array( 'current-menu-item', $classes ) || in_array( 'current-menu-parent', $classes ) ) {
					$newClasses[] = 'active';
				}
			}
			$classes = $newClasses;


			/**
			 * Filters the CSS class(es) applied to a menu item's list item element.
			 *
			 * @since 3.0.0
			 * @since 4.1.0 The `$depth` parameter was added.
			 *
			 * @param array    $classes The CSS classes that are applied to the menu item's `<li>` element.
			 * @param WP_Post  $item    The current menu item.
			 * @param stdClass $args    An object of wp_nav_menu() arguments.
			 * @param int      $depth   Depth of menu item. Used for padding.
			 */
			$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args, $depth ) );
			$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

			/**
			 * Filters the ID applied to a menu item's list item element.
			 *
			 * @since 3.0.1
			 * @since 4.1.0 The `$depth` parameter was added.
			 *
			 * @param string   $menu_id The ID that is applied to the menu item's `<li>` element.
			 * @param WP_Post  $item    The current menu item.
			 * @param stdClass $args    An object of wp_nav_menu() arguments.
			 * @param int      $depth   Depth of menu item. Used for padding.
			 */
			$id = apply_filters( 'nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args, $depth );
			$id = $id ? ' id="' . esc_attr( $id ) . '"' : '';


			$output .= '<li' . $id . $class_names . '>';

			$atts           = array();
			$atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
			$atts['target'] = ! empty( $item->target ) ? $item->target : '';
			$atts['rel']    = ! empty( $item->xfn ) ? $item->xfn : '';
			$atts['href']   = ! empty( $item->url ) ? $item->url : '';
			$atts['class']  = 'nav-link';


			/**
			 * Filters the HTML attributes applied to a menu item's anchor element.
			 *
			 * @since 3.6.0
			 * @since 4.1.0 The `$depth` parameter was added.
			 *
			 * @param array    $atts   {
			 *                         The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored.
			 *
			 * @type string    $title  Title attribute.
			 * @type string    $target Target attribute.
			 * @type string    $rel    The rel attribute.
			 * @type string    $href   The href attribute.
			 * }
			 *
			 * @param WP_Post  $item   The current menu item.
			 * @param stdClass $args   An object of wp_nav_menu() arguments.
			 * @param int      $depth  Depth of menu item. Used for padding.
			 */
			$atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args, $depth );

			$attributes = '';
			foreach ( $atts as $attr => $value ) {
				if ( ! empty( $value ) ) {
					$value      = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
					$attributes .= ' ' . $attr . '="' . $value . '"';
				}
			}

			/** This filter is documented in wp-includes/post-template.php */
			$title = apply_filters( 'the_title', $item->title, $item->ID );

			/**
			 * Filters a menu item's title.
			 *
			 * @since 4.4.0
			 *
			 * @param string   $title The menu item's title.
			 * @param WP_Post  $item  The current menu item.
			 * @param stdClass $args  An object of wp_nav_menu() arguments.
			 * @param int      $depth Depth of menu item. Used for padding.
			 */
			$title = apply_filters( 'nav_menu_item_title', $title, $item, $args, $depth );

			$item_output = $args->before;
			$item_output .= '<a' . $attributes . '>';
			$item_output .= $args->link_before . $title . $args->link_after;
			$item_output .= '</a>';
			$item_output .= $args->after;

			/**
			 * Filters a menu item's starting output.
			 *
			 * The menu item's starting output only includes `$args->before`, the opening `<a>`,
			 * the menu item's title, the closing `</a>`, and `$args->after`. Currently, there is
			 * no filter for modifying the opening and closing `<li>` for a menu item.
			 *
			 * @since 3.0.0
			 *
			 * @param string   $item_output The menu item's starting HTML output.
			 * @param WP_Post  $item        Menu item data object.
			 * @param int      $depth       Depth of menu item. Used for padding.
			 * @param stdClass $args        An object of wp_nav_menu() arguments.
			 */
			$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
		}

		/**
		 * Ends the element output, if needed.
		 *
		 * @since 3.0.0
		 *
		 * @see   Walker::end_el()
		 *
		 * @param string   $output Used to append additional content (passed by reference).
		 * @param WP_Post  $item   Page data object. Not used.
		 * @param int      $depth  Depth of page. Not Used.
		 * @param stdClass $args   An object of wp_nav_menu() arguments.
		 */
		public function end_el( &$output, $item, $depth = 0, $args = array() ) {
			$output .= "</li>";
		}



		public function display_element( $element, &$children_elements, $max_depth, $depth, $args, &$output ) {
			if ( ! $element ) {
				return;
			}

			$display = ( isset( $element->display ) ) ? $element->display : 0;

			$awm_logic = false;
			if ( ( ( $this->selected_children && $display ) || ! $this->selected_children ) && ( ( $this->start_depth && $depth >= $this->start_depth ) || ! $this->start_depth ) ) {
				if ( ( $args[0]->only_related && ( $element->menu_item_parent == 0 || ( in_array( $element->menu_item_parent, $this->ancestors ) || $display ) ) )
				     || ( ! $args[0]->only_related && ( $display || ! $args[0]->filter_selection ) )
				) {
					$awm_logic = true;
				}
			}

			$id_field = $this->db_fields['id'];
			$id       = $element->$id_field;


			//display this element
			$this->has_children = ! empty( $children_elements[ $id ] );
			if ( isset( $args[0] ) && is_array( $args[0] ) ) {
				$args[0]['has_children'] = $this->has_children; // Backwards compatibility.
			}

			if ( $awm_logic ) {
				$cb_args = array_merge( array( &$output, $element, $depth ), $args );
				call_user_func_array(array($this, 'start_el'), $cb_args);
			}

			// descend only when the depth is right and there are childrens for this element
			if ( ($max_depth == 0 || $max_depth > $depth+1 ) && isset( $children_elements[$id]) ) {

				foreach( $children_elements[ $id ] as $child ){

					$current_element_markers = array( 'current-menu-item', 'current-menu-parent', 'current-menu-ancestor', 'current_page_item' );

					$descend_test = array_intersect( $current_element_markers, $child->classes );

					if ( $args[0]->strict_sub || ! in_array($child->menu_item_parent, $this->ancestors) && ! $display )
						$temp_children_elements = $children_elements;

					if ( ! isset( $newlevel ) ) {
						$newlevel = true;
						//start the child delimiter
						if ( $awm_logic ) {
							$cb_args = array_merge( array(&$output, $depth), $args);
							call_user_func_array(array($this, 'start_lvl'), $cb_args);
						}
					}

					if ( $args[0]->only_related && ! $args[0]->filter_selection &&
					     ( ! in_array( $child->menu_item_parent, $this->ancestors ) &&
					       ! $display && ! $this->direct_path ) ||
					     ( $args[0]->strict_sub && empty( $descend_test ) && ! $this->direct_path ) ) {
						unset ( $children_elements );
					}

					if ( ( $this->direct_path && ! empty( $descend_test ) ) || !$this->direct_path ) {
						$this->display_element( $child, $children_elements, $max_depth, $depth + 1, $args, $output );
					}

					if ($args[0]->strict_sub || !in_array($child->menu_item_parent, $this->ancestors) && !$display)
						$children_elements = $temp_children_elements;
				}
				unset( $children_elements[ $id ] );
			}

			//end this element
			if ( $awm_logic ) {
				if ( isset($newlevel) && $newlevel ){
					$cb_args = array_merge( array(&$output, $depth), $args);
					call_user_func_array(array($this, 'end_lvl'), $cb_args);
				}

				$cb_args = array_merge( array(&$output, $element, $depth), $args);
				call_user_func_array(array($this, 'end_el'), $cb_args);
			}
		}

		public function walk( $elements, $max_depth ) {
			$args = array_slice(func_get_args(), 2);
			$output = '';

			/*
			 * Advanced Menu Widget args.
			 */
			if ( ! empty( $args[0]->include_parent ) ) {
				$this->include_parent = 1;
			}

			if ( ! empty($args[0]->start_depth) ) {
				$this->start_depth = $args[0]->start_depth;
			}

			if ( $args[0]->filter == 1 ) {
				$this->direct_path = 1;
			} elseif ( $args[0]->filter == 2 ) {
				$this->selected_children = 1;
			}
			/*
			 * END Advanced Menu Widget args.
			 */

			//invalid parameter or nothing to walk
			if ( $max_depth < -1 || empty( $elements ) ) {
				return $output;
			}

			$parent_field = $this->db_fields['parent'];

			// flat display
			if ( -1 == $max_depth ) {
				$empty_array = array();
				foreach ( $elements as $e )
					$this->display_element( $e, $empty_array, 1, 0, $args, $output );
				return $output;
			}

			/*
			 * Need to display in hierarchical order.
			 * Separate elements into two buckets: top level and children elements.
			 * Children_elements is two dimensional array, eg.
			 * Children_elements[10][] contains all sub-elements whose parent is 10.
			 */
			$top_level_elements = array();
			$children_elements  = array();
			foreach ( $elements as $e) {
				if ( empty( $e->$parent_field ) )
					$top_level_elements[] = $e;
				else
					$children_elements[ $e->$parent_field ][] = $e;
			}

			/*
			 * When none of the elements is top level.
			 * Assume the first one must be root of the sub elements.
			 */
			if ( empty($top_level_elements) ) {

				$first = array_slice( $elements, 0, 1 );
				$root = $first[0];

				$top_level_elements = array();
				$children_elements  = array();
				foreach ( $elements as $e) {
					if ( $root->$parent_field == $e->$parent_field )
						$top_level_elements[] = $e;
					else
						$children_elements[ $e->$parent_field ][] = $e;
				}
			}

			if ( $args[0]->only_related || $this->include_parent || $this->selected_children || $args[0]->parent_title ) {
				foreach ( $elements as &$el ) {
					$post_parent = ( $args[0]->post_parent || $this->include_parent  ) ? in_array('current-menu-parent',$el->classes) : 0;

					if ( $this->selected_children ) {
						if ( $el->current || $post_parent )
							$args[0]->filter_selection = $el->ID;

					} elseif ( $args[0]->only_related ) {
						if ( $el->current || $post_parent ) {
							$el->display = 1;
							$this->selective_display($el->ID, $children_elements);

							$ancestors = array();
							$menu_parent = $el->menu_item_parent;
							while ( $menu_parent && ! in_array( $menu_parent, $ancestors ) ) {
								$ancestors[] = (int) $menu_parent;
								$temp_menu_paret = get_post_meta($menu_parent, '_menu_item_menu_item_parent', true);
								$menu_parent = $temp_menu_paret;
							}
							$this->ancestors = $ancestors;
						}
					}

					if ( $this->include_parent ) {
						if ( $el->ID == $args[0]->filter_selection )
							$el->display = 1;
					}

					if ( $args[0]->parent_title && $el->current_item_parent === true ) {
						$parent_title_key = 'parent_title_' . $args[0]->menu->slug;
						$parent_title = $el->title;
						$old_parent_title = wp_cache_get( $parent_title_key );
						if ( $parent_title != $old_parent_title ) {
							wp_cache_set( $parent_title_key, $parent_title );
						}
					}
				}
			}

			$strict_sub_arg = ( $args[0]->strict_sub ) ? 1 : 0;

			if ( $args[0]->filter_selection || $this->selected_children )
				$top_parent = $this->selective_display( $args[0]->filter_selection, $children_elements, $strict_sub_arg );

			$current_element_markers = array( 'current-menu-item', 'current-menu-parent', 'current-menu-ancestor', 'current_page_item' );

			foreach ( $top_level_elements as $e ) {

				if ( $args[0]->only_related ) {

					$temp_children_elements = $children_elements;

					// descend only on current tree
					$descend_test = array_intersect( $current_element_markers, $e->classes );
					if ( empty( $descend_test ) && ! $this->direct_path ) {
						unset ( $children_elements );
					}

					if ( ( $this->direct_path && ! empty( $descend_test ) ) || ( ! $this->direct_path ) ) {
						$this->display_element( $e, $children_elements, $max_depth, 0, $args, $output );
					}

					$children_elements = $temp_children_elements;

				} elseif ( (! empty( $top_parent ) && $top_parent == $e->ID ) || empty( $top_parent ) ) {
					$this->display_element( $e, $children_elements, $max_depth, 0, $args, $output );
				}
			}

			if ( ! $output && $args[0]->filter_selection ) {
				$empty_array = array();
				foreach ( $children_elements as $orphans ) {
					foreach ( $orphans as $op ) {
						if ( $op->current === true ) {
							$op->display = 1;
							$this->display_element( $op, $empty_array, 1, 0, $args, $output );
						}
					}
				}
			}

			return $output;
		}

		public function selective_display( $itemID, $children_elements, $strict_sub = false ) {
			if ( ! empty( $children_elements[$itemID] ) ) {
				foreach ( $children_elements[$itemID] as &$childchild ) {
					$childchild->display = 1;
					if ( ! empty( $children_elements[$childchild->ID] ) && ! $strict_sub ) {
						$this->selective_display($childchild->ID, $children_elements);
					}
				}
			}

		}

	}
}
