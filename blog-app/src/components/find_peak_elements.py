# bad question IMO

class Solution:
    def findPeakElement(self, nums: List[int]) -> int:

        """
        Idea: It seems like tehre's always going to be a sol
        ex.   1) 1 2 3 4 5 6 7 -inf 
              2) -inf 7 6 5 4 3 2 1
              3) 1 2 3 4 3 2 1
              4) 1 1 1 0 1 1 1 
        """
        x = len(nums)
        if x == 1:
            return 0
        if x == 2:
            return 0 if nums[0] > nums[1] else 1
        l = 0
        r = x - 1
        
        while l < r:
            mid = (l + r)//2
            # exact middle
            if nums[mid - 1] <= nums[mid] >= nums[mid + 1]:
                return mid 
            # ascending order
            elif nums[mid - 1] <= nums[mid] <= nums[mid + 1]:
                l = mid + 1
            # descending order
            else:
                r = mid - 1
        return l if nums[l] >= nums[r] else r