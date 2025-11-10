/**
 * Gallery grid functionality
 */
(function($) {
    'use strict';

    $(document).ready(function() {
        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.dataset.src;
                        
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // 갤러리 아이템 호버 효과 개선
        $('.gallery-item').on('mouseenter', function() {
            $(this).find('img').css('transform', 'scale(1.05)');
        }).on('mouseleave', function() {
            $(this).find('img').css('transform', 'scale(1)');
        });
    });

})(jQuery);
