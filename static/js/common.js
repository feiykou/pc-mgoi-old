exports.gridGroup = function(options) {
    let group = []
    let groupItem = []
    options && options.forEach((item, index) => {
        groupItem.push(item)
        if (index % this.columnNum === this.columnNum - 1) {
            group.push(groupItem)
            groupItem = []
        }
    })
    if (groupItem.length > 0) {
        if (this.columnNum > groupItem.length) {
            for (let i = 0, length = groupItem.length; i < this.columnNum - length; i++) {
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