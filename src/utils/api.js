
const API_BASE_URL = 'https://preview.8.co.ua/dt-js-api/get.php'; 

// Функція для отримання всіх героїв
export const fetchHeroes = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/heroes`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch heroes:', error);
        throw error;
    }
};

// Функція для отримання конкретного героя за ID
export const fetchHeroById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/heroes/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Failed to fetch hero with ID ${id}:`, error);
        throw error;
    }
};

