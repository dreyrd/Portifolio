array1 = ['golfinho', 'boto', 'baleia', 'tartaruga']
array2 = []


array1.forEach(item => {
    console.log(item);
    array2.push(item);
});

array2.forEach(item => {
    console.log(item);
})