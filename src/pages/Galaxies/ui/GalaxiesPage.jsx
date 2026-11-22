import styles from './GalaxiesPage.module.css';
import galaxyImg from '../../../assets/galaxy.jpg';
import nebulaImg from '../../../assets/nebula.jpg';
import blackholeImg from '../../../assets/blackhole.jpg';
import spaceImg from '../../../assets/space.jpg';

export const GalaxiesPage = () => {
  return (
    <div className={styles.container}>
      
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Глубокий космос · За пределами Млечного Пути</p>
        <h1 className={styles.title}>Острова<br/>Вселенной</h1>
        <p className={styles.lead}>
          Галактики — это гигантские гравитационно-связанные системы, состоящие из миллиардов звезд, 
          газа, пыли и темной материи. Наш Млечный Путь — лишь одна песчинка на этом бескрайнем пляже.
        </p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.textBlock}>
          <h2 className={styles.sectionTitle}>Что такое галактика?</h2>
          <p>
            Если посмотреть на ночное небо вдали от городских огней, можно увидеть светлую полосу, 
            пересекающую небосвод. Это Млечный Путь — наша родная галактика, видимая с ребра. 
            Внутри неё находится более 100 миллиардов звезд, и наше Солнце — лишь одна из них.
          </p>
          <p>
            Галактики бывают разных форм и размеров. Спиральные (как наша) напоминают огромные 
            космические вихри. Эллиптические выглядят как размытые шары. А неправильные галактики 
            не имеют четкой структуры, часто являясь результатом столкновений и слияний.
          </p>
          <p>
            Изучение глубокого космоса — это работа тысяч ученых по всему миру. Подробные снимки 
            и данные о далеких объектах можно найти в{' '}
            <a href="https://science.nasa.gov/universe/galaxies/" target="_blank" rel="noreferrer" className={styles.link}>
              открытом архиве NASA
            </a>.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={spaceImg} alt="Космическое пространство" />
        </div>
      </section>

      <section className={styles.cardsSection}>
        <h2 className={styles.sectionTitle}>Удивительные объекты</h2>
        <div className={styles.cardsGrid}>
          
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img src={galaxyImg} alt="Млечный Путь" className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Млечный Путь</h3>
              <p className={styles.cardText}>
                Наш космический дом. Спиральная галактика с перемычкой, диаметром около 100 000 световых лет. 
                Солнечная система находится на окраине одного из рукавов.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img src={nebulaImg} alt="Туманность" className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Туманности</h3>
              <p className={styles.cardText}>
                Облака межзвездного газа и пыли. Именно в них рождаются новые звезды. 
                Свет от этих процессов идет до нас миллионы лет.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img src={blackholeImg} alt="Черная дыра" className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Черные дыры</h3>
              <p className={styles.cardText}>
                Объекты с настолько сильной гравитацией, что их не может покинуть даже свет. 
                В центре Млечного Пути находится сверхмассивная черная дыра.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.linksSection}>
        <h2 className={styles.sectionTitle}>Полезные ресурсы</h2>
        <ul className={styles.resourceList}>
          <li>
            <a href="https://ru.wikipedia.org/wiki/Галактика" target="_blank" rel="noreferrer" className={styles.link}>
              Статья о галактиках в Википедии
            </a>
          </li>
          <li>
            <a href="https://esahubble.org/images/" target="_blank" rel="noreferrer" className={styles.link}>
              Архив изображений телескопа Хаббл (ESA)
            </a>
          </li>
          <li>
            <a href="https://webbtelescope.org/images" target="_blank" rel="noreferrer" className={styles.link}>
              Снимки телескопа Джеймса Уэбба
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};