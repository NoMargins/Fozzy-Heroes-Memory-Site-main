export const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

export const getUniqueBusinesses = (heroesData) => {
    return ['Усі бізнеси', ...heroesData.reduce((acc, hero) => {
        if (!acc.includes(hero.business)) {
            acc.push(hero.business);
        }
        return acc;
    }, [])];
};

export const filterHeroes = (heroesData, business, searchQuery, isStraightAlphabetic) => {
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

export const filterNames = (heroesData, query) => {
    return heroesData
        .map(hero => hero.name)
        .filter(name => name.toLowerCase().includes(query.toLowerCase()));
};
