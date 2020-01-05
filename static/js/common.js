exports.gridGroup = function(options, columnNum = 4) {
    let group = []
    let groupItem = []

    options && options.forEach((item, index) => {
        groupItem.push(item)
        if (index % columnNum === columnNum - 1) {
            group.push(groupItem)
            groupItem = []
        }
    })

    if (groupItem.length > 0) {
        if (columnNum > groupItem.length) {
            for (let i = 0, length = groupItem.length; i < columnNum - length; i++) {
                groupItem.push({
                    seize: true
                })
            }
        }
        group.push(groupItem)
    }
    groupItem = null
    return group
}