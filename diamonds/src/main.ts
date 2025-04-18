

function diamond (size: number): string {
    let dia : string[] = [];

    // Top of the diamond
    for (let i = 0; size > i; i++) {
        let t = size - i - 1;
        for (let j = 0; size >= j; j++) {
            if ( j > t) {
                dia.push("/");
            } else {
                dia.push(" ");
            }
        }

        for (let k = 0; size >= k; k++) {
            if (i >= k) {
                dia.push("\\")
            } else {
                dia.push(" ")
            }
        }
        dia.push("\n");
    }

    // Bottom of the diamond
     for (let i = 0; size > i; i++) {
        let t = size - i - 1;
        for (let k = 0; size >= k; k++) {
            if (k > i) {
                dia.push("\\")
            } else {
                dia.push(" ")
            }
        }

        for (let j = 0; size >= j; j++) {
            if ( t >= j) {
                // console.log(`${i},${j}: /`);
                dia.push("/");
            } else {
                // console.log(`${i},${j}: `);
                dia.push(" ");
            }
        }
        dia.push("\n");
    }
    return dia.join('');
}

function diamond_empty (size: number): string {
    let dia: string[] = [];
    // Top of the diamond
    for (let i = 0; i < size; i++) {
        let t = size - i - 1;
        for (let j = 0; j < size; j++) {
            if ( j === t) {
                dia.push("/");
            } else {
                dia.push(" ");
            }
        }

        for (let k = 0; k < size; k++) {
            if (i === k) {
                dia.push("\\")
            } else {
                dia.push(" ")
            }
        }
        dia.push("\n");
    }

    // Bottom of the diamond
    for (let i = 0; i < size; i++) {
        let t = size - i - 1;
        for (let k = 0; k < size; k++) {
            if (k === i) {
                dia.push("\\")
            } else {
                dia.push(" ")
            }
        }

        for (let j = 0; j < size; j++) {
            if ( t === j) {
                // console.log(`${i},${j}: /`);
                dia.push("/");
            } else {
                // console.log(`${i},${j}: `);
                dia.push(" ");
            }
        }
        dia.push("\n");
    }
    return dia.join('');
}

function main () {
    for (let c = 0; c < 10; c++) {
        console.log(`Diamond size: ${c}`);
        let e = diamond_empty(c)
        console.log(e);
        let d = diamond(c);
        console.log(d);
        console.log("====================");
    }
}

main();
