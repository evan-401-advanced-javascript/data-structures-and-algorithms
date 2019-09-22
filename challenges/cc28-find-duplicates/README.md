# Challenge Summary
<!-- Short summary or background information -->
This challenge is to remove the duplicate nodes from a linked list

## Challenge Description
<!-- Description of the challenge -->
remove the duplicate nodes from a linked list

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
My approach was to create and traverse a linked list and then use a hash map to remove any duplicate

This solution is of O(n) for time because I am using a loop. It is O (n) for space because in the worst case you store all the values when there are no duplicates.

## Solution
<!-- Embedded whiteboard image -->
No white-boarding

// Steps
//
// Time:
// -run through link list: O(n)
// add element into the map/set/etc O(1)
// Delete if needed: O(1);
// O(n)
//
// Space:
// O(n) in the worst case you would store all of the values

// hashmap uses space
