export class DataResource {
    constructor(private endpoint) {}

    async loadAll() {
        const res = await fetch(this.endpoint)

        return res.json()
    }

    async loadSingle(id) {
        const res = await fetch(`${this.endpoint}/${id}`)

        return res.json()
    }

    async delete(id) {
        const res = await fetch(`${this.endpoint}/${id}`, {
            method: 'DELETE'
        })
        return res
    }
    
    async save(data) {
        const res = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return res
    }
}