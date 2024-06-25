import styled from 'styled-components';
import { mediaSmall, mediaXLarge } from '@/app/styled-components/orion/_styles/mediaSize';

export type CategoryType = 'all' | 'youtube' | 'instagram' | 'news';

const categorys: { labelContent: string; value: CategoryType }[] = [
  { labelContent: '전체', value: 'all' },
  { labelContent: '유튜브', value: 'youtube' },
  { labelContent: '인스타그램', value: 'instagram' },
  { labelContent: '보도자료', value: 'news' },
];

type CategorySelectorProps = {
  selectedCategory: CategoryType;
  setSelectedCategory: React.Dispatch<CategoryType>;
};

export default function CategorySelector({
  selectedCategory = 'all',
  setSelectedCategory,
}: CategorySelectorProps): JSX.Element {
  return (
    <Wrapper>
      <InnerWrapper>
        {categorys.map(({ labelContent, value }, i) => {
          return (
            <RadioButton
              key={i}
              labelContent={labelContent}
              value={value}
              checked={selectedCategory === value}
              setSelectedCategory={setSelectedCategory}
            />
          );
        })}
      </InnerWrapper>
    </Wrapper>
  );
}

type RadioButtonProps = {
  labelContent: string;
  value: CategoryType;
  checked: boolean;
  setSelectedCategory: React.Dispatch<CategoryType>;
};

function RadioButton({ labelContent, value, checked = false, setSelectedCategory }: RadioButtonProps): JSX.Element {
  return (
    <>
      <InputRadio
        type="radio"
        id={`category-${value}`}
        name="category"
        value={value}
        checked={checked}
        onChange={() => {
          setSelectedCategory(value);
        }}
      />
      <BtnLabel htmlFor={`category-${value}`}>{labelContent}</BtnLabel>
    </>
  );
}

//Style for CategorySelector
const Wrapper = styled.div`
  margin-top: 40px;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

//Style for RadioButton
const BtnLabel = styled.label`
  cursor: pointer;
  padding-bottom: 6px;
  margin-left: 16px;
  margin-right: 16px;
  font-size: 2rem;
  line-height: 1.2;

  @media ${mediaXLarge} {
    font-size: 1.75rem;
  }

  @media ${mediaSmall} {
    font-size: 1.6rem;
  }
`;

const InputRadio = styled.input<{ type: 'radio' }>`
  display: none;

  &:checked + ${BtnLabel} {
    color: #e3051b;
    font-weight: 700;
    border-bottom: solid 2px #e3051b;
  }
`;
