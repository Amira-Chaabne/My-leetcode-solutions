/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var leafSimilar = function(root1, root2) {
    let leaves1 = [];
    let leaves2 = [];

    function dfs(node, leaves) {
        if (!node) return;
        if (!node.left && !node.right) leaves.push(node.val);
        dfs(node.left, leaves);
        dfs(node.right, leaves);
    }

    dfs(root1, leaves1);
    dfs(root2, leaves2);
  
    return leaves1.length === leaves2.length && leaves1.every((v, i) => v === leaves2[i]);
};