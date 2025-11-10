# Project 308 Gallery WordPress Theme

React 기반의 아트 갤러리를 WordPress 테마로 변환한 버전입니다.

## 설치 방법

### 1. 테마 설치
1. `wordpress` 폴더의 모든 파일을 WordPress 테마 디렉토리에 업로드합니다.
   - 경로: `/wp-content/themes/project308-gallery/`

2. WordPress 관리자 페이지에서 외관 > 테마로 이동하여 "Project 308 Gallery" 테마를 활성화합니다.

### 2. 파일 구조
```
project308-gallery/
├── functions.php           # 테마 기능 및 커스텀 포스트 타입
├── header.php             # 헤더 템플릿
├── footer.php             # 푸터 템플릿
├── archive-artwork.php    # 갤러리 그리드 페이지
├── single-artwork.php     # 작품 상세 페이지
├── style.css              # 메인 스타일시트
├── js/
│   ├── carousel.js        # 캐러셀 기능
│   └── gallery.js         # 갤러리 기능
└── README.md
```

### 3. 작품 추가하기

#### 관리자 대시보드에서:

1. **새 작품 추가**
   - 좌측 메뉴에서 "작품" > "새 작품 추가" 클릭

2. **기본 정보 입력**
   - 제목: 작품 제목 입력
   - 내용: 작품 설명 입력 (상세 페이지 하단에 표시됨)
   - 대표 이미지: 갤러리 그리드에 표시될 썸네일 설정

3. **작품 상세 정보 입력**
   - **부제목**: 작품 부제목 (선택사항)
   - **갤러리 이미지 URL**: 캐러셀에 표시될 이미지들의 URL을 쉼표로 구분하여 입력
     ```
     예: https://example.com/image1.jpg, https://example.com/image2.jpg, https://example.com/image3.jpg
     ```
   - **이미지 캡션**: 각 이미지에 대응하는 캡션을 쉼표로 구분하여 입력
     ```
     예: Installation view, Sketch, Detail
     ```

4. **발행**: 작품 발행 버튼 클릭

### 4. 페이지 설정

#### 갤러리 그리드 페이지 (메인 페이지)
- URL: `yourdomain.com/artwork/`
- 자동으로 모든 작품이 그리드 형태로 표시됩니다.

#### 작품 상세 페이지
- URL: `yourdomain.com/artwork/작품-슬러그/`
- 각 작품 클릭 시 자동으로 이동합니다.

### 5. 커스터마이징

#### 스타일 변경
`style.css` 파일에서 다음 요소들을 수정할 수 있습니다:
- 색상 (배경, 텍스트)
- 폰트 크기
- 여백 및 간격
- 애니메이션 속도

#### 폰트 변경
`functions.php`의 `project308_enqueue_scripts()` 함수에서 폰트를 변경할 수 있습니다:
```php
wp_enqueue_style('line-seed-font', 'YOUR_FONT_URL');
```

#### 그리드 레이아웃 변경
`style.css`에서 `.gallery-grid` 클래스의 `grid-template-columns` 값을 수정:
```css
.gallery-grid {
    grid-template-columns: repeat(3, 1fr); /* 3열 -> 원하는 열 수로 변경 */
}
```

### 6. 주요 기능

#### 갤러리 그리드
- ✅ 반응형 레이아웃 (데스크톱 3열, 태블릿 2열, 모바일 1열)
- ✅ 좌우 32px 여백
- ✅ 호버 효과
- ✅ 이미지 레이지 로딩

#### 작품 상세 페이지
- ✅ 이미지 캐러셀 (좌우 스와이프/클릭)
- ✅ 키보드 네비게이션 (화살표 키)
- ✅ 터치/스와이프 지원
- ✅ 이미지 캡션
- ✅ 네비게이터 인디케이터
- ✅ 좌우 이미지 프리뷰 (어둡게)
- ✅ 부드러운 애니메이션 (0.3초)

### 7. 필수 요구사항
- WordPress 5.0 이상
- PHP 7.4 이상
- jQuery (WordPress 기본 포함)

### 8. 문제 해결

#### 작품 목록이 표시되지 않는 경우
1. 설정 > 고유주소로 이동
2. "변경사항 저장" 버튼 클릭 (고유주소 재설정)

#### 이미지가 표시되지 않는 경우
1. 이미지 URL이 올바른지 확인
2. 이미지가 공개적으로 액세스 가능한지 확인
3. HTTPS 사이트의 경우 이미지도 HTTPS여야 함

#### 캐러셀이 작동하지 않는 경우
1. jQuery가 로드되었는지 확인
2. 브라우저 콘솔에서 JavaScript 오류 확인
3. `carousel.js` 파일이 올바르게 로드되었는지 확인

### 9. Instagram 연동
`single-artwork.php`의 Instagram 버튼을 수정하여 실제 Instagram 계정과 연결:
```php
<a href="https://instagram.com/your_account" target="_blank" class="instagram-button">
    <!-- ... -->
</a>
```

### 10. SEO 최적화
- 각 작품의 제목과 내용을 SEO 친화적으로 작성
- 이미지에 적절한 alt 텍스트 추가
- Yoast SEO 또는 Rank Math 플러그인 사용 권장

## 지원
문제가 발생하거나 질문이 있으시면 이슈를 등록해주세요.

## 라이선스
GPL v2 or later
