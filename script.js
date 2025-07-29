function print(thing) {
    document.getElementById('output').innerHTML += `<br>` + thing;
}

// code stuff below

function fibs(n) {
    let array = [0, 1];

    for (let i = 0; i < n - 2; i++) {
        array.push(array[i] + array[i + 1]);
    }
    return array;
}

function fibsRec(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const prev = fibsRec(n - 1);
    const next = prev[prev.length - 1] + prev[prev.length - 2];
    return [...prev, next];
}

function mergeSort(array) {
    // print('recur!');
    if (array.length <= 1) return array;
    const middle = Math.floor(array.length / 2);
    let array1 = array.slice(0, middle);
    let array2 = array.slice(middle);

    let mergedArray = merge(mergeSort(array1), mergeSort(array2));

    return mergedArray;
}

function merge(left, right) {
    let newArray = [];

    let i = 0;
    let k = 0;

    while (i < left.length && k < right.length) {
        if (left[i] < right[k]) {
            newArray.push(left[i]);
            i++;
        } else {
            newArray.push(right[k]);
            k++;
        }
    }

    return newArray.concat(left.slice(i)).concat(right.slice(k));
}


print(fibs(8));
print(fibsRec(8));

print(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
print(mergeSort([105, 79, 100, 110]));