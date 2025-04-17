

function diamond(size: number): string {
    let dia : string[] = [];
    for (let i = 0; i < size; i++) {
        let t = size - i - 1;
        for (let j = 0; j < size; j++) {
            if ( j > t) {
                // console.log(`${i},${j}: /`);
                dia.push("/");
            } else {
                // console.log(`${i},${j}: `);
                dia.push(" ");
            }
        }

        for (let k = 0; k < size; k++) {
            if (k > i) {
                dia.push("\\")
            } else {
                dia.push(" ")
            }
        }
        dia.push("\n");
    }
    return dia.join('');
}

function main() {
    let message = diamond(4);
    console.log(message);
}

main();
