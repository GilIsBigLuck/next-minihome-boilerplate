import enMessages from '@/messages/en.json';
import koMessages from '@/messages/ko.json';

export type Language = 'en' | 'ko';

const messages = {
  en: enMessages,
  ko: koMessages,
};

// 클라이언트에서 사용할 간단한 번역 함수
export function getTranslations(lang: Language = 'en') {
  const t = (key: string, params?: Record<string, string>) => {
    const keys = key.split('.');
    let value: any = messages[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value !== 'string') {
      return key;
    }
    
    // 파라미터 치환 (예: {year} -> 2026)
    if (params) {
      return value.replace(/\{(\w+)\}/g, (_, paramKey) => {
        return params[paramKey] || `{${paramKey}}`;
      });
    }
    
    return value;
  };
  
  return t;
}

// 서버 컴포넌트에서 사용할 간단한 번역 함수
export function getServerTranslations(lang: Language = 'en') {
  return getTranslations(lang);
}
