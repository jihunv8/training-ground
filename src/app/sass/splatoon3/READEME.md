# Splatoon3

닌텐도의 [Splatoon3](https://www.nintendo.co.kr/switch/av5ja/index.html) 페이지를 클론한 프로젝트 입니다.

링크: https://training-ground-one.vercel.app/sass/splatoon3

- Intersection Observer API 사용
  - 커스텀 훅을 구현하여 중복코드 감소
  - 요소가 화면에 표시될 때 애니메이션 트리거
- 스크롤하여 화면이 전환되는 기능 구현
- 이미지 캐러셀 제작

<br/>

## 기간

2024.04.01 ~ 2024.04.17 (실제 13일 작업)

<br/>

## 사용기술

SCSS, Next.js, Typescript

<br/>

## 구현

### useVisible

[`useVisible`](useVisible코드파일경로)은 요소가 뷰포트 영역 안으로 들어왔는지 여부를 확인하는 커스텀 훅 입니다.

사용할 슬롯의 수를 인수로 전달합니다.
그리고 두번째 인수로 옵션객체를 전달할 수도 있습니다.

```tsx
const slots = useVisible(2);
// or
const slots = useVisible(2, { threshold: 0.4 });
```

`useVisible`은 `VisibleSlot`객체를 포함하는 배열을 반환합니다.
`VisibleSlot`객체는 다음과 같습니다.

```ts
type VisibleSlot<T> {
  id: number,
  isVisible: boolean,
  ref: RefCallback<T>
}
```

`VisibleSlot`을 요소에 연결하여 요소가 뷰포트 안으로 들어왔는지 여부를 확인할 수 있습니다.
`VisibleSlot.id`를 요소의 `data-visible-id`, `VisibleSlot.ref`를 요소의 `ref`속성에 할당하여 연결합니다.
이제 연결된 요소가 뷰포트 안으로 들어온다면 `VisibleSlot.isVisible`이 `true`가 됩니다.

```tsx
const [slot] = useVisible(1);
<div ref={slot.ref} data-visible-id={slot.id} className={slot.isVisible && 'visible'}></div>;
```

`useVisible`은 내부적으로 Intersection Observer API를 사용합니다.

<details>
  <summary>스크롤 위치가 아니고 뷰포트를 기준으로 구현한 이유</summary>
  해당 프로젝트에선 요소의 width와 height값과 font-size등을 대부분 vw값으로 지정했습니다.
  요소가 스크린(뷰포트)폭에 따라 비율이 일정하게 유지되게 하려는 이유에서 입니다.
  그렇기 때문에 height값이 스크린폭에 따라 변할 것이고 요소의 스크롤 위치가 항상 다를 것입니다.
  매번 다른 스크롤 위치를 계산하려면 코드가 복잡해질 것으로 예상되었습니다.
  그래서 스크롤위치가 아닌 요소가 화면에 보일 때를 감지하는 방법을 찾는 도중 Intersection Observer API를 발견했고 이를 사용하여 구현하였습니다.
</details>

---

<br/>

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

요소가 애니메이션 발생 전 상태에 있다가 지정한 `$selector`와 같은 이름을 `className`을 포함하면 애니메이션 발생 후의 상태가 됩니다.

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

<details>
  <summary>애니메이션 예시</summary>

#### ink

![ink](https://github.com/jihunv8/training-ground/assets/78804014/50c277ac-3545-4913-947d-610b0d9d0e07)

```scss
@mixin ink($selector) {
  transition:
    opacity 0.3s cubic-bezier(0.15, 1.06, 0.8, 1.2),
    transform 0.3s cubic-bezier(0.15, 1.06, 0.8, 1.2);

  opacity: 0;
  transform: scale(1.15, 1.15);

  &#{$selector} {
    opacity: 1;
    transform: translate(0px, 0px);
    @content;
  }
}
```

#### upScaleFadeOutBack

![upScaleFadeOutBack](https://github.com/jihunv8/training-ground/assets/78804014/2edad197-c89f-4d79-ac47-28cf8d0aa513)

```scss
@mixin upScaleFadeOutBack($selector) {
  opacity: 0;
  transform: scale(0.5, 0.5);
  transition:
    opacity,
    transform 0.3s cubic-bezier(0.5, 1.5, 0.8, 1.1);

  &#{$selector} {
    opacity: 1;
    transform: scale(1, 1);
    @content;
  }
}
```

### upFade

![upFade](https://github.com/jihunv8/training-ground/assets/78804014/a556980e-c547-41c9-b3f1-d015c0076d63)

```scss
@mixin upFade($selector) {
  transition:
    opacity 0.2s linear,
    transform 0.2s linear;

  opacity: 0;
  transform: translate(0px, 15px);

  &#{$selector} {
    opacity: 1;
    transform: translate(0px, 0px);
    @content;
  }
}
```

#### bandLeftToRight

![band-l-to-r](https://github.com/jihunv8/training-ground/assets/78804014/ed5d3b0b-eafc-4da8-be50-cdd478f4d53f)

```scss
@mixin bandLeftToRight($selector) {
  transition: transform 0.3s ease;
  transform: translateX(-100%);

  &#{$selector} {
    transform: translateX(0px);
    @content;
  }
}
```

</details>

---

<br/>

### 스크롤시 화면전환

BattleStyle 섹션에서 스크롤에 따른 화면 전환 기능을 구현했습니다.

![스크롤시-화면전환](https://github.com/jihunv8/training-ground/assets/78804014/920bae6c-832c-423d-97df-aab883aad175)

원본 홈페이지에서 구조를 분석한뒤 아이디어를 얻었습니다.

전체적인 구조는 다음과 같습니다.

```tsx
const [wrapperSlot] = useVisible(1);
const [view1Slot, view2Slot, view3Slot] = useVisible(3, { threshold: 0.5 });

<section ref={wrapperSlot.ref} data-visible-id={wrapperSlot.id} className={namer('wrapper')}>
  <div className={namer('viewer', wrapperSlot.isVisible && 'fixed')}>
    <div className={namer('view', view1Slot.isVisible && 'visible')}></div>
    <div className={namer('view', view2Slot.isVisible && 'visible')}></div>
    <div className={namer('view', view3Slot.isVisible && 'visible')}></div>
  </div>
  <div className={namer('triggerSection')}>
    <div ref={view1Slot.ref} data-visible-id={view1Slot.id} className={namer('trigger')}></div>
    <div ref={view2Slot.ref} data-visible-id={view2Slot.id} className={namer('trigger')}></div>
    <div ref={view3Slot.ref} data-visible-id={view3Slot.id} className={namer('trigger')}></div>
  </div>
</section>;
```

`view`를 포함하는 `viewer`요소와 `trigger`요소를 포함하는 `triggerSection` 요소가 있습니다.<br/>
`viewer`는 화면에 고정되어 있고 `triggerSection`은 스크롤이 되지만 `viewer`뒤에 가려져 보이지 않습니다.

`view`는 `trigger`와 서로 연관되어 있습니다.<br/>
스크롤되어 `trigger`가 뷰포트 영역 안으로 들어오면 연관된 `view`가 화면에 표시됩니다.

아래의 영상은 `viewer`뒤로(opacity 속성 적용됨) `trigerSection`이 어떻게 움직이는지 보여줍니다.<br/>
`triger`(보라색 벼경에 하얀색 점선 태두리)가 스크롤되어 뷰포트 안으로 50%(옵션 threshold: 0.5이 적용됨)만큼 들어오면 연관된 `view`가 화면에 나타납니다.
![ezgif-4-1f4d2272b5](https://github.com/jihunv8/training-ground/assets/78804014/445cda35-9375-4913-bb62-e8590861c1e4)

---

<br/>

### 캐러셀

MovieCarousel 섹션에서 이미지 캐러셀 기능을 구현했습니다.

![이미지 캐러셀 gif]()

```scss
.carousel {
  --currentIndex: 0;
  --itemWidth: calc(100vw / 4);

  @include screen.mobile {
    --itemWidth: calc(100vw / 1.3);
  }

  > ul {
    --halfOfScreen: calc(100vw / 2);
    --halfOfItem: calc(var(--itemWidth) / 2);
    --startX: calc(var(--halfOfScreen) - var(--halfOfItem));
    --offsetX: calc(var(--itemWidth) * var(--currentIndex));
    --positionX: calc(var(--startX) - var(--offsetX));

    transform: translate3d(var(--positionX), 0px, 0px);
    transition: transform 0.3s;

    > li.item {
      width: var(--itemWidth);
    }
  }
}
```

```tsx
export default function MovieCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className={namer('wrapper')}>
      <div className={namer('carousel')}>
        <ul style={{ '--currentIndex': currentIndex } as React.CSSProperties}>{/* ... */}</ul>
      </div>
    </section>
  );
}
```

tsx 파일에서 css변수인 --currentIndex만 설정해주면 됩니다. 이를 기반으로 SCSS에서 아이템 위치와 크기가 계산됩니다.

---

<br/>

### class-namer

class-namer는 SCSS모듈에 맞는 `className`을 생성해주는 유틸리티 입니다.

SCSS모듈을 사용하여 `className`을 지정할 때 모듈의 이름(예: style)을 중복해서 작성해야하는 번거로움을 해결하기 위해 구현하였습니다.

```tsx
//class-namer 사용전
<div className={`${style.box} ${style.fruitBox} ${style.appleBox} ${isVsible ? 'visible' : ''}`}></div>

//class-namer 사용후
<div className={namer('box fruitBox applBox', isVisible && 'visible')}></div>
```

[class-namer](class-namer코드파일경로)는 `createClassNamer`함수로 생성합니다.
SCSS모듈을 인수로 전달하여 호출합니다.

```tsx
//class-namer 생성
import style from './index.module.scss';
import { createClassNamer } from 'class-namer';
const namer = createClassNamer(style);
```

생성된 class-namer는 문자열을 인수로 받아 SCSS모듈에 맞는 `className`문자열을 반환합니다. 인수로 받은 부울값은 무시되기 때문에 논리연산자의 단락평가를 활용할 수도 있습니다.

```tsx
<div className={namer('box fruitBox applBox', isVisible && 'visible')}></div>
// or
<div className={namer('box', 'fruitBox', 'applBox', isVisible && 'visible')}></div>
// or
<div className={namer(`box fruitBox applBox ${isVisible ? 'visible' : ''}`)}></div>
```

<br/>

---

<br/>

<details>
  <summary>기타 메모</summary>

## 배운점

- 자주 사용되는 애니메이션을 미리 정의해두면 편하다. (중복제거, 작업속도 향상)
- Intersection Observer API
- css
  - clip-path
  - mask-...
  - 베지어 곡선(트렌지션 함수와 관련됨) (cubic-bazier)

## 궁금한점

- &#60;img&#62; vs background, 어떤상황에 무엇을 사용해야 좋은가?
- publice vs src, 이미지를 어디에 보관해야하나? 장단점이 뭔가?
- UI가 복잡할수록 CSS가 복잡해진다. 좀 더 파악하기 쉽게하는 방법이 있을까?
- 이미지가 언제 로딩되고, 언제 그리고 어디에 캐시되나?

  - 궁금증이 생긴 문제의 배경
    - 배포 후 페이지에 처음 진입시 사진이 느리게 로딩되어 빈공간이 발생
    - 요소의 호버했을 때 표시되는 이미지가 미리 로드되지 않고 요소를 호버 했을 시점에 로드된다. 그래서 요소를 호버하고 시간이 좀 지난 후 이미지가 표시된다.

  </details>
