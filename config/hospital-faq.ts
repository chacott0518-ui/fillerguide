/**
 * 병원 위치·진료 FAQ.
 * enabled가 false이면 DOM·JSON-LD에 병원 위치 FAQ를 출력하지 않는다.
 * 실제 광고주 확정 후 값만 채워 enabled: true로 전환한다.
 */
export type HospitalFaqConfig = {
  enabled: boolean;
  hospitalName: string;
  address: string;
  nearestStation: string;
  directions: string;
  parking: string;
  phone: string;
  consultationHours: string;
  reservationPolicy: string;
};

export const hospitalFaq: HospitalFaqConfig = {
  enabled: false,
  hospitalName: "",
  address: "",
  nearestStation: "",
  directions: "",
  parking: "",
  phone: "",
  consultationHours: "",
  reservationPolicy: "",
};
