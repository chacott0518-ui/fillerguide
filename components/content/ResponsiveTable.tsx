import type { CompareRow, ResponsiveTableData } from "@/types/content";

type ResponsiveTableProps = {
  data: ResponsiveTableData;
};

/**
 * 단일 table DOM.
 * 모바일 카드형은 CSS(data-label)로 표현하며 PC/모바일 이중 렌더를 하지 않는다.
 */
export function ResponsiveTable({ data }: ResponsiveTableProps) {
  const mode = data.mobileMode ?? "scroll";

  return (
    <div
      className={`cg-table-wrap cg-table-wrap--${mode}`}
      role="region"
      aria-label={data.caption || "비교표"}
      tabIndex={0}
    >
      {data.caption ? (
        <p className="cg-table-wrap__hint">{data.caption}</p>
      ) : null}
      {mode === "scroll" ? (
        <p className="cg-table-wrap__scroll-hint">
          좌우로 밀어 전체 표 보기
        </p>
      ) : null}

      <div className="cg-table-scroll cg-table-scroll--hint">
        <table className="cg-visual__table">
          {data.caption ? (
            <caption className="sr-only">{data.caption}</caption>
          ) : null}
          <thead>
            <tr>
              {data.columns.map((col) => (
                <th key={col.key} scope="col">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, index) => (
              <tr key={index}>
                {data.columns.map((col, colIndex) =>
                  colIndex === 0 ? (
                    <th key={col.key} scope="row" data-label={col.label}>
                      {row[col.key]}
                    </th>
                  ) : (
                    <td key={col.key} data-label={col.label}>
                      {row[col.key]}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type CompareTableProps = {
  rows: CompareRow[];
  leftHeader?: string;
  rightHeader?: string;
  caption?: string;
};

export function CompareTable({
  rows,
  leftHeader = "확인 항목",
  rightHeader = "확인 포인트",
  caption,
}: CompareTableProps) {
  return (
    <ResponsiveTable
      data={{
        caption,
        mobileMode: "cards",
        columns: [
          { key: "criterion", label: "비교 기준" },
          { key: "left", label: leftHeader },
          { key: "right", label: rightHeader },
        ],
        rows: rows.map((row) => ({
          criterion: row.criterion,
          left: row.left,
          right: row.right,
        })),
      }}
    />
  );
}
