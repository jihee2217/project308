<?php
/**
 * Template Name: Gallery Grid
 * Template for displaying artwork archive (gallery grid)
 */
get_header();
?>

<main class="gallery-container">
    <div class="gallery-grid">
        <?php
        $args = array(
            'post_type' => 'artwork',
            'posts_per_page' => -1,
            'orderby' => 'date',
            'order' => 'DESC'
        );
        
        $artwork_query = new WP_Query($args);
        
        if ($artwork_query->have_posts()) :
            while ($artwork_query->have_posts()) : $artwork_query->the_post();
                $subtitle = get_post_meta(get_the_ID(), '_artwork_subtitle', true);
                ?>
                <a href="<?php the_permalink(); ?>" class="gallery-item">
                    <div class="gallery-item-image">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('gallery-thumbnail'); ?>
                        <?php else : ?>
                            <div class="placeholder-image"></div>
                        <?php endif; ?>
                    </div>
                    <div class="gallery-item-info">
                        <h2 class="gallery-item-title"><?php the_title(); ?></h2>
                        <?php if ($subtitle) : ?>
                            <p class="gallery-item-subtitle"><?php echo esc_html($subtitle); ?></p>
                        <?php endif; ?>
                    </div>
                </a>
                <?php
            endwhile;
            wp_reset_postdata();
        else :
            ?>
            <p>작품이 없습니다.</p>
            <?php
        endif;
        ?>
    </div>
</main>

<?php get_footer(); ?>
