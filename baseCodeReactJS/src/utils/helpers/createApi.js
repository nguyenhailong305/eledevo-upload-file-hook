import Axios from 'axios'
export default function createApi({ url, method }) {
    const request = (paths = null, queries = null, payload = null) => {
        const config = {}
        config.url = url
        config.method = method
        if (paths) {
            config.url = Object
                .keys(paths)
                .reduce((prev, curr) => prev.replace(`:${curr}`, paths[curr]), url)
        }
        if (queries) {
            config.url = Object
                .keys(queries)
                .reduce((prev, curr) => prev + `${curr}=${queries[curr]}`, `${config.url}?`)
        }
        if (payload) {
            config.data = payload
        }
        return Axios(config)
            .then(res => res.data)
            .catch(res => res.error)
    }
    return request
} 