import { Category, Ranking, Recipe } from "./types";

export const rankings: Ranking[] = [
    {
      name: '도비캔버쓰',
      amountSaved: '9,958,600원',
    },
    {
      name: '상훈쓰',
      amountSaved: '912,400원',
    },
    {
      name: '미나미나',
      amountSaved: '858,600원',
    },
    {
      name: '지연지연',
      amountSaved: '854,600원',
    },
    {
      name: '우제쓰',
      amountSaved: '832,400원',
    },
    {
      name: '현범쓰',
      amountSaved: '758,600원',
    },
    {
      name: '석준쓰',
      amountSaved: '658,600원',
    },
    {
      name: '경민쓰',
      amountSaved: '558,600원',
    },
  ];


export const categories: Category[] = [
    {
      name: '한식',
      theme: '한식',
      img: '/1한식.png',
    },
    {
      name: '중식',
      theme: '중식',
      img: '/2중식.png',
    },
    {
      name: '일식',
      theme: '일식',
      img: '/3일식.png',
    },
    {
      name: '아시안',
      theme: '퓨전',
      img: '/4아시안.png',
    },
    {
      name: '양식',
      theme: '양식',
      img: '/5양식.png',
    },
    {
      name: '돈까쓰',
      theme: '일식',
      img: '/6돈까쓰.png',
    },
    {
      name: '분식',
      theme: '한식',
      img: '/7분식.png',
    },
    {
      name: '디저트',
      theme: '간식',
      img: '/8디저트.png',
    },
  ];


export const recipes: Recipe[] = [
  {
    id: 13,
    name: '통감자 오븐구이',
    style: '{{여기에 텍스트 입력}}',
    level: '텍스트 난이도',
    time: '텍스트 시간40분',
    source: '우리의식탁',
    outcost: 10000,
    selfcost: 4000,
    servings: 2,
    description: '나혼다산다에 나온 간편 안주 대호평!',
    img: '/sample.png',
    steps: [
      '감자는 껍질 째 깨끗이 씻은 후 오븐팬에 올려 올리브오일과 소금, 후춧가루를 뿌려 200도에서 50분 정도 구워주세요.\r\n(tip. 전자레인지 용기에 담아 랩을 씌운 후 레인지로 익히면 간단하답니다)',
      '베이컨은 1cm 길이로 자른 후 달군 팬에 노릇하게 구워주세요. 실파는 송송 썰어주세요.',
      '익힌 감자의 가운데 칼집을 낸 후 가운데를 벌려 주세요. 감자 가운데에 소금, 후춧가루를 뿌린 후 버터를 1작은술씩 넣어주세요.',
      '체다치즈를 뿌린 후 사워크림을 올려주세요. 베이컨과 실파, 소금, 후춧가루를 뿌려 완성해 주세요.',
    ],
    tags: [
      '간식',
      '메인요리',
    ],
    ingredients: [ //2~3인분	
      {
        name: '킹감자',
        amount: '4개',
      },
      {
        name: '베이컨',
        amount: '4장',
      },
      {
        name: '실파',
        amount: '1개',
      },
      {
        name: '체다치즈',
        amount: '1 / 2컵',
      },
      {
        name: '버터',
        amount: '2큰술',
      },
      {
        name: '사워크림',
        amount: '2큰술',
      },
      {
        name: '소금',
        amount: '약간',
      },
      {
        name: '후춧가루',
        amount: '약간',
      },
      {
        name: '올리브오일',
        amount: '적당량',
      },
    ],
    grams: [],
    url: 'xx',
  },
  {
    id: 348,
    name: '{{여기에 텍스트 경민 테스트 입력}}',
    style: '{{여기에 텍스트 입력}}',
    level: '텍스트 난이도',
    time: '텍스트 시간40분',
    source: '우리의식탁',
    outcost: 10000,
    selfcost: 4000,
    servings: 2,
    description: '파이브가이즈보다 더 맛있는 함박 스테이크 레시피! 기념일에 강추합니다',
    img: '/1한식.png',
    steps: [],
    tags: [],
    ingredients: [],
    grams: [],
    url: 'xx',
  },
  {
    id: 126,
    name: '{{여기에 텍스트 입력}}',
    style: '{{여기에 텍스트 입력}}',
    level: '중',
    time: '15분',
    source: '우리의식탁',
    outcost: 10000,
    selfcost: 4000,
    servings: 3,
    description: '짜장이 땡길때? 눈치안보고 쟁반크기로 혼자먹고 싶을때?',
    img: '/2중식.png',
    steps: [],
    tags: [],
    grams: [],
    ingredients: [],
    url: 'xx',
  },
  {
    id: 295,
    name: '{{여기에 텍스트 입력}}',
    style: '{{여기에 텍스트 입력}}',
    level: '중',
    time: '15분',
    source: '우리의식탁',
    outcost: 10000,
    selfcost: 4000,
    servings: 2,
    description: '점심엔 짜장, 저녁엔 짬뽕? 한번에 같이 먹어도 좋아요!',
    img: '/2중식.png',
    steps: [],
    tags: [],
    grams: [],
    ingredients: [],
    url: 'xx',
  },
  {
    id: 280,
    name: '{{여기에 텍스트 입력}}',
    style: '{{여기에 텍스트 입력}}',
    level: '중',
    time: '15분',
    source: '우리의식탁',
    outcost: 10000,
    selfcost: 4000,
    servings: 2,
    description: '줄서는식당에 나온 전복 맛집 레시피 그대로!',
    img: '/2중식.png',
    steps: [],
    grams: [],
    tags: [],
    ingredients: [],
    url: 'xx',
  },
  {
    id: 26,
    name: '{{여기에 텍스트 입력}}',
    style: '{{여기에 텍스트 입력}}',
    level: '중',
    time: '15분',
    source: '우리의식탁',
    outcost: 10000,
    selfcost: 4000,
    servings: 2,
    description: '먹을텐데 성시경이 소주 안팔아 울었던 감자탕 맛집 그 맛',
    img: '/2중식.png',
    steps: [],
    tags: [],
    grams: [],
    ingredients: [],
    url: 'xx',
  },
];

export function getRecipes(): Recipe[] {
  return recipes;
}

export function getCategories(): Category[] {
  return categories;
}