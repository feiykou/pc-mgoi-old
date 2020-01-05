export default function crumbCate(crumbData, callback) {
    let arr = [],
        json ={},
        crumb = [{name: '产品分类', id: 0}]
    crumbData.forEach((ele, index) => {
        if(crumbData.length-1 === index){
            callback && callback(ele)
        }
        json.name = ele.name
        json.id = ele.id
        arr.push(json)
        json = {}
    });
    return [...crumb,...arr];
}