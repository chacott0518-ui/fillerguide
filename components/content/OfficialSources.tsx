import type { OfficialSource } from "@/types/info-guide";

type OfficialSourcesProps = {
  sources: OfficialSource[];
};

/**
 * 문서 최하단 공식 출처.
 * 출처명·URL은 서버 HTML에 포함되며 JS로 지연 로드하지 않는다.
 */
export function OfficialSources({ sources }: OfficialSourcesProps) {
  if (!sources.length) {
    throw new Error(
      "[OfficialSources] sources가 비어 있습니다. InfoGuide에는 공식 출처가 필수입니다.",
    );
  }

  return (
    <details className="cg-official-sources">
      <summary className="cg-official-sources__summary">
        공식 출처 및 참고자료
      </summary>
      <ol className="cg-official-sources__list">
        {sources.map((source) => (
          <li key={source.id} className="cg-official-sources__item">
            <p className="cg-official-sources__publisher">{source.publisher}</p>
            <a
              className="cg-official-sources__link"
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.title}
            </a>
            {source.note ? (
              <p className="cg-official-sources__note">{source.note}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </details>
  );
}
