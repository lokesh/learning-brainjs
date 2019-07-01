// Count to 5
// 1-5, 5-1

const trainingData = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [5, 4, 3, 2, 1],
    [4, 5, 6],
    [5, 6],
    [5, 6, 7, 8, 9, 10]
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

console.log(net.run([1,2,3,4,5]));
// console.log(net.run([5,4,3,2]));