const filterNames = (heroesData, query) => {
    return heroesData
        .map(hero => hero.name)
        .filter(name => name.toLowerCase().includes(query.toLowerCase()));
};

export default filterNames;
