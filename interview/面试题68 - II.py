# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# 思路 dfs找到两个节点的父节点路径，然后比较


class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        # 找到某个节点的父节点路径[root, p1, p2, ..., target]
        def getParentPath(node, target, paths):
            if(not node):
                return False
            if node == target:
                paths.append(node)
                return paths

            paths.append(node)
            l = getParentPath(node.left, target, paths)
            if not l:
                r = getParentPath(node.right, target, paths)
                if not r:
                    paths.pop()

            return l or r

        p1 = getParentPath(root, p, [])
        p2 = getParentPath(root, q, [])

        l1 = 0
        l2 = 0
        while p1[l1] == p2[l2]:
            l1 = l1+1
            l2 = l2+1
            if(l1 == len(p1)):
                return p1[l1-1]
            if(l2 == len(p2)):
                return p2[l2-1]
        return p1[l1-1]
