# abortioninfo.co.kr 종합 SEO·AEO·GEO·E-E-A-T 감사 보고서

- 감사 대상: `D:\abortioninfo` (Next.js App Router, Vercel 배포 전제)
- 감사 방식: 코드/설정 파일 정적 검토(Read/Glob/Grep)만 수행. 빌드·실행·네트워크 접근 없음.
- 감사 범위: `app`, `components`, `config`, `content`, `lib`, `types`, `public`, `proxy.ts`, `next.config.ts`, `.env.example`, `docs`, `.cursor/rules`
- 표기 원칙: 코드에서 직접 확인한 사실만 기술. 실행 결과(렌더링, 실제 색인 상태, 실제 Search Console 등록 여부 등)는 **"코드만으로 확인 불가"**로 표시.

---

## 1. 종합 점수 (100점 만점)

| 영역 | 배점 | 획득 | 비고 |
|---|---|---|---|
| 기술 SEO (robots/sitemap/canonical/metadataBase) | 15 | 12 | 구조는 완비, verification 로직 버그 존재 |
| 콘텐츠 SEO / AEO (직접답변, 목차, 표, FAQ) | 15 | 13 | 6페이지 모두 직접답변·목차·표·FAQ 구조 갖춤 |
| GEO/AI 검색 대응 (llms.txt 등) | 10 | 4 | llms.txt 없음, IndexNow 키만 존재하고 제출 로직 없음 |
| JSON-LD 스키마 완성도 | 15 | 10 | Article에 author/publisher 없음, WebSite/Organization이 하위 페이지엔 없음 |
| E-E-A-T / 의료 YMYL 신뢰성 | 15 | 6 | 개인정보처리방침·이용약관 전부 비활성, 작성자/감수자 미표시 |
| OG/Twitter 메타데이터 | 10 | 6 | 전 페이지 동일 OG 이미지(페이지별 썸네일 미반영) |
| 내부 링크/URL 구조/중복 콘텐츠 | 10 | 8 | 실제 서비스 페이지는 정상, 미사용 고아 콘텐츠 1건 |
| 접근성/시맨틱/성능 | 10 | 8 | next/image, alt, 시맨틱 태그 양호 |
| **합계** | **100** | **67** | |

---

## 2. 적용 완료

- `app/sitemap.ts` — 홈 + 콘텐츠 6페이지(총 7개) 정적 사이트맵. `changeFrequency`, `priority` 포함.
- `app/robots.ts` — `allow: "/"` 전체 허용 + `sitemap` 링크. 색인 차단 규칙 없음(확인됨, 아래 §19 참고).
- `app/manifest.ts` — PWA manifest, name/short_name/theme_color/icons 구성.
- `app/rss.xml/route.ts` — 홈 + 6페이지 RSS 2.0, XML 이스케이프 처리(`escapeXml`) 적용.
- `lib/site-url.ts` — `NEXT_PUBLIC_SITE_URL` 우선, www 제거, production에서 localhost 차단하는 `assertSiteUrlAllowed` 가드 존재. 견고함.
- `lib/metadata.ts` `buildPageMetadata()` — 콘텐츠 6페이지 각각 canonical(`alternates.canonical`), robots(`index:true, follow:true`), keywords, category 개별 설정.
- Naver 사이트 인증: `public/naverdddbf3ce26751e76c6776337cde4af0f.html` 파일 + 홈 메타 태그 이중 적용.
- IndexNow 키 파일: `public/6d81ec87af3b4376a23275f7a404260f.txt` 존재(내용 = 파일명과 일치, 형식 정상).
- JSON-LD: `MedicalClinic`(홈), `WebSite`(홈), `WebPage`/`MedicalWebPage`(전 페이지), `BreadcrumbList`(하위 6페이지), `Article`(하위 5페이지, FAQ 페이지 제외), `FAQPage`(FAQ가 있는 모든 페이지), `ItemList`(홈) — 요청된 스키마 6종 전부 코드상 구현되어 있음. `components/seo/JsonLd.tsx`에서 `<` 이스케이프로 XSS 방지 처리(`lib/schema.ts`, `components/seo/JsonLd.tsx:6`).
- H1: 페이지당 1개만 렌더링 확인(`app/page.tsx:52`, `components/content/ArticleTemplate.tsx:126`).
- 직접 답변형 도입부: 전 섹션에 `directAnswer` 필드 사용, `ArticleSectionBlock.tsx:106-108`에서 렌더링.
- 핵심요약 카드: 홈 + 6페이지 전부 `keySummary` 보유.
- 번호형 목차: `PageTocCards`/`SectionTocCards`가 앵커 이동 + `history.replaceState`로 URL 해시 갱신(`components/content/PageTocCards.tsx:88-101`).
- 표: `ResponsiveTable`/`CompareTable`(모바일 카드 전환 모드 지원, `types/content.ts:70-78`).
- FAQ: 아코디언 컴포넌트가 `aria-expanded`, `aria-controls`로 접근성 처리(`components/content/FaqList.tsx:22-49`), 답변 텍스트가 닫힌 상태에서도 DOM에 존재(크롤러가 읽을 수 있음).
- 내부 링크: `MegaMenu.tsx`가 `CONTENT_CARDS`(6개 전부) 기준으로 실제 `<Link href>` 렌더링(JS 클릭 전용 아님), `RelatedPages.tsx`가 각 페이지에서 홈 + 나머지 5개 링크 제공. 6개 실서비스 페이지 사이에 **고아 페이지 없음**.
- 레거시 URL 리다이렉트: `proxy.ts` + `config/routes.ts`의 `LEGACY_REDIRECTS`가 구 URL(`/비용`, `/faq` 등)을 308로 신규 한글 URL로 영구 리다이렉트.
- 이미지: 전부 `next/image` 사용, 개별 `alt`/`width`/`height` 명시(`config/media.ts` 전체), WebP 포맷 사용, LCP 이미지만 `priority` 적용(`components/content/LongGuideImage.tsx:37`, `ArticleTemplate.tsx:130`).
- 의료정보 면책 문구: 전 페이지 하단 `HealthInformationNotice` + 홈 `ExamNoticeBox` + Footer 공통 문구로 3중 노출(`components/content/HealthInformationNotice.tsx`, `components/layout/Footer.tsx:27-33`).
- 병원 실체 정보: `CONTACT`에 실제 상호(`연세365산부인과의원`), 주소, 전화, 지도 URL 명시(`config/contact.ts`).

---

## 3. 부분 적용

- **Google/Bing 사이트 인증**: `config/site.ts:47-51`에서 `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION` 환경변수 배선은 되어 있으나 `.env.example`에는 빈 값(`.env.example:20-22`). **실제 운영 환경변수 값 설정 여부는 코드만으로 확인 불가.**
- **WebSite/Organization(MedicalClinic) 스키마 범위**: `lib/schema.ts`의 `organizationJsonLd()`, `websiteJsonLd()`는 `app/page.tsx:101-102`(홈)에서만 호출됨. 하위 6페이지(`ArticleTemplate.tsx:87-104`)는 이 두 스키마를 직접 포함하지 않고 `isPartOf: { "@id": "홈#website" }`로만 참조. 요청 항목("WebSite, Organization/MedicalClinic")이 전 페이지 기준으로는 부분 적용.
- **IndexNow**: 키 파일(`public/6d81ec87af3b4376a23275f7a404260f.txt`)만 존재. 실제 IndexNow API 호출(등록/재제출) 코드는 저장소 전체에서 발견되지 않음(검색 완료, 관련 함수·route 없음) → **키 발급만 되어 있고 자동 제출 로직은 없음.**
- **개인정보처리방침/이용약관 등 법률 문서**: `config/legal.ts` 타입·Footer 렌더링 로직은 완비되어 있으나 `LEGAL` 전체가 `enabled: false`(`config/legal.ts:7-22`) → 기능은 구현, 콘텐츠는 미게시.
- **operatorEntity(운영 주체)**: `config/entity.ts:15-18`에서 `enabled: true`로 설정되어 있으나, `operatorEntity`를 실제로 화면이나 JSON-LD에 렌더링하는 코드가 없음(grep 결과 `config/site.ts`, `config/entity.ts` 외 참조 없음) → 값은 준비됐지만 출력 파이프라인 없음.

---

## 4. 누락

- **llms.txt**: 저장소 전체에 없음(`public/`, `app/` 어디에도 없음). GEO/AI 검색(ChatGPT, Perplexity 등) 대응을 위한 표준 파일 부재.
- **Article JSON-LD의 `author`/`publisher` 필드**: `lib/schema.ts:116-138` `articleJsonLd()`에 `headline, description, image, datePublished, dateModified, articleSection, keywords, mainEntityOfPage, isPartOf`만 있고 `author`, `publisher` 키가 전혀 없음. Google 권장 Article 필수/권장 필드 중 핵심 2개 누락.
- **작성자/감수자(reviewer) 표시**: `reviewerEntity`(`config/entity.ts:26-28`)가 `enabled: false`로 처음부터 비활성. 본문 어디에도 "작성자", "감수자", "의료진 검수" 문구나 UI가 없음(전체 컴포넌트 검색 결과 없음). 의료 YMYL 콘텐츠에 저자·감수 정보 전무.
- **개인정보처리방침 / 이용약관 / 비급여 진료비 안내 / 운영자 정보 / 쿠키 안내**: 5종 법률 문서 전부 `enabled: false`로 실제 페이지·콘텐츠 없음(`config/legal.ts`). Footer는 활성화된 항목만 렌더링하므로 현재 화면에는 어떤 법률 링크도 노출되지 않음(`components/layout/Footer.tsx:15-18`).
- **apple-touch-icon류 PNG 아이콘**: `app/icon.svg`, `public/icon.svg`만 존재. iOS 홈 화면 추가용 PNG 아이콘 파일이나 `apple-icon` 컨벤션 파일 없음(Glob 결과 없음).
- **분석 도구 연동**: `config/integrations.ts`에서 `googleAnalyticsId`, `metaPixelId`, `naverAnalyticsId` 전부 `undefined`. 검색 성과 측정/AEO 노출 추적 수단 없음(의도적 비활성일 수 있음, "코드만으로 확인 불가"는 실제 GA 스크립트가 별도 삽입됐는지 여부).

---

## 5. 오류와 위험 요소

### 5.1 [오류] 홈페이지 검색엔진 인증 메타데이터가 Google/Bing 값을 덮어씀
- 파일: `app/layout.tsx:34-50`
```45  verification: {
46    other: {
47      "naver-site-verification":
48        "a1dabda7342da9966de7827e0502703515ec941f",
49    },
50  },
```
- `baseMetadata`(28번째 줄, `buildPageMetadata()` 결과)는 `lib/metadata.ts:buildVerification()`을 통해 `google`, `naver`, `bing` 세 값을 모두 조합하지만, 그 아래 `export const metadata` 객체에서 `verification` 키를 **통째로 재정의**하면서 naver 하드코딩 값만 남기고 google/bing을 완전히 삭제함(객체 스프레드 `...baseMetadata` 뒤에 동일 키 재선언 시 마지막 값이 승리).
- 결과: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION` 환경변수를 설정해도 **홈페이지에는 절대 반영되지 않음.** 하위 6페이지는 `buildPageMetadata()`를 그대로 사용하므로 정상 반영됨 — 홈과 하위 페이지 간 인증 메타데이터 불일치.
- 우선순위: **P0** (Search Console/Bing Webmaster 홈 소유확인 실패 가능).

### 5.2 [오류] 전 페이지 Open Graph/Twitter 이미지가 항상 동일한 1개 이미지로 고정
- 파일: `lib/metadata.ts:8, 39-48, 61-91`
- `DEFAULT_OG_IMAGE = "/images/og/임신중절수술-kakao.png"`가 하드코딩되어 있고, `buildOgImages()`가 이 값만 사용. `buildPageMetadata()`는 인자로 받는 `seo.ogImage`, `seo.socialImage`(각 페이지 콘텐츠에 이미 존재, 예: `content/pages/cost.ts:61-62`)를 **전혀 참조하지 않음.**
- 결과: 비용/회복기간/주의사항/병원선택/후기/FAQ 6개 페이지가 카카오톡·페이스북·트위터 공유 시 전부 동일한 홈 이미지를 노출. 페이지별 고유 썸네일(`TOPIC_MEDIA.*.thumbnail`)이 데이터에는 있지만 메타데이터 생성 로직에 연결되지 않음.
- 참고: `articleJsonLd()`(`lib/schema.ts:124`)와 `webPageJsonLd()`(`ArticleTemplate.tsx:92`)는 `page.seo.socialImage`를 정상적으로 사용 — **메타태그(OG/Twitter)만 빠지고 JSON-LD는 정상**이라는 점에서 로직 불일치가 명확함.
- 우선순위: **P1**.

### 5.3 [위험] 완전히 도달 불가능한 고아 콘텐츠 + 슬러그 충돌 잠재 위험
- 파일: `content/pages/faq-questions.ts` (전체), `content/faqs/questions-30.ts` (전체, `FaqItem` 30개)
- `FAQ_QUESTIONS_PAGE`(`id: "faqHub"`)는 `href: ROUTES.faq`(`"/임신중절수술-자주-묻는-질문"`)를 사용 — 이는 이미 사용 중인 `FAQ_PAGE`(`id: "faq"`, `content/pages/faq-page.ts:12`)와 **완전히 동일한 slug/href**.
- 그러나 `content/pages/index.ts:1-18`의 `CONTENT_PAGES` 배열에는 `FAQ_QUESTIONS_PAGE`가 import되지 않음 → 현재는 라우팅 불가능한 죽은 코드(dead code)이며 실사용 중인 페이지와 충돌하지 않음.
- 위험: 추후 누군가 `FAQ_QUESTIONS_PAGE`를 `CONTENT_PAGES`에 추가하면 즉시 **동일 URL에 대한 canonical/제목/구조화 데이터 충돌**이 발생함(둘 다 `/임신중절수술-자주-묻는-질문`을 자신의 canonical로 주장).
- 우선순위: **P2** (현재는 죽은 코드지만 향후 재사용 시 사고 위험이 명확함).

### 5.4 [위험] YMYL 의료 정보 사이트에 법률 고지 콘텐츠 전무
- 파일: `config/legal.ts:1-22` (전체 `enabled: false`)
- 개인정보처리방침, 이용약관, 비급여 진료비 안내, 운영자 정보, 쿠키 안내 5종 모두 비활성. 현재 상담폼(`config/forms.ts:6-8`, `enabled: false`)이 꺼져 있어 직접적인 개인정보 수집은 없는 것으로 보이나, 카카오톡 상담·전화 CTA(`config/contact.ts`)를 통해 외부로 연결되는 구조이며, 의료 광고·정보 제공 사이트로서 최소한의 개인정보처리방침/면책 고지 문서는 통상 요구됨.
- 우선순위: **P0**.

### 5.5 [위험] 작성자·감수자 정보 전면 부재 (E-E-A-T)
- 파일: `config/entity.ts:26-28`(`reviewerEntity.enabled = false`), 전체 컴포넌트 grep 결과 `operatorEntity`/`reviewerEntity`를 렌더링하는 코드 없음.
- 의료 YMYL 콘텐츠 6개 페이지 + Article 스키마 어디에도 작성자, 감수 의료진, 최종 검수일 표시가 없음. `publishedAt`/`updatedAt`(예: `content/pages/cost.ts:21-22`)은 존재하지만 "누가" 작성/검수했는지 신호가 전혀 없음.
- 우선순위: **P0**.

### 5.6 [위험] 프로젝트 루트에 타 프로젝트 스펙 파일 혼입
- 파일: `.cursor/rules/project-spec.mdc:2, 6, 19, 289`
- 내용이 "노안백내장"/"cataract-guide"(`D:\cataract-guide`, `D:\kimtaehyung-ortho-v2` 참조) 프로젝트의 규칙 문서이며, 현재 저장소(`abortioninfo`, 임신중절수술 주제)와 무관함. `alwaysApply: true`로 설정되어 있어 AI 코딩 도구가 이 문서를 이 프로젝트에도 항상 적용 규칙으로 오인할 가능성이 있음.
- 우선순위: **P2** (기능 버그는 아니나 향후 AI 보조 작업 시 혼선 유발 가능).

### 5.7 [경고] 정적 날짜 하드코딩
- 파일: `app/sitemap.ts:6`(`HOME_LAST_MODIFIED = "2026-07-27"`), `app/rss.xml/route.ts:6`(`HOME_PUB_DATE`), `content/pages/home.ts:420`(`CARD_PUBLISHED_AT`)
- 콘텐츠 실제 수정과 무관하게 고정된 날짜 문자열. 배포 자동화 없이 수동 갱신해야 하므로 실수로 방치되면 `lastModified`가 실제와 어긋날 수 있음. 현재 시점(2026-07-28) 기준으로는 하루 차이라 심각하지 않음.
- 우선순위: **P2**.

---

## 6. 페이지별 문제

| 페이지 | href | 문제 |
|---|---|---|
| 홈 (`/`) | `app/page.tsx`, `app/layout.tsx` | §5.1 verification 버그(google/bing 인증 누락), OG 이미지는 홈 자체 이미지라 §5.2 영향 없음 |
| 임신중절수술-비용 | `content/pages/cost.ts` | §5.2로 인해 카카오/SNS 공유 시 고유 썸네일 대신 홈 이미지 노출 |
| 임신중절수술-회복기간 | `content/pages/recovery.ts` | 동일(§5.2) |
| 임신중절수술-주의사항 | `content/pages/caution.ts` | 동일(§5.2) |
| 임신중절수술-병원-선택 | `content/pages/hospital.ts` | 동일(§5.2) |
| 임신중절수술-후기 | `content/pages/review.ts` | 동일(§5.2). 후기 페이지는 가짜 후기 미작성 원칙 준수 확인(`intro` 문구에서 "가상 환자 후기를 작성하지 않는다"고 명시, `content/pages/review.ts:18`) |
| 임신중절수술-자주-묻는-질문 | `content/pages/faq-page.ts` | 동일(§5.2). Article 스키마는 의도적으로 제외됨(`ArticleTemplate.tsx:100`, `isFaqCanonical` 분기) — FAQ 페이지 특성상 정상 |
| (미라우팅) `faq-questions.ts` | 도달 불가 | §5.3 참고. 실제 사용자는 절대 접근 불가 |

---

## 7. 스키마별 문제

- **MedicalClinic** (`organizationJsonLd`, `lib/schema.ts:12-32`): 홈에만 존재. 필드 자체는 실제 상호·주소·전화·지도링크 사용(허위 없음). 문제 없음.
- **WebSite** (`websiteJsonLd`, `lib/schema.ts:34-48`): 홈에만 존재, 하위 페이지는 `@id` 참조만. §3 부분 적용 참고.
- **WebPage/MedicalWebPage** (`webPageJsonLd`, `lib/schema.ts:50-79`): 전 페이지 정상 적용. `keywords`를 8개로 슬라이스하는 방어 로직 있음(과도한 키워드 나열 방지, 양호).
- **Article** (`articleJsonLd`, `lib/schema.ts:116-138`): §5(누락) `author`/`publisher` 필드 없음. `mainEntityOfPage`가 `{"@type": "MedicalWebPage", "@id": pageUrl}`로 별도 선언되어 있는데, 같은 페이지에 `webPageJsonLd()`가 만드는 별도 `MedicalWebPage` 노드(`@id: url`, 같은 `pageUrl`)와 `@id`가 동일함 — 두 스키마 블록이 같은 `@id`를 공유하는 것은 JSON-LD `@graph` 상 병합 가능하나, 별도 `<script>` 태그로 각각 직렬화되고 있어(`JsonLd.tsx:12-18`) 하나의 `@graph` 배열로 묶이지 않고 독립된 script 태그들로 병렬 출력됨. 대부분의 리치 리절트 파서는 이를 허용하지만 엄격한 검증기에서 "중복 @id" 경고가 나올 수 있음.
- **BreadcrumbList** (`breadcrumbJsonLd`, `lib/schema.ts:97-110`): 하위 6페이지 전부 2단계(홈>현재) 구조로 정상 적용. 홈에는 미적용(적절함, 1단계라 불필요).
- **FAQPage** (`faqPageJsonLd`, `lib/schema.ts:140-154`): 홈 + FAQ가 있는 모든 하위 페이지에 적용. `@id`가 `path#faq`로 페이지별 유일함(양호). 화면에 실제로 보이지 않는 FAQ를 스키마에만 넣는 사례는 발견되지 않음(요청 §12 준수 확인).
- **ItemList** (`itemListJsonLd`, `lib/schema.ts:81-95`): 홈에만 적용, `CONTENT_CARDS` 6개 기준 정상.

---

## 8. 중복 메타데이터 / 중복 콘텐츠

- **중복 OG/Twitter 이미지**: 위 §5.2. 7개 페이지 중 6개가 동일 이미지 URL을 공유(사실상 "중복 메타데이터").
- **FAQ 문항 재사용**: `common-01`~`common-12`가 홈(`content/pages/home.ts:405-418`)과 FAQ 페이지(`content/faqs/index.ts` `FAQ_HUB_GROUPS`)에서 부분적으로 겹쳐 사용됨. 각 페이지가 서로 다른 `@id`(`path#faq`)를 갖고 있어 스키마 상 충돌은 아니지만, 동일 질문·답변 텍스트가 여러 URL에 그대로 반복 노출되는 것은 완전한 콘텐츠 차별화 관점에서는 경미한 중복.
- **잠재적 slug 충돌**: §5.3 (`FAQ_QUESTIONS_PAGE` vs `FAQ_PAGE`) — 현재는 미사용이라 실제 충돌은 발생하지 않음.
- **레거시 URL**: `config/routes.ts:12-21` `LEGACY_REDIRECTS` 8개 전부 308 영구 리다이렉트로 최종 URL로 수렴 확인 — 중복 색인 위험 없음(정상 처리).

---

## 9. P0 / P1 / P2 수정 우선순위

**P0 (즉시 수정 필요 — 색인·신뢰성에 직접 영향)**
1. `app/layout.tsx:45-50` — verification 객체가 google/bing 값을 삭제하는 버그 수정(스프레드 병합 방식으로 변경).
2. `config/legal.ts` — 최소한 개인정보처리방침 1건이라도 작성·활성화(`enabled: true`, `href` 지정).
3. E-E-A-T — 작성자/감수자 표시 체계 마련(`reviewerEntity` 활성화 + 화면·Article 스키마 `author`/`publisher` 반영).

**P1 (단기 수정 권장 — 검색 노출 품질에 영향)**
4. `lib/metadata.ts` `buildOgImages()` — 페이지별 `seo.ogImage`/`seo.socialImage`를 실제로 사용하도록 수정.
5. `lib/schema.ts` `articleJsonLd()` — `author`, `publisher` 필드 추가.
6. 하위 6페이지에도 `WebSite`/`Organization` 참조가 올바르게 해석되는지 리치 리절트 테스트로 검증(현재는 `@id` 참조 방식만 존재).

**P2 (중장기 개선)**
7. `public/llms.txt` 신설 검토(AI 검색·GEO 대응).
8. IndexNow 실제 제출(ping) 로직 구현(현재 키 파일만 존재).
9. `content/pages/faq-questions.ts` + `content/faqs/questions-30.ts` — 사용할 계획이 없다면 삭제, 사용할 계획이면 슬러그를 `FAQ_PAGE`와 겹치지 않게 재설계.
10. `.cursor/rules/project-spec.mdc` — 타 프로젝트(노안백내장) 스펙 파일 정리(이 저장소와 무관한 `alwaysApply` 규칙 제거 또는 이동).
11. `app/sitemap.ts` / `app/rss.xml/route.ts`의 하드코딩 날짜를 콘텐츠 데이터의 `updatedAt` 최댓값 계산 등으로 자동화 검토.
12. apple-touch-icon 등 PNG 아이콘 세트 보강.

---

## 10. 가장 먼저 수정할 항목 10개 (요약)

1. `app/layout.tsx` verification 객체 병합 버그 수정 (P0)
2. 개인정보처리방침 최소 1건 게시 (P0)
3. 작성자/감수자 정보 노출 체계 도입 (P0)
4. Article JSON-LD `author`/`publisher` 추가 (P1)
5. 페이지별 OG/Twitter 이미지 실제 반영 (P1)
6. Google/Bing Search Console·Webmaster 실제 소유확인 값 운영 환경변수 설정 여부 재확인 (코드상 배선은 있음, 값 존재 여부는 확인 불가)
7. IndexNow 실제 제출 로직 추가 (P2)
8. llms.txt 작성 검토 (P2)
9. 미사용 `faq-questions.ts`/`questions-30.ts` 정리 또는 슬러그 재설계 (P2)
10. `.cursor/rules/project-spec.mdc` 타 프로젝트 문서 정리 (P2)

---

## 11. 기존 정상 요소 중 수정하면 안 되는 항목

- `lib/site-url.ts`의 도메인 정규화·production localhost 차단 로직(`assertSiteUrlAllowed`) — 안전장치로 잘 설계됨. 그대로 유지.
- `components/seo/JsonLd.tsx`의 `<` → `\u003c` 이스케이프 처리 — XSS 방지 목적, 제거 금지.
- `proxy.ts` + `config/routes.ts`의 `LEGACY_REDIRECTS` 308 리다이렉트 체계 — 정상 동작 중, 임의 변경 시 기존 색인된 구 URL 트래픽 손실 위험.
- `app/[slug]/page.tsx`의 `normalizeSlug()`(NFC 정규화) — 한글 자모 분리 이슈(NFC/NFD) 방지용, 제거 금지.
- `MegaMenu.tsx`/`RelatedPages.tsx`의 실제 `<Link href>` 기반 내부 링크 구조 — JS 전용 네비게이션이 아니므로 크롤러 친화적, 유지.
- FAQ 아코디언이 닫힌 상태에서도 답변을 DOM에 유지하는 방식(`FaqList.tsx`) — 크롤러 가독성 확보, `display:none` 등으로 완전히 숨기지 않도록 유지.
- `HOME_FAQ_IDS`, `FAQ_HUB_GROUPS` 등 콘텐츠와 UI 분리 구조(`content/` vs `components/`) — 유지보수성 좋음, 임의로 인라인화하지 말 것.
- 6개 실서비스 콘텐츠 페이지의 면책 문구 3중 배치(`ExamNoticeBox`/`HealthInformationNotice`/Footer) — 의료 정보 면책 신호로 유지 필요.

---

## 12. 최종 결론

이 사이트는 Next.js App Router의 메타데이터·사이트맵·robots·JSON-LD 컨벤션을 정확히 이해하고 구현한 기술적 기반 위에 서 있다. 홈 + 6개 콘텐츠 페이지 모두 직접답변형 도입부, 핵심요약, 번호형 목차, 표, FAQ, BreadcrumbList, Article/FAQPage 스키마를 갖추고 있고, 레거시 URL 리다이렉트와 내부 링크 구조도 고아 페이지 없이 정상 동작한다.

다만 세 가지 층위에서 실제 검색 성과와 신뢰도를 깎아먹는 문제가 확인된다. 첫째, **기술적 결함**으로 홈페이지 verification 메타데이터가 google/bing 값을 삭제하는 코드 버그(§5.1)와 전 페이지가 동일 OG 이미지를 공유하는 구현 누락(§5.2)이 있다. 둘째, **구조화 데이터 완성도**에서 Article 스키마에 author/publisher가 없어 리치 리절트 및 신뢰 신호가 약하다(§5, §7). 셋째, 가장 중요한 **E-E-A-T/YMYL 신뢰성** 문제로, 의료 정보를 다루는 사이트임에도 개인정보처리방침이 전무하고(§5.4) 작성자·감수 의료진 정보가 어디에도 표시되지 않는다(§5.5) — 이는 코드 품질 문제가 아니라 운영 정책 결정이 반영되지 않은 상태로, Google의 의료 YMYL 품질 기준에서 가장 먼저 지적될 항목이다.

부수적으로 llms.txt 부재, IndexNow 제출 로직 부재는 GEO/AI 검색 대응 관점의 개선 여지이며, 완전히 도달 불가능한 고아 콘텐츠(`faq-questions.ts`)는 현재는 무해하지만 향후 실수로 활성화될 경우 슬러그 충돌을 일으킬 잠재 위험으로 남아있다.

우선순위는 P0 3건(verification 버그, 법률 문서, E-E-A-T 저자/감수 정보)부터 처리하는 것을 권장하며, 이 세 가지는 코드 변경 범위가 크지 않으면서도 검색엔진 신뢰 신호에 미치는 영향이 가장 크다.
