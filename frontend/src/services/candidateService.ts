const API_URL = 'http://localhost:3010/api/candidates';

export const addCandidate = async (formData: FormData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to add candidate');
    }

    return response.json();
};
