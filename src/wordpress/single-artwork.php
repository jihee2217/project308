<?php
/**
 * Template for single artwork
 */
get_header();

while (have_posts()) : the_post();
    $gallery_images = get_post_meta(get_the_ID(), '_artwork_gallery_images', true);
    $captions = get_post_meta(get_the_ID(), '_artwork_captions', true);
    
    // 이미지와 캡션을 배열로 변환
    $images_array = array_map('trim', explode(',', $gallery_images));
    $captions_array = array_map('trim', explode(',', $captions));
    
    // 메인 썸네일을 첫 이미지로 사용
    if (has_post_thumbnail()) {
        array_unshift($images_array, get_the_post_thumbnail_url(get_the_ID(), 'full'));
        array_unshift($captions_array, 'Installation view');
    }
    ?>

    <div class="artwork-detail bg-black">
        <!-- Header -->
        <header class="artwork-header">
            <!-- Back Button -->
            <a href="<?php echo get_post_type_archive_link('artwork'); ?>" class="back-button">
                ← Project 308
            </a>

            <!-- Title - Centered -->
            <p class="artwork-header-title">
                <?php the_title(); ?>
            </p>

            <!-- Instagram Button -->
            <div class="instagram-button">
                <span class="instagram-handle">@project308</span>
                <div class="instagram-icon">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                        <g>
                            <path d="M10 1.8c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.04 0 2.672-.01 2.987-.058 4.042-.045.975-.207 1.504-.344 1.857-.182.467-.398.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.04.058-2.672 0-2.987-.01-4.042-.058-.975-.045-1.504-.207-1.857-.344-.467-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857C1.81 12.987 1.8 12.67 1.8 10c0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.467.398-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344C7.013 1.81 7.33 1.8 10 1.8zM10 0C7.284 0 6.944.012 5.877.06 4.813.108 4.086.278 3.45.525c-.658.256-1.216.598-1.772 1.154C1.123 2.234.78 2.792.525 3.45.278 4.086.108 4.813.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.048 1.064.218 1.79.465 2.427.256.658.598 1.216 1.154 1.772.556.556 1.114.898 1.772 1.154.637.247 1.363.417 2.427.465C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c1.064-.048 1.79-.218 2.427-.465.658-.256 1.216-.598 1.772-1.154.556-.556.898-1.114 1.154-1.772.247-.637.417-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.048-1.064-.218-1.79-.465-2.427-.256-.658-.598-1.216-1.154-1.772C16.766 1.123 16.208.78 15.55.525 14.914.278 14.187.108 13.123.06 12.056.012 11.716 0 10 0z" fill="black"/>
                            <path d="M10 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666z" fill="black"/>
                            <circle cx="15.338" cy="4.662" r="1.2" fill="black"/>
                        </g>
                    </svg>
                </div>
            </div>
        </header>

        <!-- Main Content - Carousel -->
        <main class="artwork-main">
            <div class="carousel-container">
                <!-- Previous Image - Left -->
                <div class="carousel-side carousel-prev" data-direction="prev">
                    <img src="" alt="Previous" class="carousel-side-image">
                </div>

                <!-- Current Image (Center) -->
                <div class="carousel-center">
                    <div class="carousel-center-wrapper">
                        <?php foreach ($images_array as $index => $image) : ?>
                            <img 
                                src="<?php echo esc_url($image); ?>" 
                                alt="<?php the_title(); ?>" 
                                class="carousel-current-image <?php echo $index === 0 ? 'active' : ''; ?>"
                                data-index="<?php echo $index; ?>"
                            >
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Next Image - Right -->
                <div class="carousel-side carousel-next" data-direction="next">
                    <img src="" alt="Next" class="carousel-side-image">
                </div>
            </div>

            <!-- Caption -->
            <p class="carousel-caption">
                <?php echo isset($captions_array[0]) ? esc_html($captions_array[0]) : ''; ?>
            </p>

            <!-- Description -->
            <div class="artwork-description">
                <?php the_content(); ?>
            </div>

            <!-- Navigator -->
            <div class="carousel-navigator">
                <?php foreach ($images_array as $index => $image) : ?>
                    <div class="navigator-dot <?php echo $index === 0 ? 'active' : ''; ?>" data-index="<?php echo $index; ?>"></div>
                <?php endforeach; ?>
            </div>
        </main>

        <!-- Hidden data for JavaScript -->
        <script type="application/json" id="carousel-data">
            {
                "images": <?php echo json_encode($images_array); ?>,
                "captions": <?php echo json_encode($captions_array); ?>
            }
        </script>
    </div>

    <?php
endwhile;

get_footer();
?>
