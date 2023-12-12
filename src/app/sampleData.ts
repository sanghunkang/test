import { Category, Ranking, Recipe } from "./types";

export const rankings: Ranking[] = [
    {
      name: '엘라의 테이블',
      amountSaved: '258,600원',
    },
    {
      name: '짱아쫑아맘',
      amountSaved: '212,400원',
    },
    {
      name: '엘라의 밥상',
      amountSaved: '3,258,600원',
    },
  ];


export const categories: Category[] = [
    {
      name: '한식',
      img: '/1한식.png',
    },
    {
      name: '중식',
      img: '/2중식.png',
    },
    {
      name: '일식',
      img: '/3일식.png',
    },
    {
      name: '아시안',
      img: '/4아시안.png',
    },
    {
      name: '양식',
      img: '/5양식.png',
    },
    {
      name: '돈까쓰',
      img: '/6돈까쓰.png',
    },
    {
      name: '분식',
      img: '/7분식.png',
    },
    {
      name: '디저트',
      img: '/8디저트.png',
    },
  ];


export const recipes: Recipe[] = [
  {
    id: 1,
    name: '통감자 오븐구이',
    style: '{{여기에 텍스트 입력}}',
    level: '텍스트 난이도',
    time: '텍스트 시간40분',
    source: '우리의식탁',
    outcost: 10000,
    selfcost: 4000,
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
  },
  {
    id: 2,
    name: '{{여기에 텍스트 경민 테스트 입력}}',
    style: '{{여기에 텍스트 입력}}',
    level: '텍스트 난이도',
    time: '텍스트 시간40분',
    source: '우리의식탁',
    outcost: 10000,
    selfcost: 4000,
    description: '파이브가이즈 더현대 서울 오픈! 웨이팅 대신 집에서 땅콩기름 감자튀김과 햄버거를!',
    img: '/1한식.png',
    steps: [],
    tags: [],
    ingredients: [],
  },
  {
    id: 3,
    name: '{{여기에 텍스트 입력}}',
    style: '{{여기에 텍스트 입력}}',
    level: '중',
    time: '15분',
    source: '우리의식탁',
    outcost: 10000,
    selfcost: 4000,
    description: '짜장이 땡길때?',
    img: '/2중식.png',
    steps: [],
    tags: [],
    ingredients: [],
  },
];

export function getRecipes(): Recipe[] {
  return recipes;
}

export function getCategories(): Category[] {
  return categories;
}