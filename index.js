
const net = new brain.NeuralNetwork({
  hiddenLayers: [3],
});

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
];

// Forward propagation - Make prediction
// Back propagation - Measure distance from goal. Learn.
net.train(trainingData, {
  // log: (error) => console.log(error),
  // logPeriod: 100,
});

console.log(net.run([1, 0]));
// console.log(net.run([0, 1]));
// console.log(net.run([1, 0]));
// console.log(net.run([1, 1]));