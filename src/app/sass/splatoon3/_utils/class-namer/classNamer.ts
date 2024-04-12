/**
 * @param style scss 모듈
 * 반환된 함수를 통해 class이름을 생성할 수 있습니다.
 * 예시:
 * import style from './index.module.scss';
 * const namer = createClassNamer(style);
 *
 * let isActive;
 * // isActive ? 'wrapper viwer active' : 'wrapper viwer' 반환
 * const className = namer('wrapper', 'viewer', isActive && 'active');
 */

export const createClassNamer = (style: { readonly [key: string]: string }) => {
  return (...names: (string | boolean)[]) => {
    return names
      .map((name) => {
        if (typeof name === 'boolean') return '';
        return style[name];
      })
      .join(' ');
  };
};
