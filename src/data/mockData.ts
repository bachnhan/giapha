export interface Member {
  id: string;
  name: string;
  years: string;
  generation: number;
  role?: string;
  bio?: string;
  gender: 'M' | 'F';
  spouse?: string;
  isDivorced?: boolean;
  isDeceased?: boolean;
  deathDate?: string;
  previousSpouses?: string[];
  image?: string;
  children?: Member[];
}

export const ANONYMOUS_AVATAR = 'https://ui-avatars.com/api/?background=random&color=fff&name=User&size=128';

export const familyTree: Member = {
  id: 'g1',
  name: 'Ông Nội',
  spouse: 'Bà Nội',
  years: '---',
  generation: 1,
  role: 'Khởi Tổ',
  gender: 'M',
  isDeceased: true,
  deathDate: '15/03 Giáp Thìn',
  children: [
    {
      id: 'g2-1',
      name: 'Cô Hai (Con gái đầu)',
      spouse: 'Chồng Hiện Tại',
      previousSpouses: ['Chồng Trước (Cha các con)'],
      years: '---',
      generation: 2,
      gender: 'F',
      children: [
        {
          id: 'g3-1-1',
          name: 'Con gái đầu (Cô Hai)',
          spouse: 'Chồng',
          years: '---',
          generation: 3,
          gender: 'F',
          children: [
            { id: 'g4-1-1-1', name: 'Con gái 1', generation: 4, gender: 'F', years: '---' },
            { id: 'g4-1-1-2', name: 'Con gái 2', generation: 4, gender: 'F', years: '---' },
          ]
        },
        {
          id: 'g3-1-2',
          name: 'Con gái thứ hai (Cô Hai)',
          spouse: 'Chồng',
          years: '---',
          generation: 3,
          gender: 'F',
          children: [
            { id: 'g4-1-2-1', name: 'Con trai', generation: 4, gender: 'M', years: '---' },
            { id: 'g4-1-2-2', name: 'Con gái', generation: 4, gender: 'F', years: '---' },
          ]
        },
        {
          id: 'g3-1-3',
          name: 'Con gái thứ ba (Cô Hai)',
          spouse: 'Chồng',
          years: '---',
          generation: 3,
          gender: 'F',
          children: [
            { id: 'g4-1-3-1', name: 'Con trai', generation: 4, gender: 'M', years: '---' },
            { id: 'g4-1-3-2', name: 'Con gái', generation: 4, gender: 'F', years: '---' },
          ]
        }
      ]
    },
    {
      id: 'g2-2',
      name: 'Chú Ba (Con trai thứ 2)',
      spouse: 'Vợ Chú Ba',
      years: '---',
      generation: 2,
      gender: 'M',
      children: [
        {
          id: 'g3-2-1',
          name: 'Con trai thứ nhất (Chú Ba)',
          spouse: 'Vợ',
          years: '---',
          generation: 3,
          gender: 'M',
          children: [
            { id: 'g4-2-1-1', name: 'Con gái', generation: 4, gender: 'F', years: '---' }
          ]
        },
        { id: 'g3-2-2', name: 'Con gái thứ hai (Chú Ba)', years: '---', generation: 3, gender: 'F' },
        { id: 'g3-2-3', name: 'Con trai thứ ba (Chú Ba)', years: '---', generation: 3, gender: 'M' },
      ]
    },
    {
      id: 'g2-3',
      name: 'Chú Tư (Con trai thứ 3)',
      spouse: 'Vợ Chú Tư',
      years: '---',
      generation: 2,
      gender: 'M',
      children: [
        { id: 'g3-3-1', name: 'Con trai 1 (Chú Tư)', spouse: 'Vợ', years: '---', generation: 3, gender: 'M' },
        { id: 'g3-3-2', name: 'Con trai 2 (Chú Tư)', years: '---', generation: 3, gender: 'M' },
      ]
    },
    {
      id: 'g2-4',
      name: 'Chú Năm (Con trai thứ 4)',
      spouse: 'Vợ Chú Năm',
      years: '---',
      generation: 2,
      gender: 'M',
      children: [
        { id: 'g3-4-1', name: 'Con trai (Chú Năm)', years: '---', generation: 3, gender: 'M' },
        { id: 'g3-4-2', name: 'Con gái (Chú Năm)', years: '---', generation: 3, gender: 'F' },
      ]
    },
    {
      id: 'g2-5',
      name: 'Cô Sáu (Con gái thứ 5)',
      spouse: 'Chồng Cô Sáu',
      years: '---',
      generation: 2,
      gender: 'F',
      children: [
        {
          id: 'g3-5-1',
          name: 'Con trai thứ nhất (Cô Sáu)',
          spouse: 'Vợ',
          years: '---',
          generation: 3,
          gender: 'M',
          children: [
            { id: 'g4-5-1-1', name: 'Con gái', generation: 4, gender: 'F', years: '---' }
          ]
        },
        { id: 'g3-5-2', name: 'Con gái thứ hai (Cô Sáu)', years: '---', generation: 3, gender: 'F' },
      ]
    },
    {
      id: 'g2-6',
      name: 'Chú Bảy (Con trai thứ 6)',
      spouse: 'Vợ Chú Bảy',
      isDivorced: true,
      years: '---',
      generation: 2,
      gender: 'M',
      children: [
        { id: 'g3-6-1', name: 'Con trai 1 (Chú Bảy)', years: '---', generation: 3, gender: 'M' },
        { id: 'g3-6-2', name: 'Con trai 2 (Chú Bảy)', years: '---', generation: 3, gender: 'M' },
      ]
    },
    {
      id: 'g2-7',
      name: 'Cô Tám (Con gái thứ 7)',
      spouse: 'Chồng Cô Tám',
      years: '---',
      generation: 2,
      gender: 'F',
      children: [
        { id: 'g3-7-1', name: 'Con gái 1 (Cô Tám)', years: '---', generation: 3, gender: 'F' },
        { id: 'g3-7-2', name: 'Con gái 2 (Cô Tám)', years: '---', generation: 3, gender: 'F' },
      ]
    },
    {
      id: 'g2-8',
      name: 'Chú Chín (Con trai thứ 8)',
      spouse: 'Vợ Chú Chín',
      years: '---',
      generation: 2,
      gender: 'M',
      children: [
        { id: 'g3-8-1', name: 'Con trai 1 (Chú Chín)', years: '---', generation: 3, gender: 'M' },
        { id: 'g3-8-2', name: 'Con trai 2 (Chú Chín)', years: '---', generation: 3, gender: 'M' },
        { id: 'g3-8-3', name: 'Con trai 3 (Chú Chín)', years: '---', generation: 3, gender: 'M' },
      ]
    },
    {
      id: 'g2-9',
      name: 'Chú Mười (Con trai thứ 9)',
      spouse: 'Vợ Chú Mười',
      years: '---',
      generation: 2,
      gender: 'M',
      children: [
        { id: 'g3-9-1', name: 'Con gái 1 (Chú Mười)', years: '---', generation: 3, gender: 'F' },
        { id: 'g3-9-2', name: 'Con gái 2 (Chú Mười)', years: '---', generation: 3, gender: 'F' },
      ]
    },
  ]
};
