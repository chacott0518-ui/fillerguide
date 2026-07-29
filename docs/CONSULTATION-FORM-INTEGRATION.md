# 상담폼 통합 가이드

현재 상담폼은 **비활성** 상태입니다. `config/forms.ts`의 `enabled: false`를 유지합니다.
활성화 전 아래 항목을 순서대로 확인하세요.

## 01 폼 활성화 전 확인

- 개인정보 처리방침(`config/legal.ts`) 활성화
- 수집 항목 최소화 검토
- provider 선택 (google-sheets / supabase)
- `lib/config-validation.ts` 통과 확인

## 02 개인정보 처리방침

실제 수집 항목·보유 기간·처리 목적에 맞는 문서를 작성하고 `privacyPolicy.enabled=true`로 설정합니다.

## 03 최소 수집 항목

기본 권장: 이름 또는 호칭, 연락처, 선호 연락 방법, 문의 내용, 개인정보 수집 동의

## 04 수집 금지 기본 항목

주민등록번호, 건강보험 번호, 상세 진단명, 검사 결과, 처방전, 신분증, 불필요한 주소·생년월일

## 05 Google Sheets 구조

스프레드시트 컬럼: `created_at`, `name`, `phone`, `contact_method`, `message`, `source`, `consent_at`, `status`

## 06 Apps Script 구조

Web App으로 POST 수신, shared secret 검증 후 시트에 append. URL은 환경변수로만 관리.

## 07 Next.js API proxy

권장 흐름: 브라우저 → `/api/consultation` → 서버 검증 → Apps Script → Sheets

## 08 shared secret

`GOOGLE_SHEETS_SHARED_SECRET`으로 서버·Apps Script 간 검증. 클라이언트에 노출 금지.

## 09 Supabase 구조

테이블 예시: `consultations(id, created_at, name, phone, contact_method, message, source, consent_at, status)`

## 10 RLS

anon key 사용 시 INSERT만 허용, SELECT는 관리자(service role)만 가능하도록 RLS 정책 검토.

## 11 service role 보안

`SUPABASE_SERVICE_ROLE_KEY`는 서버 route에서만 사용. `NEXT_PUBLIC_` 접두사 금지.

## 12 스팸 방지

honeypot(`config/forms.ts` honeypotEnabled), rate limit, 중복 제출 방지 구조 준비.

## 13 rate limit

`lib/forms/provider.ts` 또는 API route에서 IP·세션 기반 제한 확장.

## 14 honeypot

숨김 필드에 값이 있으면 거부. `lib/forms/validation.ts` 참고.

## 15 성공 모달

제출 성공 시 `successMessage` 표시. 개인정보를 콘솔에 출력하지 않음.

## 16 실패 UX

사용자에게는 일반 오류 메시지, 서버 로그에 endpoint·secret 노출 금지.

## 17 보유 기간

수집 목적 달성 후 파기 기간을 개인정보 처리방침에 명시.

## 18 삭제 요청

문의자 삭제 요청 처리 절차를 운영 문서에 정의.

## 19 관리자 접근

Sheets/Supabase 조회 권한을 최소 인원으로 제한.

## 20 배포 후 테스트

honeypot, 필수값 검증, 성공·실패 응답, RLS, secret 미노출을 배포 환경에서 확인.

## 관련 파일

- `config/forms.ts` — 폼 설정
- `types/forms.ts` — 타입
- `lib/forms/validation.ts` — 서버 검증
- `lib/forms/provider.ts` — provider 라우터
- `lib/config-validation.ts` — production 안전 검증

UI 컴포넌트(`ConsultationForm`, `ConsultationModal`)와 `app/api/consultation/route.ts`는
실제 상담폼 활성화 요청 시 생성합니다.
