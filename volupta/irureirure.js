/**
 * Creates a new proposed size using the specified width and height.
 *
 * @param {number} width - The width of the proposed size.
 * @param {number} height - The height of the proposed size.
 * @returns {Object} An object representing the proposed size.
 */
function createProposedSize(width, height) {
  return {
    width: width,
    height: height
  };
}

// Example usage:
const proposedSize = createProposedSize(800, 600);
console.log(proposedSize); // { width: 800, height: 600 }
