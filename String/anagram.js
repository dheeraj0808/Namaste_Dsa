# Anagram — LeetCode 242

// Anagram = same characters + same frequency, order can be different

// Example:
// "listen" → "silent" → true
// "rat" → "car" → false

// Approach:
// 1. If lengths are different → false
// 2. Create frequency object
// 3. Count characters of s
// 4. Decrease count using t
// 5. If character is missing → false
// 6. If everything matches → true

function isAnagram(s, t) {

```
// If lengths are different, cannot be anagrams
if (s.length !== t.length) {
    return false;
}

let freq = {};

// Count characters of s
for (let i = 0; i < s.length; i++) {

    let char = s[i];

    if (freq[char] === undefined) {
        freq[char] = 1;
    } else {
        freq[char]++;
    }
}

// Decrease frequency using t
for (let i = 0; i < t.length; i++) {

    let char = t[i];

    if (freq[char] === undefined || freq[char] === 0) {
        return false;
    }

    freq[char]--;
}

return true;
```

}

/* Test Cases */

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false

// Time Complexity: O(n)
// Space Complexity: O(n)

// Pattern: Frequency Counting
