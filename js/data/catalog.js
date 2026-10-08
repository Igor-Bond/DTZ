/**
 * Поиск по содержимому: по id находится модуль, ситуация, упражнение.
 *
 * Сами данные лежат в js/data/index.js (его пишет tools/make-index.mjs), а
 * здесь — всё, что приложению нужно спросить у них. Карты строятся при первом
 * обращении и не меняются: данные — константы.
 */

import { ГРАММАТИКА, ТЕХНИКА, СИТУАЦИИ, ОШИБКИ, ФРАЗЫ, СПРАВОЧНИК, ШПАРГАЛКА, ЭКЗАМЕН } from './index.js';

export { ГРАММАТИКА, ТЕХНИКА, СИТУАЦИИ, ОШИБКИ, ФРАЗЫ, СПРАВОЧНИК, ШПАРГАЛКА, ЭКЗАМЕН };

export const МОДУЛИ = [...ГРАММАТИКА, ...ТЕХНИКА];

let упражнения = null;

/** Все упражнения курса: { упражнение, откуда }. */
function собрать() {
    if (упражнения) return упражнения;

    упражнения = new Map();

    const положить = (у, откуда) => упражнения.set(у.id, { у, откуда });

    for (const м of МОДУЛИ) for (const у of m_упр(м)) положить(у, { тип: 'модуль', id: м.id });
    for (const с of СИТУАЦИИ) for (const у of с.drills || []) положить(у, { тип: 'ситуация', id: с.id });
    for (const семья of ОШИБКИ) {
        for (const э of семья.items) for (const у of э.drills || []) положить(у, { тип: 'ошибка', id: э.id });
    }

    return упражнения;
}

const m_упр = (м) => м.exercises || [];

export function упражнениеПоId(id) {
    return собрать().get(id)?.у || null;
}

export function источникУпражнения(id) {
    return собрать().get(id)?.откуда || null;
}

export function всеУпражнения() {
    return [...собрать().values()].map((в) => в.у);
}

export function упражненияПоТеме(тема) {
    return всеУпражнения().filter((у) => у.tag === тема);
}

export function модульПоId(id) {
    return МОДУЛИ.find((м) => м.id === id) || null;
}

export function ситуацияПоId(id) {
    return СИТУАЦИИ.find((с) => с.id === id) || null;
}

/** Задание письма по id вида «s01-a»: { ситуация, задание }. */
export function заданиеПоId(id) {
    const ситуация = СИТУАЦИИ.find((с) => id.startsWith(`${с.id}-`));
    const задание = ситуация?.tasks.find((з) => з.id === id);
    return ситуация && задание ? { ситуация, задание } : null;
}

export function семьяПоId(id) {
    return ОШИБКИ.find((с) => с.id === id) || null;
}

export function записьОшибкиПоId(id) {
    for (const с of ОШИБКИ) {
        const э = с.items.find((x) => x.id === id);
        if (э) return { семья: с, запись: э };
    }
    return null;
}

/** Входной тест: упражнения, помеченные diag, по порядку модулей. */
export function упражненияДиагностики() {
    return ГРАММАТИКА.flatMap((м) => m_упр(м).filter((у) => у.diag));
}

/** Разделы шпаргалки и справочника одним списком с группой. */
export function разделыШпаргалки() {
    return [
        ...ШПАРГАЛКА.map((р) => ({ ...р, группа: 'Схемы и конструкции' })),
        ...СПРАВОЧНИК.map((р) => ({ ...р, группа: 'Таблицы форм' }))
    ];
}

export function разделШпаргалкиПоId(id) {
    return разделыШпаргалки().find((р) => р.id === id) || null;
}
