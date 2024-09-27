import { classify } from "@/shared";

/**
 * Эта секция отображает список функций, которые предлагает приложение.
 * Здесь описано, как эти функции решают боли, описанные в проблемной секции.
 * @returns Компонент секции с функциями
 */
export function FeaturesSection() {
  const features = [
    {
      title: "Создай голосовалку",
      description:
        "Пусть твоя команда решит, какие функции действительно нужны",
    },
    {
      title: "Расставь приоритеты",
      description:
        "Используйте голосование для определения того, что на самом деле важно для ваших клиентов",
    },
    {
      title: "Держи с клиентами обратную связь",
      description:
        "Постоянно общайтесь с клиентами, чтобы понимать их реальные потребности",
    },
    {
      title: "Обсуждайте новые идеи",
      description:
        "Создавайте место для обмена и обсуждения новых идей с вашей командой и клиентами",
    },
  ];

  return (
    <section className="bg-base-300 py-16">
      <div className="mx-auto rounded-t-[100px] bg-base-100 px-24 py-48">
        <h2 className="mb-12 text-center text-5xl font-bold">
          Делай то, что реально хотят твои клиенты
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
          <div
            className={classify({
              layout: "col-span-2",
              colors:
                "rounded-3xl bg-base-300 p-12 text-base-content shadow-md",
              spacing: "mb-4",
            })}
          >
            <h3 className="mb-4 text-2xl font-semibold">{features[0].title}</h3>
            <p className="text-gray-600">{features[0].description}</p>
          </div>
          <div
            className={classify({
              layout: "col-span-4",
              colors: "rounded-3xl bg-base-300 p-12 text-base-content shadow-md",
              spacing: "mb-4",
            })}
          >
            <h3 className="mb-4 text-2xl font-semibold">{features[0].title}</h3>
            <p className="text-gray-600">{features[0].description}</p>
          </div>
          <div
            className={classify({
              layout: "col-span-4",
              colors: "rounded-3xl bg-base-300 p-12 text-base-content shadow-md",
              spacing: "mb-4",
            })}
          >
            <h3 className="mb-4 text-2xl font-semibold">{features[0].title}</h3>
            <p className="text-gray-600">{features[0].description}</p>
          </div>
          <div
            className={classify({
              layout: "col-span-2",
              colors:
                "rounded-3xl bg-base-300 p-12 text-base-content shadow-md",
              spacing: "mb-4",
            })}
          >
            <h3 className="mb-4 text-2xl font-semibold">{features[0].title}</h3>
            <p className="text-gray-600">{features[0].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
