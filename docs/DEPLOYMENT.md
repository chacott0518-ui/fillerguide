# 배포 가이드

Cloudflare DNS, Vercel 배포, GitHub 저장소 연결 절차입니다.
도메인·secret·인증값은 이 문서에 하드코딩하지 않습니다.

## 01 GitHub 저장소 연결

프로젝트를 GitHub 저장소에 푸시하고 Vercel과 연결합니다.

## 02 Vercel 프로젝트 연결

Vercel 대시보드에서 Import Git Repository로 프로젝트를 추가합니다.

## 03 production branch 설정

`main` 또는 운영 브랜치를 Production Branch로 지정합니다.

## 04 NEXT_PUBLIC_SITE_URL 설정

Production 환경변수에 실제 도메인을 입력합니다. 예: `https://example.com` (끝 슬래시 없음)

## 05 Cloudflare DNS 연결

도메인 DNS를 Cloudflare에 연결하고 Vercel이 안내하는 CNAME/A 레코드를 설정합니다.

## 06 apex 또는 www canonical 결정

`www`와 apex 중 하나를 `NEXT_PUBLIC_SITE_URL`로 고정하고 나머지는 리다이렉트합니다.

## 07 SSL 확인

HTTPS가 정상 적용되는지 확인합니다.

## 08 sitemap 확인

`{SITE_URL}/sitemap.xml`에 공개 URL만 포함되는지 확인합니다.

## 09 robots 확인

`{SITE_URL}/robots.txt`에서 sitemap URL과 allow 규칙을 확인합니다.

## 10 네이버 소유확인

`NEXT_PUBLIC_NAVER_SITE_VERIFICATION` 입력 후 재배포합니다.

## 11 Google 소유확인

`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` 입력 후 재배포합니다.

## 12 Bing 소유확인

`NEXT_PUBLIC_BING_SITE_VERIFICATION` 입력 후 재배포합니다.

## 13 환경변수 구분

`NEXT_PUBLIC_`은 클라이언트 노출 가능, secret은 서버 전용입니다. `.env.example` 참고.

## 14 Preview와 Production 환경 분리

Preview에는 테스트 URL, Production에는 실제 도메인을 사용합니다.

## 15 Supabase 연결 시 secret 관리

`SUPABASE_SERVICE_ROLE_KEY`는 Vercel 서버 환경변수에만 저장합니다.

## 16 Google Sheets 연결 시 secret 관리

`GOOGLE_SHEETS_WEB_APP_URL`, `GOOGLE_SHEETS_SHARED_SECRET`은 서버 환경변수에만 저장합니다.

## 17 배포 후 URL 확인

`/비용`, `/회복기간`, `/주의사항`, `/병원선택`, `/후기`, `/faq` 페이지가 정상 응답하는지 확인합니다.

## 18 구조화 데이터 확인

Rich Results Test로 WebSite, Article, FAQPage, BreadcrumbList를 검증합니다.

## 19 모바일 확인

320px~430px 뷰포트에서 헤더, 메뉴, 하단 바, 본문 오버플로를 확인합니다.

## 20 rollback 기준

빌드 실패, canonical 오류, 리다이렉트 오류, 상담폼 오작동 시 이전 배포로 롤백합니다.
