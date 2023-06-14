/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = (root) => {
  let minDiff = Infinity;
  let prevValue = -Infinity;

  // Helper function to traverse the tree and update minimum difference
  const traverseTree = (node) => {
    if (node) {
      traverseTree(node.left);

      minDiff = Math.min(minDiff, node.val - prevValue);
      prevValue = node.val;

      traverseTree(node.right);
    }
  };

  // Start traversing the tree
  traverseTree(root);

  return minDiff;
};

