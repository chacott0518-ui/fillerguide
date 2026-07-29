/**
 * IndexNow 수동 제출 스크립트.
 * 배포 후에만 실행하세요. 빌드/배포 시 자동 실행되지 않습니다.
 *
 * Usage: npm run indexnow
 */

const HOST = "fillerguide.co.kr";
const KEY = "c5f0580996c9637f09ea0b930973a3d3";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/골반필러-가격-비용`,
  `https://${HOST}/골반필러-유지-회복기간`,
  `https://${HOST}/골반필러-주의사항`,
  `https://${HOST}/골반필러-병원선택`,
  `https://${HOST}/골반필러-후기`,
  `https://${HOST}/골반필러-자주묻는질문`,
];

function assertKeyConsistency() {
  if (!KEY || KEY.length < 32) {
    throw new Error("IndexNow key must be at least 32 characters.");
  }
  if (!KEY_LOCATION.endsWith(`/${KEY}.txt`)) {
    throw new Error("keyLocation must end with /{key}.txt matching the key.");
  }
  if (!KEY_LOCATION.startsWith(`https://${HOST}/`)) {
    throw new Error("keyLocation host must match the submission host.");
  }
}

async function main() {
  assertKeyConsistency();

  const urlList = Array.from(new Set(URL_LIST));

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`IndexNow submitting ${urlList.length} URLs to ${ENDPOINT}`);
  console.log(`keyLocation: ${KEY_LOCATION}`);

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    const text = await response.text().catch(() => "");
    console.log(`HTTP ${response.status} ${response.statusText}`);
    if (text) {
      console.log(text);
    }

    if (!response.ok) {
      process.exitCode = 1;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`IndexNow request failed: ${message}`);
    process.exitCode = 1;
  }
}

main();
