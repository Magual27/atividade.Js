function ordenar(){
    let n = [1,0,6,3,5,4,6,8,9,2,10]
    n.sort(compare)
    alert(n)
}
function compare(a,b){
    return a-b
}
