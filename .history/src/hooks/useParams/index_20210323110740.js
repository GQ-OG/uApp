import URI from 'urijs'

const query = URI().search(true)
export default () => {
    console.log(query, "query")
}