export function ClinicMap() {
  return (
    <section
      id="clinic-map"
      className="cg-clinic-map"
      aria-labelledby="clinic-map-title"
    >
      <div
        className="cg-clinic-map__frame cg-clinic-map__frame--placeholder"
        aria-hidden="true"
      >
        <div className="cg-clinic-map__placeholder">
          <span className="cg-clinic-map__road cg-clinic-map__road--h" />
          <span className="cg-clinic-map__road cg-clinic-map__road--h2" />
          <span className="cg-clinic-map__road cg-clinic-map__road--v" />
          <span className="cg-clinic-map__road cg-clinic-map__road--v2" />
          <span className="cg-clinic-map__block cg-clinic-map__block--a" />
          <span className="cg-clinic-map__block cg-clinic-map__block--b" />
          <span className="cg-clinic-map__block cg-clinic-map__block--c" />
          <span className="cg-clinic-map__pin" />
          <div className="cg-clinic-map__insert-label">
            <span className="cg-clinic-map__insert-title">지도 준비 중</span>
            <span className="cg-clinic-map__insert-desc">
              {/* TODO: 실제 제휴 병원 확정 후 지도·주소·Schema 반영 */}
              실제 제휴 병원이 확정되면 위치가 표시됩니다.
            </span>
          </div>
        </div>
      </div>

      <p className="cg-clinic-map__loc-title" id="clinic-map-title">
        의료기관 위치 정보 (미등록)
      </p>
    </section>
  );
}
