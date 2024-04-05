import { StaticImageData } from 'next/image';

import thumbnail1Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-1.png';
import thumbnail2Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-2.png';
import thumbnail3Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-3.jpeg';
import thumbnail4Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-4.jpeg';
import thumbnail5Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-5.jpeg';
import thumbnail6Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-6.jpeg';
import thumbnail7Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-7.jpeg';
import thumbnail8Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-8.jpeg';
import thumbnail9Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-9.jpeg';
import thumbnail10Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-10.png';
import thumbnail11Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-11.png';

type Movie = {
  id: number;
  thumbnail: string | StaticImageData;
  href: string;
  title: string;
};

export const getMovies = (): Movie[] => [
  { id: 0, thumbnail: thumbnail1Image, href: 'temp', title: '2023 여름 Sizzle Season' },
  { id: 1, thumbnail: thumbnail2Image, href: 'temp', title: '2022 겨울 Chill Season' },
  { id: 2, thumbnail: thumbnail3Image, href: 'temp', title: '소개 영상' },
  { id: 3, thumbnail: thumbnail4Image, href: 'temp', title: '처음 시작하는 스플래툰' },
  { id: 4, thumbnail: thumbnail5Image, href: 'temp', title: '『스플래툰 3』 영역 배틀 플레이 영상' },
  { id: 5, thumbnail: thumbnail6Image, href: 'temp', title: '『스플래툰 3』 스플래툰은 어떤 게임일까?' },
  { id: 6, thumbnail: thumbnail7Image, href: 'temp', title: 'CM2' },
  { id: 7, thumbnail: thumbnail8Image, href: 'temp', title: 'CM' },
  { id: 8, thumbnail: thumbnail9Image, href: 'temp', title: 'Nintendo Direct 2022.8.10' },
  { id: 9, thumbnail: thumbnail10Image, href: 'temp', title: '「새먼 런 NEXT WAVE」 트레일러' },
  { id: 10, thumbnail: thumbnail11Image, href: 'temp', title: 'Nintendo Direct 2021.9.24' },
];
