import { useVisible } from '@/app/sass/splatoon3/_hooks/useVisible';
import style from './index.module.scss';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';

const namer = createClassNamer(style);

export default function BattleStyle() {
  const [wrapper] = useVisible(3, { isPersistent: true });
  const [mainView, weapon, gear] = useVisible(3, { threshold: 0.5, isPersistent: true });

  const isViewerFixed = wrapper.isVisible;

  const isVisibleTitle = mainView.isVisible;
  const isVisibleC3 = mainView.isVisible;

  const isVisibleWeaponsImage = weapon.isVisible;
  const isVisibleWeaponHeader = weapon.isVisible;
  const isVisibleC1 = mainView.isVisible || weapon.isVisible;

  const isVisibleGearsImage = gear.isVisible;
  const isVisibleGearHeader = gear.isVisible;
  const isVisibleC2 = mainView.isVisible || gear.isVisible;

  return (
    <section ref={wrapper.ref} data-visible-id={wrapper.id} className={namer('wrapper')}>
      <div className={namer('viewer', isViewerFixed && 'fixed')}>
        <div className={style.bg}></div>
        <div className={namer('mainView')}>
          <h2 className={namer('title', isVisibleTitle && 'visible')}>어떤 무기와 어떤 옷, 어떤 스타일로 배틀할까?</h2>
          <div className={namer('c3', isVisibleC3 && 'visible')}></div>
        </div>
        <div className={namer('weaponView')}>
          <div className={namer('weaponsImage', isVisibleWeaponsImage && 'visible')}>
            <div className={namer('image', 'image1')}></div>
            <div className={namer('image', 'image2')}></div>
          </div>
          <div className={namer('weaponHeader', isVisibleWeaponHeader && 'visible')}>
            <h2 className={namer('weaponTitle')}>무기</h2>
            <p className={namer('weaponDescription')}>
              잉크를 칠할 수 있는 무기 타입은 <br />
              크게 11종류로 나뉩니다. <br />
              자신이 칠하는 방식에 맞는 <br />
              무기를 들고 배틀에 도전합시다!
            </p>
          </div>
          <div className={namer('c1', isVisibleC1 && 'visible')}></div>
        </div>
        <div className={namer('gearView')}>
          <div className={namer('gearsImage', isVisibleGearsImage && 'visible')}>
            <div className={namer('image', 'image1')}></div>
            <div className={namer('image', 'image2')}></div>
          </div>
          <div className={namer('gearHeader', isVisibleGearHeader && 'visible')}>
            <h2 className={namer('gearTitle')}>무기</h2>
            <p className={namer('gearDescription')}>
              모자나 T셔츠, 스니커즈와 같은 아이템을 <br />
              자유롭게 조합하며 즐길 수 있습니다. <br />
              저마다 배틀을 돕는 특별한 능력도 붙어 있어 <br />
              겉모습과 능력 모두 코디네이트하기 나름.
            </p>
          </div>
          <div className={namer('c2', isVisibleC2 && 'visible')}></div>
        </div>
      </div>
      <div className={namer('triggerSection')}>
        <div ref={mainView.ref} data-visible-id={mainView.id} className={namer('trigger')}></div>
        <div ref={weapon.ref} data-visible-id={weapon.id} className={namer('trigger')}></div>
        <div ref={gear.ref} data-visible-id={gear.id} className={namer('trigger')}></div>
      </div>
    </section>
  );
}
