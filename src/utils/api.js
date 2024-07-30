const API_BASE_URL = 'https://preview.8.co.ua/api';

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

// Функція для відправки коментаря
export const postComment = async (id, comment) => {
    try {
        const response = await fetch(`${API_BASE_URL}/heroes/${id}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Failed to post comment for hero with ID ${id}:`, error);
        throw error;
    }
};

// Функція для відправки відгуку
export const sendFeedback = async (feedback) => {
    try {
        const response = await fetch(`${API_BASE_URL}/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedback),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to send feedback:', error);
        throw error;
    }
};
