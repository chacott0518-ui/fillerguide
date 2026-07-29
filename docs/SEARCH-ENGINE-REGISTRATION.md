# 검색엔진 색인 등록 체크리스트

실제 인증값·도메인은 이 문서에 하드코딩하지 않습니다.
환경변수와 각 플랫폼에서 발급받은 값만 사용하세요.

## 01 실제 도메인 연결

배포 도메인을 확정하고 DNS를 연결합니다.

## 02 NEXT_PUBLIC_SITE_URL 입력

예: `https://example.com` (끝 슬래시 없이)

## 03 Vercel 환경변수 입력

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_NAVER_SITE_VERIFICATION`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- `NEXT_PUBLIC_KAKAO_AD_URL`
- `NEXT_PUBLIC_CONTACT_PHONE`

## 04 네이버 서치어드바이저 사이트 등록

네이버 서치어드바이저에 사이트를 등록합니다.

## 05 네이버 소유확인 값 입력

발급받은 값을 `NEXT_PUBLIC_NAVER_SITE_VERIFICATION`에 넣고 재배포합니다.

## 06 네이버 sitemap 제출

`{SITE_URL}/sitemap.xml` 을 제출합니다.

## 07 핵심 URL 수집 요청

메인과 6개 하위 한글 URL을 수집 요청합니다.

## 08 Google Search Console 등록

속성을 등록합니다.

## 09 Google 소유확인 값 입력

`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`에 입력 후 재배포합니다.

## 10 Google sitemap 제출

`{SITE_URL}/sitemap.xml` 을 제출합니다.

## 11 Bing Webmaster Tools 등록

사이트를 등록합니다.

## 12 Bing 소유확인 값 입력

`NEXT_PUBLIC_BING_SITE_VERIFICATION`에 입력 후 재배포합니다.

## 13 Bing sitemap 제출

`{SITE_URL}/sitemap.xml` 을 제출합니다.

## 14 배포 후 canonical 확인

각 페이지 `<link rel="canonical">` 이 `NEXT_PUBLIC_SITE_URL` 기준과 일치하는지 확인합니다.

## 15 robots.txt 확인

`{SITE_URL}/robots.txt` 에서 allow·sitemap URL을 확인합니다.

## 16 sitemap.xml 확인

공개 URL만 포함되고 한글 슬러그가 정확한지 확인합니다.

## 17 OG 이미지 확인

소셜 미리보기 이미지가 절대 URL로 열리는지 확인합니다.

## 18 구조화 데이터 확인

Rich Results / 스키마 검증 도구로 WebSite·Article·FAQPage·BreadcrumbList를 확인합니다.

## 19 색인 상태 기록

플랫폼별 색인·노출 상태를 주기적으로 기록합니다.

## 20 재수집 요청 기준

콘텐츠 대규모 수정, URL 변경, 메타 오류 수정 후 재수집을 요청합니다.
