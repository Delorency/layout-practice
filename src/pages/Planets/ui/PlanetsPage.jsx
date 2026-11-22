import styles from './PlanetsPage.module.css';
import mercuryImg from '../../../assets/mercury.png';
import venusImg from '../../../assets/venus.png';
import earthImg from '../../../assets/earth.png';
import marsImg from '../../../assets/mars.png';
import jupiterImg from '../../../assets/jupiter.png';
import saturnImg from '../../../assets/saturn.png';
import uranusImg from '../../../assets/uranus.png';
import neptuneImg from '../../../assets/neptune.png';

const terrestrialPlanets = [
  {
    name: 'Меркурий',
    image: mercuryImg,
    text: 'Самая близкая к Солнцу и самая маленькая планета системы. Из-за отсутствия атмосферы, которая могла бы удерживать тепло, перепады температур здесь самые экстремальные: от +430°C днем до -180°C ночью. Поверхность Меркурия испещрена кратерами, похожими на лунные, и она продолжает медленно сжиматься.',
    facts: ['Диаметр: 4 879 км', 'Спутники: 0', 'Год: 88 земных суток']
  },
  {
    name: 'Венера',
    image: venusImg,
    text: 'Самая горячая планета Солнечной системы, несмотря на то, что она находится дальше от Солнца, чем Меркурий. Причиной является плотная атмосфера из углекислого газа, которая создает мощнейший парниковый эффект. Давление на поверхности Венеры в 92 раза выше земного. Это мир облаков из серной кислоты и вулканических равнин.',
    facts: ['Диаметр: 12 104 км', 'Спутники: 0', 'Год: 225 земных суток']
  },
  {
    name: 'Земля',
    image: earthImg,
    text: 'Наш родной дом и единственное известное место во Вселенной, где существует жизнь. 71% поверхности покрыт водой, что в сочетании с азотно-кислородной атмосферой и магнитным полем создает уникальные условия. Земля имеет тектонические плиты, которые постоянно движутся, меняя облик планеты и вызывая землетрясения.',
    facts: ['Диаметр: 12 742 км', 'Спутники: 1 (Луна)', 'Год: 365.25 суток']
  },
  {
    name: 'Марс',
    image: marsImg,
    text: 'Красная планета, названная так из-за высокого содержания оксида железа в почве. Здесь находятся самые высокие горы в системе (Олимп, 21 км) и самый глубокий каньон (Долины Маринер). Марс — главный кандидат для будущей колонизации человечеством. Ученые находят следы древних рек и озер, что говорит о том, что когда-то планета была теплой и влажной.',
    facts: ['Диаметр: 6 779 км', 'Спутники: 2 (Фобос, Деймос)', 'Год: 687 земных суток']
  }
];

const gasGiants = [
  {
    name: 'Юпитер',
    image: jupiterImg,
    text: 'Крупнейшая планета Солнечной системы. Юпитер — газовый гигант, не имеющий твердой поверхности. Его знаменитое Большое Красное Пятно — это гигантский шторм, который бушует уже более 350 лет. У Юпитера самое сильное магнитное поле среди всех планет.',
    facts: ['Диаметр: 139 820 км', 'Спутники: 95']
  },
  {
    name: 'Сатурн',
    image: saturnImg,
    text: 'Шестая планета от Солнца, знаменитая своей обширной системой колец. Эти кольца состоят из миллиардов частиц льда, пыли и камней, и простираются на сотни тысяч километров. Сатурн — наименее плотная планета: его средняя плотность меньше, чем у воды.',
    facts: ['Диаметр: 116 460 км', 'Спутники: 146']
  },
  {
    name: 'Уран',
    image: uranusImg,
    text: 'Ледяной гигант, который уникален тем, что вращается на боку. Ось его наклона составляет почти 98 градусов. Уран имеет бледно-голубой цвет из-за метана в атмосфере. Это самая холодная планета в системе, где температура может опускаться до -224°C.',
    facts: ['Диаметр: 50 724 км', 'Спутники: 27']
  },
  {
    name: 'Нептун',
    image: neptuneImg,
    text: 'Самая дальняя планета от Солнца. Нептун — это мир сильных ветров: их скорость может достигать 2 100 км/ч. Планета была открыта не с помощью телескопа, а благодаря математическим расчетам, которые предсказали ее гравитационное влияние на Уран.',
    facts: ['Диаметр: 49 244 км', 'Спутники: 14']
  }
];

export const PlanetsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Астрономия · Солнечная система</p>
        <h1 className={styles.title}>Наш космический дом</h1>
        <p className={styles.subtitle}>
          Восемь уникальных миров, вращающихся вокруг нашей звезды. 
          От раскаленных скалистых пустынь до ледяных газовых гигантов, каждый из них таит в себе удивительные загадки.
        </p>
      </div>

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Планеты земной группы</h2>
        <p className={styles.sectionDesc}>Скалистые миры, расположенные ближе всего к Солнцу. Они имеют твердую поверхность и относительно небольшие размеры.</p>
      </div>

      <div className={styles.terrestrialList}>
        {terrestrialPlanets.map((planet, index) => (
          <div key={planet.name} className={`${styles.terrestrialItem} ${index % 2 !== 0 ? styles.reverse : ''}`}>
            <div className={styles.imageBox}>
              <img src={planet.image} alt={planet.name} />
            </div>
            <div className={styles.textBox}>
              <h3>{planet.name}</h3>
              <p>{planet.text}</p>
              <ul className={styles.factsList}>
                {planet.facts.map(fact => <li key={fact}>{fact}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeader} style={{ marginTop: '100px' }}>
        <h2 className={styles.sectionTitle}>Газовые и ледяные гиганты</h2>
        <p className={styles.sectionDesc}>Массивные планеты, состоящие в основном из газов и льдов. Они не имеют твердой поверхности.</p>
      </div>

      <div className={styles.giantsGrid}>
        {gasGiants.map(planet => (
          <div key={planet.name} className={styles.giantCard}>
            <div className={styles.giantGlow}></div>
            <div className={styles.giantImage}>
              <img src={planet.image} alt={planet.name} />
            </div>
            <div className={styles.giantContent}>
              <h3>{planet.name}</h3>
              <p>{planet.text}</p>
              <div className={styles.giantFacts}>
                {planet.facts.map(fact => <span key={fact}>{fact}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};