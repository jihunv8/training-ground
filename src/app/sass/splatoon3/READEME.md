# Splatoon3

[Splatoon3](https://www.nintendo.co.kr/switch/av5ja/index.html) 홈페이지를 클론한 프로젝트 입니다.

링크: https://training-ground-one.vercel.app/sass/splatoon3

- Intersection Observer API 사용
  - 요소가 화면에 표시될 때 애니메이션 트리거
  - 스크롤 다운하면 화면이 전환되는 기능 구현
- 이미지 캐러셀 제작

## 기간

2024.04.01 ~ 2024.04.17 (실제 13일 작업)

## 사용기술

SCSS, Next.js, Typescript

## 구현

### useVisible

useVisible은 요소가 뷰포트 영역 안으로 들어왔는지 여부를 확인하는 커스텀 훅 입니다.

사용할 슬롯의 수를 인수로 호출합니다.
그리고 두번째 인수로 옵션객체를 전달할 수도 있습니다.

```tsx
const slots = useVisible(2);
// or
const slots = useVisible(2, { threshold: 0.4 });
```

useVisible은 VisibleSlot객체를 포함하는 배열을 반환합니다.
VisibleSlot객체는 다음과 같습니다.

```ts
type VisibleSlot<T> {
  id: number,
  isVisible: boolean,
  ref: RefCallback<T>
}
```

VisibleSlot을 요소에 연결하여 요소가 뷰포트 안으로 들어왔는지 여부를 확인할 수 있습니다.
`VisibleSlot.id`를 요소의 `data-visible-id`, `VisibleSlot.ref`를 요소의 `ref`속성에 할당하여 연결합니다.
이제 연결된 요소가 뷰포트 안으로 들어온다면 `VisibleSlot.isVisible`이 `true`가 됩니다.

```tsx
const [slot] = useVisible(1);
<div ref={slot.ref} data-visible-id={slot.id} className={slot.isVisible && 'visible'}></div>;
```

useVisible은 내부적으로 Intersection Observer API를 사용합니다. 자세한 내용은 [visible 유틸의 READEME.md]()에서 볼 수 있습니다.

### EnterAnimation

요소가 화면에 표시될 때 발생하는 애니메이션을 모아둔 SCSS모듈입니다. [모듈 위치]()

애니메이션의 구조는 다음과 같습니다.

```scss
//_enterAnimations.scss
@mixin upScale($selector) {
  //애니메이션 발생 전
  transition: transform 250ms cubic-bezier(0.34, 1.3, 0.64, 1);
  transform: scale(1, 1);

  &#{$selector} {
    //애니메이션 발생 후
    transform: scale(1.05);
    @content;
  }
}
```

요소가 애니메이션 발생 전 상태에 있다가 지정한 `$selector`와 같은 className을 포함하면 애니메이션 발생 후의 상태가 됩니다.

```scss
//Box1/index.module.scss
@use 'enterAnimations';
.box1 {
  @include enterAnimations.upScale('.visible');
}
```

```tsx
//Box1/index.tsx
import style from './index.module.scss';

const [box1Slot] = useVisible(1);
<div
  ref={box1Slot.ref}
  data-visible-id={box1Slot.id}
  className={`${style.box1} ${box1Slot.isVisible ? style.visible : ''}`}
></div>;
```

### 스크롤 화면전환 그거

트리거 요소와 뷰 요소를 정의, 뷰 요소는 고정된 상태에서 스크롤을 내리면 트리거 요소가 움직임. 트리거 요소가 뷰포트와 교차할 때 뷰 요소를 표시함.

![ 조금 투명한 뷰 뒤로 트리거 요소가 스크롤 되는 모습이 보이는 Gif ]()

### 캐러셀

--width 변수와 translateX만 ts로 조정, 나머지는 SCSS에서 관리

### class-namer

class-namer는 CSS모듈에 해당하는 className을 생성해주는 유틸리티 입니다.

CSS모듈을 사용하여 className을 지정할 때 모듈의 이름(예: style)을 중복해서 작성해야하는 번거로움을 해결하기 위해 구현하였습니다.

```tsx
//사용전
<div className={`${style.box} ${style.fruitBox} ${style.appleBox} ${isVsible ? 'visible' : ''}`}></div>

//사용후
<div className={namer('box fruitBox applBox', isVisible && 'visible')}></div>
```

createClassNamer를 통해 class-namer를 생성할 수 있습니다.
CSS모듈을 인수로 전달하여 호출합니다.

```tsx
//class-namer 생성
import style from './index.module.scss';
import { createClassNamer } from 'class-namer';
const namer = createClassNamer(style);
```

생성된 class-namer에 문자열을 인수로 전달하여 호출하면 className에 사용될 문자열을 반환합니다. 부울값이 인수로 전달된다면 무시됩니다.

```tsx
<div className={namer('box fruitBox applBox', isVisible && 'visible')}></div>
// or
<div className={namer('box', 'fruitBox', 'applBox', isVisible && 'visible')}></div>
// or
<div className={namer(`box fruitBox applBox ${isVisible ? 'visible' : ''}`)}></div>
```

자세한 내용은 [class-namer READEME.md]()에서 볼 수 있습니다.

## 기타

### 배운점

- 애니메이션을 미리 정의해두면 편하다. (중복제거, 작업속도 향상)
- Intersection Observer API
- clip-path
- mask-...
- 베지어 곡선(트렌지션 함수와 관련됨) (cubic-bazier)

### 궁금한점

- <img> vs background, 어떤상황에 무엇을 사용해야할지 의문
- publice vs src, 이미지를 어디에 보관해야하나? 장단점이 뭔가?
- UI가 복잡할수록 CSS가 복잡해진다. 나은 방법이 있을까?
- 이미지가 언제 로딩되고, 언제 어디에 캐시되는지

### 발생한 문제점

- 이미지 로딩속도
  - 페이지 처음 로드할 때 사진이 로드되느라 비어있을 때가 있음.
  - 호버했을 때 이미지가 로드되어 호버직후에 바로 이미지가 표시되지 않음
