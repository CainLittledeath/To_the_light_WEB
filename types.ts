export interface Character {
  id: number;
  name: string;
  role: string;
  image: string;     // 전신 또는 모달용 큰 이미지
  headshot: string;  // 클릭 전 카드에 보여줄 두상 이미지
  description: string;
  quote: string;
  specialty: {
    label: string;
    value?: string; // e.g., "S+", "99", "Divine"
  };
}

export enum SectionId {
  WORLD = 'world',
  CHARACTERS = 'characters',
  MAP = 'map',
}