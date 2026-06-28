// Vercel 빌드 스크립트
// Vercel 환경변수(SUPABASE_URL, SUPABASE_KEY)를 읽어 config.js 를 생성합니다.
// vercel.json 의 buildCommand 에서 실행됩니다.

const fs = require('fs');

const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_KEY || '';

if (!url || !key) {
  console.warn('[build] SUPABASE_URL / SUPABASE_KEY 환경변수가 없습니다. 로컬스토리지 모드로 배포됩니다.');
}

const content = `// 자동 생성된 파일 — 커밋하지 마세요 (gitignore 처리됨)
window.SUPABASE_URL = '${url}';
window.SUPABASE_KEY = '${key}';
`;

fs.writeFileSync('config.js', content);
console.log('[build] config.js 생성 완료');
