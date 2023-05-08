function ordenar(){
    let n = [1,0,7,3,5,4,6,8,9,2,10]
    n.sort(function(a,b){
        return a - b
    })
    alert(n)
}
