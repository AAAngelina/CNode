
function topicsList(topicsList = {
    loading: true,
    data: []
}, action) {
    switch (action.type) {
        case "topicsList_loading":
            return {
                loading: true,
                data: []
            }
        case "topicsList_loaded":
            return {
                loading: false,
                data: action.data
            }
        default:
            break;
    }
    return topicsList;
}

export { topicsList }