import React from "react";

export const LandingPage = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Главный баннер */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Голосовалка</h1>
            <p className="py-6">
              Собирайте обратную связь от ваших пользователей легко и эффективно
            </p>
            <button className="btn btn-primary">Начать бесплатно</button>
          </div>
        </div>
      </section>

      {/* Описание преимуществ */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Простота использования</h3>
                <p>Интуитивно понятный интерфейс для быстрого старта</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Гибкость настроек</h3>
                <p>Настройте голосование под ваши нужды</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Аналитика результатов</h3>
                <p>Получайте подробные отчеты по результатам голосований</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Как работает */}
      <section className="py-20 bg-base-300">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Как это работает
          </h2>
          <div className="steps steps-vertical lg:steps-horizontal">
            <div className="step step-primary">Создайте доску</div>
            <div className="step step-primary">Пригласите участников</div>
            <div className="step step-primary">Собирайте идеи</div>
            <div className="step step-primary">Анализируйте результаты</div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Отзывы пользователей
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  &quot;Голосовалка помогла нам быстро собрать и
                  приоритизировать идеи для нового продукта.&quot;
                </p>
                <p className="font-bold mt-4">- Анна, Product Manager</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  &quot;Простой и удобный инструмент для сбора обратной связи от
                  клиентов.&quot;
                </p>
                <p className="font-bold mt-4">
                  - Иван, Customer Success Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-base-300">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            <div className="collapse collapse-plus bg-base-100">
              <input
                type="radio"
                name="my-accordion-3"
                checked={true}
                readOnly
              />
              <div className="collapse-title text-xl font-medium">
                Сколько это стоит?
              </div>
              <div className="collapse-content">
                <p>
                  Базовая версия Голосовалки бесплатна. Для расширенных функций
                  есть платные тарифы.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Можно ли использовать для закрытых опросов?
              </div>
              <div className="collapse-content">
                <p>
                  Да, вы можете создавать приватные доски для закрытых
                  голосований.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Использовать */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать?</h2>
          <p className="mb-8">
            Создайте свою первую доску для голосования прямо сейчас
          </p>
          <button className="btn btn-primary btn-lg">Создать доску</button>
        </div>
      </section>

      {/* Футер */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">О нас</a>
          <a className="link link-hover">Контакты</a>
          <a className="link link-hover">Условия использования</a>
          <a className="link link-hover">Политика конфиденциальности</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2024 - Все права защищены Голосовалкой</p>
        </div>
      </footer>
    </div>
  );
};
