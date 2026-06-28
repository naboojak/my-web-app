// ============================================================
// 로컬 개발용 Supabase 설정
// ============================================================
// 1. 이 파일을 config.js 로 복사하세요:
//    cp config.example.js config.js
//
// 2. config.js 에 실제 Supabase 값을 입력하세요.
//    (config.js 는 .gitignore 에 등록되어 있어 절대 커밋되지 않습니다)
//
// 3. Vercel 배포 시에는 Dashboard → Settings → Environment Variables 에서
//    SUPABASE_URL, SUPABASE_KEY 를 설정하면 build.js 가 자동으로 생성합니다.
// ============================================================

window.SUPABASE_URL = 'YOUR_SUPABASE_URL';      // https://xxxx.supabase.co
window.SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY'; // eyJh...
