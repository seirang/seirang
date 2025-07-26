import type {PortfolioData} from '../types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Seirang Park',
    title: '컴퓨터학부 학생',
    description: '웹 개발과 모바일 앱 개발에 열정을 가진 학생입니다. 새로운 기술을 배우는 것을 즐기며, 사용자 경험을 중시하는 개발을 지향합니다.',
    profileImage: '/img/profile.png'
  },
  
  timeline: [
    {
      year: "2025 ~ 현재",
      title: "경북대학교 학사 과정",
      description: "컴퓨터학부 글로벌소프트웨어융합전공",
      organization: "경북대학교"
    },
    {
      year: "2020 ~ 2024(년도는 적당히 넣은거에요)",
      title: "직장: 맡은 일",
      description: "직장에서 느낀 점",
      organization: "직장 이름"
    },
    {
      year: "2016~2019",
      title: "경주예일고등학교",
      description: "이과(자연계열)",
      organization: "경주예일고등학교"
    }
  ],
  
  skills: [
    {name: 'JavaScript', level: '중급'},
    {name: 'TypeScript', level: '중급'},
    {name: 'Python', level: '중급'},
    {name: 'Java', level: '초급'},
    {name: 'HTML5', level: '중급'},
    {name: 'CSS3', level: '중급'},
    {name: 'React', level: '중급'},
    {name: 'Node.js', level: '초급'},
    {name: 'API', level: '초급'},
    {name: 'Docusaurus', level: '초급'},
    {name: 'Git', level: '중급'},
    {name: 'Docker', level: '초급'},
    {name: 'LocalStorage', level: '중급'}
  ],
  
  projects: [
    {
      title: "포트폴리오 웹사이트(이 사이트!)",
      description: "React와 TypeScript를 사용하여 만든 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 모던한 UI를 적용했습니다.",
      technologies: ["React", "TypeScript", "CSS3", "Docusaurus"],
      github: "https://github.com/seirang/portfolio",
      demo: "https://serang-portfolio-demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "할일 관리 앱(그냥 목업)",
      description: "사용자가 할일을 추가, 수정, 삭제할 수 있는 웹 애플리케이션입니다. 로컬 스토리지를 활용하여 데이터를 저장합니다.",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      github: "https://github.com/seirang/todo-app",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "날씨 정보 앱(그냥 목업)",
      description: "OpenWeatherMap API를 활용하여 실시간 날씨 정보를 제공하는 웹 애플리케이션입니다.",
      technologies: ["React", "API", "JavaScript", "CSS3"],
      github: "https://github.com/seirang/weather-app",
      demo: "https://serang-weather-app-demo.com",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop&crop=center"
    }
  ],
  
  contact: {
    email: 'seirang@knu.ac.kr',
    github: 'https://github.com/seirang',
    linkedin: 'https://linkedin.com/in/serang-park'
  },
  
  interests: [
    {
      title: 'Frontend Development',
      description: '사용자 경험(UX)을 중시하는 반응형 웹 애플리케이션 개발에 전문성을 가지고 있습니다.',
      icon: '🎨'
    },
    {
      title: 'Backend Development',
      description: 'Node.js와 Python을 활용한 서버 사이드 개발 및 API 설계에 관심을 가지고 있습니다.',
      icon: '⚙️'
    },
    {
      title: 'Continuous Learning',
      description: '최신 웹 기술과 개발 트렌드를 지속적으로 학습하며 전문성을 향상시키고 있습니다.',
      icon: '📚'
    }
  ]
}; 