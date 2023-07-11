class Middleware {

    constructor() {}

    public async get(url: string): Promise<any> {
        return await fetch(url);
    }

    public async post(url: string, data: object): Promise<any> {
        return await fetch(
            url,
            {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }
        );
    }

    public async put(url: string, data: object): Promise<any> {
        return await fetch(
            url,
            {
                method: 'PUT',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }
        );
    }

    public async delete(url: string): Promise<any> {
        return await fetch(
            url,
            {
                method: 'DELETE',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}