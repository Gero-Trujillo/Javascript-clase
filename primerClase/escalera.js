const num = 3

for(let i=1;i<=num;i++){
    let espacio = " "
    for(let j=1;j<=i;j++){
        espacio = espacio + "*"
    }
    console.log(espacio)
}
for(let i = num-1;i>=1;i--){
    let space = " "
    for(let j=i;j>=1;j--){
        space = space + "*"
    }
    console.log(space)
}