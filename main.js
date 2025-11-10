function iSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        console.log(key);
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
        }
    }
}

const nums = [2, 5, 8, 1, 4]
iSort(nums)