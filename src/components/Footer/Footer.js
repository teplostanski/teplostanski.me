import FooterColumns from '../FooterColumns/FooterColumns';
import love from '../../assets/images/love.svg';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__items">
          <FooterColumns
            heading="Карта Сайта"
            links={[
              {
                type: 'Link',
                title: 'Обо мне',
                path: '/',
              },
              {
                type: 'Link',
                title: 'Мои проекты',
                path: '/projects',
              },
            ]}
          />
        </div>
        <div className="footer__items">
          <FooterColumns
            heading="Контакты"
            links={[
            ]}
          />
        </div>
        <div className="footer__items footer__links">
          <FooterColumns
            heading="Ссылки"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/r0bomurlok',
              },
              {
                title: 'LinkedIn',
                path: '#',
              },
              {
                title: 'StackOverflow',
                path: 'https://stackoverflow.com/users/21089931/r0bomurlok',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <p className="copyright__text">
          © 2022-2023 - Сделано с{' '}
          <img className="copyright__icon" src={love} alt="любовью" /> Игорем
          Теплостанским
        </p>
      </div>
    </div>
  );
}
