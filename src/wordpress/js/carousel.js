/**
 * Carousel functionality for artwork detail page
 */
(function($) {
    'use strict';

    $(document).ready(function() {
        // 캐러셀 데이터 가져오기
        const carouselDataElement = document.getElementById('carousel-data');
        if (!carouselDataElement) return;

        const carouselData = JSON.parse(carouselDataElement.textContent);
        const images = carouselData.images;
        const captions = carouselData.captions;
        let currentIndex = 0;

        // 요소 선택
        const $currentImages = $('.carousel-current-image');
        const $prevImage = $('.carousel-prev .carousel-side-image');
        const $nextImage = $('.carousel-next .carousel-side-image');
        const $caption = $('.carousel-caption');
        const $navigatorDots = $('.navigator-dot');

        // 초기 좌우 이미지 설정
        function updateSideImages() {
            const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
            const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

            $prevImage.attr('src', images[prevIndex]);
            $nextImage.attr('src', images[nextIndex]);
        }

        // 캡션 업데이트
        function updateCaption() {
            $caption.fadeOut(150, function() {
                $caption.text(captions[currentIndex] || '');
                $caption.fadeIn(150);
            });
        }

        // 네비게이터 업데이트
        function updateNavigator() {
            $navigatorDots.removeClass('active');
            $navigatorDots.eq(currentIndex).addClass('active');
        }

        // 중앙 이미지 크기에 따라 좌우 이미지 위치 조정
        function adjustSideImagesPosition() {
            const $activeImage = $('.carousel-current-image.active');
            if ($activeImage.length > 0) {
                const imageWidth = $activeImage.width();
                const halfWidth = imageWidth / 2;

                $('.carousel-prev').css('right', `calc(50% + ${halfWidth}px + 32px)`);
                $('.carousel-next').css('left', `calc(50% + ${halfWidth}px + 32px)`);

                // 캡션 위치도 조정
                const imageHeight = $activeImage.height();
                const containerTop = 120;
                const containerHeight = 502;
                const captionTop = containerTop + (containerHeight - imageHeight) / 2 + imageHeight + 12;
                $caption.css('top', captionTop + 'px');
            }
        }

        // 이미지 전환 함수
        function changeImage(newIndex, direction) {
            const $currentImage = $currentImages.eq(currentIndex);
            const $newImage = $currentImages.eq(newIndex);

            // 애니메이션 클래스 추가
            $currentImage.removeClass('active slide-in-left slide-in-right');
            
            // 새 이미지 표시
            currentIndex = newIndex;
            $newImage.addClass('active');
            
            if (direction === 'next') {
                $newImage.addClass('slide-in-right');
            } else if (direction === 'prev') {
                $newImage.addClass('slide-in-left');
            }

            // 좌우 이미지, 캡션, 네비게이터 업데이트
            updateSideImages();
            updateCaption();
            updateNavigator();

            // 이미지 로드 후 위치 조정
            $newImage.on('load', adjustSideImagesPosition);
            adjustSideImagesPosition();
        }

        // 이전 이미지
        function showPrevious() {
            const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
            changeImage(prevIndex, 'prev');
        }

        // 다음 이미지
        function showNext() {
            const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
            changeImage(nextIndex, 'next');
        }

        // 이벤트 리스너
        $('.carousel-prev').on('click', showPrevious);
        $('.carousel-next').on('click', showNext);

        // 네비게이터 클릭
        $navigatorDots.on('click', function() {
            const newIndex = $(this).data('index');
            if (newIndex !== currentIndex) {
                const direction = newIndex > currentIndex ? 'next' : 'prev';
                changeImage(newIndex, direction);
            }
        });

        // 키보드 네비게이션
        $(document).on('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                showPrevious();
            } else if (e.key === 'ArrowRight') {
                showNext();
            }
        });

        // 터치/스와이프 지원
        let touchStartX = 0;
        let touchEndX = 0;

        $('.carousel-container').on('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });

        $('.carousel-container').on('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    showNext();
                } else {
                    showPrevious();
                }
            }
        }

        // 초기화
        updateSideImages();
        updateNavigator();
        
        // 이미지 로드 후 위치 조정
        $('.carousel-current-image.active').on('load', adjustSideImagesPosition);
        adjustSideImagesPosition();

        // 윈도우 리사이즈 시 위치 재조정
        $(window).on('resize', adjustSideImagesPosition);
    });

})(jQuery);
