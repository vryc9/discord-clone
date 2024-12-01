export interface ClientResponse<T> {
    status: number
    data: T
    headers: Headers
    url: string
}


export async function client<T>(
    endpoint: string,
    { body, ...customConfig }: Partial<RequestInit> = {},
): Promise<ClientResponse<T>> {

    const url = `http://localhost:8080/${endpoint}`
    
    const headers: HeadersInit = body instanceof FormData 
        ? {} 
        : { 'Content-Type': 'application/json' }

    const config: RequestInit = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },  
    }

    if (body instanceof FormData) {
        config.body = body
    }
    else if (body) {
        config.body = JSON.stringify(body)
    }

    try {
        const response = await window.fetch(url, config)
        const data = await response.json()
        console.log(data)
        if (response.ok) {
            return {
                status: response.status,
                data,
                headers: response.headers,
                url: response.url,
            }
        }
        throw new Error(response.statusText)
    } catch (err: unknown | Error) {
        return Promise.reject(err instanceof Error ? err.message : err)
    }
}

client.get = function <T>(endpoint: string, customConfig: Partial<RequestInit> = {}) {
    return client<T>(endpoint, { ...customConfig, method: 'GET' })
}

client.post = function <T>(
    endpoint: string,
    body: unknown | FormData,
    customConfig: Partial<RequestInit> = {}
) {
    return client<T>(endpoint, { ...customConfig, body: body instanceof FormData ? body : JSON.stringify(body) });
};
