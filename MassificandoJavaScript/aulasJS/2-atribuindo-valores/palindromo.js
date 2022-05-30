// solução 1
function verificarPalindromo(string) {
    if (!string) return "string inexsistente";

    return string.split("").reverse().join("") === string;
}

// solução 2
// omo
// 012
// abba
// 012345

function verificarPalindromo2(string) {
    if (!string) return "string inexsistente";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string.length - 1 - i) {
            return false;
        }
    }

    return true; 
}

console.log(verificarPalindromo2("abba"));