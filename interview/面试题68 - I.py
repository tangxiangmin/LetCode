# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
# 解题时没有JS版本，所以选择py3，不太会
# 思路：由于是BST，找公共节点比较省事


class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if p.val > q.val:
            [p, q] = [q, p]
        if(root == p):
            return p
        if(root == q):
            return q

        if p.val < root.val and q.val > root.val:
            return root
        parent = None
        if(q.val < root.val):
            parent = root.left
        elif p.val > root.val:
            parent = root.right

        return self.lowestCommonAncestor(parent, p, q)
