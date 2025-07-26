// 기술 스택별 카테고리 매핑
const skillCategories: Record<string, string> = {
  // 언어
  'JavaScript': 'languages',
  'TypeScript': 'languages',
  'Python': 'languages',
  'Java': 'languages',
  'HTML5': 'languages',
  'CSS3': 'languages',
  
  // 프레임워크
  'React': 'frameworks',
  'Node.js': 'frameworks',
  'API': 'frameworks',
  'Docusaurus': 'frameworks',
  
  // 도구
  'Git': 'tools',
  'Docker': 'tools',
  'LocalStorage': 'tools'
};

/**
 * 기술 스택 이름을 받아서 해당 문서 링크를 반환합니다.
 * @param skillName 기술 스택 이름
 * @returns 문서 링크 경로
 */
export function getSkillLink(skillName: string): string {
  const category = skillCategories[skillName];
  if (!category) {
    return '#';
  }
  
  // 기술 이름을 소문자로 변환하고 공백을 하이픈으로 변경
  const skillSlug = skillName.toLowerCase().replace(/\s+/g, '-');
  
  return `/stack/${category}/${skillSlug}`;
} 