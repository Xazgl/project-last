export async function post(url: string, body: Object) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    if (res.ok) {
        const result = await res.json()
        return result
    }
    return Promise.reject({
        status: res.status,
        statusText: res.statusText
    })
}