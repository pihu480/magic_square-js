var magic_square=[[33 ,1,1]
    ,[1,2,1],
    [1,1,2]]
// Row sum
var list=[]
var i=0
var Row=0
while (i<magic_square.length){
    j=0
    while (j<magic_square[i].length){
        Row=Row+magic_square[i][j]
        j++
    }
    i++
console.log(Row)
}
//  sum
var result1=0
var col=[]
for (let  i of  magic_square[0]){
    for (let j of  magic_square){
        result1 +=magic_square[i][j]
        col.push(result1)
    }
}
 //Diagonals sum
var l=0
var Diagonals=0
while (l<magic_square[0].length){
        Diagonals=Diagonals+magic_square[l][l]
        l++
}
console.log(Diagonals)
if (Row==col==Diagonals){
    console.log("Orignal list",magic_square)
    console.log( "It is a magic square")
}
else{
    console.log("Orignal list",magic_square)
    console.log("It is a not magic square")
}