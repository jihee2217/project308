<?php
/**
 * Project 308 Gallery Theme Functions
 */

// 커스텀 포스트 타입 등록 - 작품(Artwork)
function project308_register_artwork_post_type() {
    $labels = array(
        'name'               => '작품',
        'singular_name'      => '작품',
        'add_new'            => '새 작품 추가',
        'add_new_item'       => '새 작품 추가',
        'edit_item'          => '작품 편집',
        'new_item'           => '새 작품',
        'view_item'          => '작품 보기',
        'search_items'       => '작품 검색',
        'not_found'          => '작품을 찾을 수 없습니다',
        'not_found_in_trash' => '휴지통에 작품이 없습니다'
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'query_var'           => true,
        'rewrite'             => array('slug' => 'artwork'),
        'capability_type'     => 'post',
        'has_archive'         => true,
        'hierarchical'        => false,
        'menu_position'       => 5,
        'supports'            => array('title', 'editor', 'thumbnail'),
        'menu_icon'           => 'dashicons-art'
    );

    register_post_type('artwork', $args);
}
add_action('init', 'project308_register_artwork_post_type');

// 커스텀 필드 추가 (ACF 없이 기본 메타박스 사용)
function project308_add_artwork_meta_boxes() {
    add_meta_box(
        'artwork_details',
        '작품 상세 정보',
        'project308_artwork_details_callback',
        'artwork',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'project308_add_artwork_meta_boxes');

function project308_artwork_details_callback($post) {
    wp_nonce_field('project308_save_artwork_details', 'project308_artwork_nonce');
    
    $subtitle = get_post_meta($post->ID, '_artwork_subtitle', true);
    $gallery_images = get_post_meta($post->ID, '_artwork_gallery_images', true);
    $captions = get_post_meta($post->ID, '_artwork_captions', true);
    ?>
    <p>
        <label for="artwork_subtitle">부제목:</label><br>
        <input type="text" id="artwork_subtitle" name="artwork_subtitle" value="<?php echo esc_attr($subtitle); ?>" style="width:100%;">
    </p>
    <p>
        <label>갤러리 이미지 URL (쉼표로 구분):</label><br>
        <textarea id="artwork_gallery_images" name="artwork_gallery_images" rows="5" style="width:100%;"><?php echo esc_textarea($gallery_images); ?></textarea>
        <small>예: image1.jpg, image2.jpg, image3.jpg</small>
    </p>
    <p>
        <label>이미지 캡션 (쉼표로 구분, 이미지 순서와 동일):</label><br>
        <textarea id="artwork_captions" name="artwork_captions" rows="3" style="width:100%;"><?php echo esc_textarea($captions); ?></textarea>
        <small>예: Installation view, Sketch, Detail</small>
    </p>
    <?php
}

function project308_save_artwork_details($post_id) {
    if (!isset($_POST['project308_artwork_nonce']) || !wp_verify_nonce($_POST['project308_artwork_nonce'], 'project308_save_artwork_details')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['artwork_subtitle'])) {
        update_post_meta($post_id, '_artwork_subtitle', sanitize_text_field($_POST['artwork_subtitle']));
    }

    if (isset($_POST['artwork_gallery_images'])) {
        update_post_meta($post_id, '_artwork_gallery_images', sanitize_textarea_field($_POST['artwork_gallery_images']));
    }

    if (isset($_POST['artwork_captions'])) {
        update_post_meta($post_id, '_artwork_captions', sanitize_textarea_field($_POST['artwork_captions']));
    }
}
add_action('save_post', 'project308_save_artwork_details');

// 테마 지원 기능 추가
function project308_theme_setup() {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    
    // 이미지 사이즈 등록
    add_image_size('gallery-thumbnail', 600, 600, true);
}
add_action('after_setup_theme', 'project308_theme_setup');

// 스타일 및 스크립트 등록
function project308_enqueue_scripts() {
    // LINE Seed JP 폰트
    wp_enqueue_style('line-seed-font', 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
    
    // 메인 스타일
    wp_enqueue_style('project308-style', get_stylesheet_uri());
    
    // 커스텀 스크립트
    wp_enqueue_script('project308-gallery', get_template_directory_uri() . '/js/gallery.js', array('jquery'), '1.0', true);
    
    // 단일 작품 페이지에서만 캐러셀 스크립트 로드
    if (is_singular('artwork')) {
        wp_enqueue_script('project308-carousel', get_template_directory_uri() . '/js/carousel.js', array('jquery'), '1.0', true);
    }
}
add_action('wp_enqueue_scripts', 'project308_enqueue_scripts');
?>
