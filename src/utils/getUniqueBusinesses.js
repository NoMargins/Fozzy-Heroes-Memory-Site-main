const getUniqueBusinesses = (heroesData) => {
    return ['Усі бізнеси', ...heroesData.reduce((acc, hero) => {
        if (!acc.includes(hero.business)) {
            acc.push(hero.business);
        }
        return acc;
    }, [])];
};

export default getUniqueBusinesses;
