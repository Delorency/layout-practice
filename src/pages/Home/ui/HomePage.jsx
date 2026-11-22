import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import spaceImg from '../../../assets/space.jpg';
import galaxyImg from '../../../assets/galaxy.jpg';
import solarImg from '../../../assets/solar-system.jpg';

export const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      
      <section className={styles.hero} style={{ '--bg-image': `url(${spaceImg})` }}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Галактика Млечный Путь · Солнечная система</p>
          <h1 className={styles.title}>Космос.<br/>Между звездами и планетами.</h1>
          <p className={styles.lead}>
            Пространство, где рождаются звезды, сталкиваются галактики и вращаются планеты. 
            Познакомимся с местом, которое мы называем домом во Вселенной.
          </p>
          <div className={styles.actions}>
            <Link className={styles.button} to="/planets">
              Изучить планеты →
            </Link>
            <Link className={styles.secondary} to="/galaxies">
              Мир галактик
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Первое знакомство</p>
          <h2 className={styles.sectionTitle}>Бескрайние просторы Вселенной</h2>
          <p className={styles.sectionText}>
            Возраст Вселенной составляет около 13,8 миллиардов лет. За это время из плотного горячего 
            состояния она расширилась до невероятных размеров. Сегодня мы знаем, что космос состоит 
            не только из привычных нам звезд и планет, но и из загадочной темной материи и темной энергии.
          </p>
          <a href="https://ru.wikipedia.org/wiki/Вселенная" className={styles.link}>О масштабах — в энциклопедии</a>
        </div>

        <dl className={styles.timeline}>
          <div className={styles.timelineItem}>
            <dt><span>13.8</span> млрд лет</dt>
            <dd>Возраст Вселенной с момента Большого взрыва.</dd>
          </div>
          <div className={styles.timelineItem}>
            <dt><span>2</span> трлн</dt>
            <dd>Примерное количество галактик в наблюдаемой Вселенной.</dd>
          </div>
          <div className={styles.timelineItem}>
            <dt><span>8</span> планет</dt>
            <dd>Вращаются вокруг нашего Солнца в Солнечной системе.</dd>
          </div>
        </dl>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeadingSplit}>
          <div>
            <p className={styles.eyebrow}>Детали, которые запоминаются</p>
            <h2 className={styles.sectionTitle}>У каждого объекта свой характер</h2>
          </div>
          <Link to="/galaxies" className={styles.link}>Все галактики →</Link>
        </div>
        
        <div className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={galaxyImg} alt="Млечный Путь" className={styles.cardImage} />
            </div>
            <h3>Наш космический адрес</h3>
            <p>Солнечная система находится в одном из спиральных рукавов Млечного Пути, на расстоянии 26 000 световых лет от центра.</p>
          </article>
          <article className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={solarImg} alt="Солнце" className={styles.cardImage} />
            </div>
            <h3>Звезда по имени Солнце</h3>
            <p>В центре нашей системы находится желтый карлик, который содержит 99,86% всей массы Солнечной системы.</p>
          </article>
          <article className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={spaceImg} alt="Туманность" className={styles.cardImage} />
            </div>
            <h3>За пределами видимого</h3>
            <p>Космос полон загадок: черные дыры, темная материя и экзопланеты, на некоторых из которых может быть жизнь.</p>
          </article>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Готовы к путешествию?</h2>
        <p className={styles.ctaText}>
          Изучите каждую из восьми планет Солнечной системы: от раскаленного Меркурия до ледяного Нептуна. 
          Узнайте их размеры, состав атмосферы и главные загадки.
        </p>
        <Link to="/planets" className={styles.ctaButton}>
          Перейти к планетам →
        </Link>
      </section>

      <aside className={styles.note}>
        <p className={styles.eyebrow}>О проекте</p>
        <h2>Космический гид</h2>
        <p>
          Этот сайт — учебный проект, посвященный изучению Солнечной системы и глубокого космоса. 
          Здесь собрана информация о планетах, галактиках и масштабах Вселенной.
        </p>
        <Link to="/practice" className={styles.link}>Открыть практикум →</Link>
      </aside>

    </div>
  );
};