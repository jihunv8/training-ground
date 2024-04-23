# Splatoon3

[Splatoon3](https://www.nintendo.co.kr/switch/av5ja/index.html) 홈페이지를 클론한 프로젝트 입니다.

링크: https://training-ground-one.vercel.app/sass/splatoon3

- Intersection Observer API 사용
  - 커스텀 훅 구현하여 중복코드 감소
  - 요소가 화면에 표시될 때 애니메이션 트리거
- 스크롤 다운하면 화면이 전환되는 기능 구현
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

useVisible은 요소가 뷰포트 영역 안으로 들어왔는지 여부를 확인하는 커스텀 훅 입니다.

사용할 슬롯의 수를 인수로 전달합니다.
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

<details>
  <summary>애니메이션 예시</summary>

#### ink

![ink](https://github.com/jihunv8/training-ground/assets/78804014/50c277ac-3545-4913-947d-610b0d9d0e07)

```scss
/* 커진상태에서 시작하여 작아졌다 원래 크기로 돌아옴 */
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
/* 서서히 드러나며 작은상태에서 커졌다가 원래크기로 돌아옴 */
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

#### bandLeftToRight

![band-l-to-r](https://github.com/jihunv8/training-ground/assets/78804014/ed5d3b0b-eafc-4da8-be50-cdd478f4d53f)


```scss
/* 왼쪽에서 오른쪽으로 이동 */
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

BattleStyle 섹션에서 스크롤에 따른 화면 변화를 구현했습니다.

![스크롤시-화면전환](https://github.com/jihunv8/training-ground/assets/78804014/920bae6c-832c-423d-97df-aab883aad175)

원본 홈페이지에서 구조를 분석한뒤 아이디어를 얻었습니다.

구조는 다음과 같습니다.
우선 trigger요소를 포함하는 triggerSection 요소와 view를 포함하는 viewer요소가 있습니다.

viewer는 화면에 고정되어 있고 triggerSection은 스크롤이 되지만 viewer뒤에 가려져 보이지 않습니다.

viewer는 내부의 각 view는 triggerSection 내부의 각 trigger와 1대1로 연관되어 있습니다.
스크롤되어 trigger가 뷰포트 영역 안으로 들어오면 연관된 view가 화면에 표시됩니다.

![ezgif-4-1f4d2272b5](https://github.com/jihunv8/training-ground/assets/78804014/445cda35-9375-4913-bb62-e8590861c1e4)

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

---

<br/>

### 캐러셀

--width 변수와 translateX만 ts로 조정, 나머지는 SCSS에서 관리

---

<br/>

### class-namer

class-namer는 SCSS모듈에 해당하는 `className`을 생성해주는 유틸리티 입니다.

SCSS모듈을 사용하여 `className`을 지정할 때 모듈의 이름(예: style)을 중복해서 작성해야하는 번거로움을 해결하기 위해 구현하였습니다.

```tsx
//사용전
<div className={`${style.box} ${style.fruitBox} ${style.appleBox} ${isVsible ? 'visible' : ''}`}></div>

//사용후
<div className={namer('box fruitBox applBox', isVisible && 'visible')}></div>
```

class-namer는 `createClassNamer`함수로 생성합니다.
SCSS모듈을 인수로 전달하여 호출합니다.

```tsx
//class-namer 생성
import style from './index.module.scss';
import { createClassNamer } from 'class-namer';
const namer = createClassNamer(style);
```

생성된 class-namer는 문자열을 인수로 전달받고 `className`에 사용될 문자열을 반환합니다. 부울값이 인수로 전달된다면 무시되기 때문에 논리연산자의 단락평가를 활용할 수도 있습니다.

```tsx
<div className={namer('box fruitBox applBox', isVisible && 'visible')}></div>
// or
<div className={namer('box', 'fruitBox', 'applBox', isVisible && 'visible')}></div>
// or
<div className={namer(`box fruitBox applBox ${isVisible ? 'visible' : ''}`)}></div>
```

자세한 내용은 [class-namer READEME.md]()에서 볼 수 있습니다.

<br/>

---

<br/>

<details>
  <summary>기타 메모</summary>

## 배운점

- 애니메이션을 미리 정의해두면 편하다. (중복제거, 작업속도 향상)
- Intersection Observer API
- clip-path
- mask-...
- 베지어 곡선(트렌지션 함수와 관련됨) (cubic-bazier)

## 궁금한점

- <img> vs background, 어떤상황에 무엇을 사용해야할지 의문
- publice vs src, 이미지를 어디에 보관해야하나? 장단점이 뭔가?
- UI가 복잡할수록 CSS가 복잡해진다. 나은 방법이 있을까?
- 이미지가 언제 로딩되고, 언제 어디에 캐시되는지

## 발생한 문제점

- 이미지 로딩속도
  - 페이지 처음 로드할 때 사진이 로드되느라 비어있을 때가 있음.
  - 호버했을 때 이미지가 로드되어 호버직후에 바로 이미지가 표시되지 않음
  </details>
