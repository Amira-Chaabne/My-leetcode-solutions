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
var maxAncestorDiff = function(root) {
    let v = 0;
let dfs = function(node, min, max){
  if(!node) return;
  min = Math.min(min, node.val)
  max = Math.max(max, node.val)
  v = Math.max(v, max-min)
  dfs(node.left, min, max)
  dfs(node.right, min, max)
}
  dfs(root, root.val, root.val)
  return v
};