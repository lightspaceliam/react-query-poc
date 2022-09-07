export async function getAsync<T>(url: string): Promise<T> {

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    });

    return response.json();
}