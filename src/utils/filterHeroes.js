import shuffleArray from './shuffleArray';

const filterHeroes = (heroesData, business, searchQuery, isStraightAlphabetic) => {
    let filtered = heroesData
        .filter(hero =>
            (business === 'Усі бізнеси' || hero.business === business) &&
            hero.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

    if (isStraightAlphabetic !== null) {
        if (isStraightAlphabetic) {
            filtered = filtered.sort((a, b) => a.name.localeCompare(b.name, 'uk', { sensitivity: 'base' }));
        } else {
            filtered = filtered.sort((a, b) => b.name.localeCompare(a.name, 'uk', { sensitivity: 'base' }));
        }
    } else {
        filtered = shuffleArray(filtered);
    }

    return filtered;
};

export default filterHeroes;
