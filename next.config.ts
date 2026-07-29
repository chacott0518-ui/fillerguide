import type { NextConfig } from "next";

/**
 * 정적 redirects는 한글 경로 이슈를 피하기 위해 proxy.ts에서 처리한다.
 * 내부 링크는 항상 final URL(/비용 등)만 사용한다.
 */
const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
