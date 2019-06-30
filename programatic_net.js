// Pseudocode structure of a neural net

// Inputs & outputs
(inputs) => outputs

// Random values for inputs
Math.random()

// Activation
// Common method is called "relu"
function relu(value) {
	return value < 0 ? 0 : value;
}
