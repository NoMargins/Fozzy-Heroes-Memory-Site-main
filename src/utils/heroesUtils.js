// src/utils/heroesUtils.js

export const getUniqueBusinesses = (heroesData) => {
    return ['Усі бізнеси', ...heroesData.reduce((acc, hero) => {
        if (!acc.includes(hero.business)) {
            acc.push(hero.business);
        }
        return acc;
    }, [])];
};

export const filterHeroes = (heroesData, business, searchQuery) => {
    return heroesData
        .filter(hero => 
            (business === 'Усі бізнеси' || hero.business === business) && 
            hero.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name, 'uk', { sensitivity: 'base' }));
};

export const filterNames = (heroesData, query) => {
    return heroesData
        .map(hero => hero.name)
        .filter(name => name.toLowerCase().includes(query.toLowerCase()));
};
