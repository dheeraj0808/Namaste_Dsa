# String Theory

A string is a sequence of characters stored together, like a mini array of characters. Strings are used to represent text — words, sentences, names, etc.

Example:

`"hello"` is a string made of characters `h`, `e`, `l`, `l`, `o`.

## Why String?
Strings let us store and work with text data — reading input, printing messages, comparing words, and so on.

## How Strings Are Stored
- In many languages (like JavaScript, Python, Java), a string is just an array of characters under the hood.
- Each character has an index, starting from `0`.

Example:
```
s = "code"
s[0] = 'c'
s[1] = 'o'
s[2] = 'd'
s[3] = 'e'
```

## Mutable vs Immutable
- Immutable string: once created, it cannot be changed (JavaScript, Python, Java strings are immutable).
  - Any "modification" actually creates a new string.
- Mutable string: can be changed in place (like a `StringBuilder` in Java, or a list of characters in Python).

## Basic Operations
- Traversal: visit every character
- Concatenation: joining two strings together
- Length: number of characters in the string
- Comparison: checking if two strings are equal
- Substring: extracting a part of the string
- Searching: finding a character or a smaller string inside a bigger string
- Reversal: flipping the order of characters

## Common String Methods (JavaScript style)
- `str.length` — length of the string
- `str[i]` or `str.charAt(i)` — get character at index `i`
- `str.slice(start, end)` — get a substring
- `str.indexOf(char)` — find index of a character
- `str.split("")` — convert string into array of characters
- `str.toUpperCase()` / `str.toLowerCase()` — change case
- `str.trim()` — remove extra spaces from start/end

## Time Complexity
- Access by index: `O(1)`
- Traversal: `O(n)`
- Concatenation: `O(n)` (since a new string is created)
- Search (substring): `O(n * m)` in the naive way

## Advantages
- Easy to read and understand
- Many built-in methods available
- Useful for text processing

## Disadvantages
- Immutable strings can be slow when modified repeatedly (new string created every time)
- Concatenating in a loop can be costly for large text

## Conclusion
A string is basically an array of characters used to handle text. Since strings are usually immutable, it's good to be careful with repeated modifications — using arrays or builders can be more efficient in such cases.

## String vs Array

### String
- Stores only characters
- Usually immutable (in JS, Python, Java)
- Comes with text-specific methods (`toUpperCase`, `trim`, etc.)
- Modifying creates a new string

### Array
- Can store any type of data (numbers, objects, characters, etc.)
- Usually mutable
- Comes with general-purpose methods (`push`, `pop`, `map`, etc.)
- Modifying changes the same array (no new copy needed)
