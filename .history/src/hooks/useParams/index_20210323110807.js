import URI from 'urijs'

const query = URI().search(true)
export default () => {
    return query
}