/** SCSS 모듈 타입 */
type Style = { readonly [key: string]: string };

const splitBySpace = (str: string) => {
  const splitted = str.trim().split(' ');
  return splitted;
};

/**
 * 주어진 문자열로 class 이름을 생성하는 함수를 반환합니다.
 * ```tsx
 *  //예시
 *  import style from './index.module.scss';
 *  const namer = createClassNamer(style);
 *
 *  function FooComponent({ active }: { active: boolean}) {
 *    // 아래 3개 div의 className = active ? 'wrapper viwer active' : 'wrapper viwer'
 *    return (
 *      <>
 *        <div className={ namer('wrapper', 'viewer', isActive && 'active') }></div>
 *        <div className={ namer('wrapper viewer', isActive && 'active') }></div>
 *        <div className={ namer(`wrapper viewer ${isActive ? 'active' : ''}`)}></div>
 *      </>
 *    )
 *  }
 *
 * ```
 */
export const createClassNamer = (style: Style) => {
  const mapToClassName = (names: string[]) => {
    return names.map((name) => style[name]).filter((className) => className !== undefined);
  };

  return (...names: (string | boolean)[]) => {
    const result = names
      .reduce<string[]>((arr, name) => {
        if (typeof name === 'boolean') return arr;

        const splittedNames = splitBySpace(name);
        const classNames = mapToClassName(splittedNames);

        return [...arr, ...classNames];
      }, [])
      .join(' ');

    return result;
  };
};
