// Anagram — LeetCode 242

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
    if (s.length !== t.length) {
        return false;
    }

    let count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) {
            return false;
        }

        count[char]--;
    }

    return true;
}