export function factorielle(n){
    if (n== 0) 
        return 1
    else
        return factorielle(n - 1)* n
    
}
console.log(factorielle(9));
