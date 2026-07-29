export type LegalDocumentConfig = {
  enabled: boolean;
  href?: string;
  lastUpdated?: string;
};

export type LegalConfig = {
  privacyPolicy: LegalDocumentConfig;
  terms: LegalDocumentConfig;
  nonCoveredFees: LegalDocumentConfig;
  operatorDisclosure: LegalDocumentConfig;
  cookieNotice: LegalDocumentConfig;
};
