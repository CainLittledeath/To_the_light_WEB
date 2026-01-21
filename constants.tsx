import { Character } from './types';
import { Shield, BookOpen, Sword, Flame, Crosshair, Sparkles } from 'lucide-react';
import React from 'react';

export const INTRO_TEXT = {
  title: "극비 의뢰서 : 노던라이트",
  body: `
    수신: 노던라이트 탐사대 지원자 귀하

    겨울 대륙 의회는 귀하의 남다른 이력과 생존 기술을 높이 사,
    막대한 보수가 걸린 이번 탐사에 귀하를 정식 대원으로 초빙하고자 합니다.
    
    어떤 연유로 이 위험한 의뢰에 응했는지는 묻지 않겠습니다.
    
    우리의 목적지는 북위 74도, 폐쇄 구역 '노던라이트'입니다.
    그곳에 심연 감염과 관련된 결정적인 단서가 있다는 정보가 입수되었습니다.
    
    이 계약에 서명하는 즉시, 모든 법적 보호는 소멸하며
    오직 의뢰의 완수만이 귀하의 생환을 보장할 것입니다.
  `,
  signer: "겨울 대륙 의회 의장"
};

// ==================================================================================
// [캐릭터 이미지 수정]
// 1. image: 클릭 후 모달에 뜰 전신/큰 이미지
// 2. headshot: 클릭 전 카드에 뜰 두상 이미지 (새로 추가됨)
// ==================================================================================
export const CHARACTERS: Character[] = [
  {
    id: 1,
    name: "아스트리드",
    role: "현지가이드",
    // ▼ [이미지 주소 입력] 아스트리드 전신 이미지
    image: "https://od.lk/s/OF8xOTk4OTI4Njdf/AS.png", 
    // ▼ [이미지 주소 입력] 아스트리드 두상 이미지 (클릭 전)
    headshot: "https://od.lk/s/OF8xOTk5MTI2NDlf/AS_head.png", // 이곳을 두상 이미지로 교체하세요
    description: "바이킹 중에서도 발키리라 불리우는, 다부진 체격의 전사.\n직설적이고 호쾌하지만 노련한 가이드이기도 하다.",
    quote: "맡겨둬!\n이 곳 지리는 내 손바닥 안이라고.", 
    specialty: { label: "브루저" }
  },
  {
    id: 2,
    name: "소냐",
    role: "성녀",
    // ▼ [이미지 주소 입력] 소냐 전신 이미지
    image: "https://od.lk/s/OF8yMDA1MDI2NDhf/SS.png.png",
    // ▼ [이미지 주소 입력] 소냐 두상 이미지 (클릭 전)
    headshot: "https://od.lk/s/OF8yMDA1MDI2NTBf/SS_head.png", // 이곳을 두상 이미지로 교체하세요
    description: "구호단 출신의 성직자.\n곤봉과 독특한 등불 형태의 성물을 함께 사용하며, 예리하게 심연을 탐지하는 능력을 가졌다.",
    quote: "모두에게 신의 가호가 있기를.",
    specialty: { label: "힐러, 탱커" }
  },
  {
    id: 3,
    name: "녹턴",
    role: "마탄수",
    // ▼ [이미지 주소 입력] 녹턴 전신 이미지
    image: "https://od.lk/s/OF8xOTk4OTI4Njhf/NS.png",
    // ▼ [이미지 주소 입력] 녹턴 두상 이미지 (클릭 전)
    headshot: "https://od.lk/s/OF8xOTk5MTI2NDdf/NS_head.png", // 이곳을 두상 이미지로 교체하세요
    description: "몰락한 뱀파이어 귀족 출신. 인간의 피를 거부하고 동물의 피만 마신다.\n유머러스하고 낙천적이지만 전투 시에는 무서운 집중력을 발휘한다.",
    quote: "걱정 마,\n내 총알은 백발백중이니까.",
    specialty: { label: "원거리 딜러" }
  },
  {
    id: 4,
    name: "준",
    role: "학자",
    // ▼ [이미지 주소 입력] 준 전신 이미지
    image: "https://od.lk/s/OF8xOTk4OTI4NzBf/JS.png",
    // ▼ [이미지 주소 입력] 준 두상 이미지 (클릭 전)
    headshot: "https://od.lk/s/OF8xOTk5MTI2NDZf/JS_head.png", // 이곳을 두상 이미지로 교체하세요
    description: "타향을 떠돌다 잠시 겨울 대륙에 돌아온 학자.\n과묵하고 신중한 편으로, 얼음 마법으로 아군을 서포트하고 감염 생물 관련 정보를 제공한다.",
    quote: "...소임을 다하겠습니다.",
    specialty: { label: "서포터" }
  }
];

export const ICONS = {
  Warrior: <Sword className="w-6 h-6" />,
  Priest: <Shield className="w-6 h-6" />,
  Marksman: <Crosshair className="w-6 h-6" />,
  Alchemist: <Sparkles className="w-6 h-6" />,
};

// ==================================================================================
// [지도 포인트 이미지 수정]
// 각 지역에 마우스를 올렸을 때 나오는 팝업의 이미지를 수정하세요.
// ==================================================================================
export const MAP_POINTS = [
  { 
    id: 'checkpoint', 
    name: '검문소', 
    icon: 'checkpoint', 
    desc: '성벽 외부로 향하는 마지막 관문.\n이곳을 지나면 법의 보호를 받을 수 없다.', 
    x: 15, y: 89, // Kept same
    // ▼ [이미지 주소 입력] 검문소
    image: 'https://od.lk/s/OF8xOTk5MTQwMTlf/map_checkpoint.webp' 
  },
  { 
    id: 'forest', 
    name: '숲길', 
    icon: 'forest', 
    desc: '감염체가 발견되지 않은 숲.\n바람 소리조차 들리지 않는 고요함이 흐른다.', 
    x: 29, y: 75, // Kept same
    // ▼ [이미지 주소 입력] 숲길
    image: 'https://od.lk/s/OF8xOTk5MTM3MDZf/map_forest.webp'
  },
  { 
    id: 'lake', 
    name: '수정 호수', 
    icon: 'lake', 
    desc: '얼어붙은 호수 표면 아래로 기이한 빛깔이 일렁인다.\n접근 주의.', 
    x: 43, y: 60, // Kept same
    // ▼ [이미지 주소 입력] 수정 호수
    image: 'https://od.lk/s/OF8xOTk5MTM3MTBf/map_lake.webp'
  },
  { 
    id: 'plateau', 
    name: '설경 고원', 
    icon: 'plateau', 
    desc: '끝없이 펼쳐진 눈의 평원.\n화이트아웃 현상이 빈번하게 발생하기에, 가이드가 필수적이다.', 
    x: 58, y: 50, // Kept same
    // ▼ [이미지 주소 입력] 설경 고원
    image: 'https://od.lk/s/OF8xOTk5MTM3MDhf/map_highland.webp'
  },
  { 
    id: 'mountain', 
    name: '산악지대', 
    icon: 'mountain', 
    desc: '가파른 절벽과 칼날 같은 바람.\n비행 심연 감염 생물들이 자주 목격되는 위험 지역.', 
    x: 75, y: 32, // Kept same
    // ▼ [이미지 주소 입력] 산악지대
    image: 'https://od.lk/s/OF8xOTk5MTM3MTFf/map_mountain.webp'
  },
  { 
    id: 'northern', 
    name: '노던라이트', 
    icon: 'northern', 
    desc: '오로라가 보이는 곳.\n그리고...', 
    x: 83, y: 12, // Moved Right (74 -> 83)
    // ▼ [이미지 주소 입력] 노던라이트
    image: 'https://od.lk/s/OF8xOTk5MTM3MTRf/map_northern.webp'
  },
];