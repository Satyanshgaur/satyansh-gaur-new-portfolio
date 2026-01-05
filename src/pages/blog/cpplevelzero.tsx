import React from 'react';
// import { BlogPost } from '../../components/BlogPost';
import { BlogPost } from '../../components/BlogPost';

// If the file does not exist, create it at src/components/BlogPost.tsx or adjust the path accordingly.

const CppLevelZero = () => {
  return (
    <BlogPost
      title="CPP: level zero"
      date="Jan 20, 2025"
      readTime="8 min read"
      tags={['C++', 'Programming', 'Basics', 'Learning']}

      slug ="cpp-level-zero"

      description ="A comprehensive cheat sheet covering essential C++ concepts for beginners."
    >
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold mb-4">1. Common Libraries</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`#include <iostream>      // for cout, cin
#include <string>        // for string class
#include <vector>        // for dynamic arrays
#include <algorithm>     // for sort, reverse, find
#include <cmath>         // for math functions like pow(), sqrt()
#include <cstdlib>       // for rand(), srand()
#include <ctime>         // for time()
#include <map>, <set>    // for STL map, set
#include <unordered_map> // for hash map
#include <stack>, <queue>// for stack, queue`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mb-4">2. Operators</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border rounded-lg">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Operator Type</th>
                <th className="border border-border p-3 text-left font-semibold">Examples</th>
                <th className="border border-border p-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">Arithmetic</td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">+ - * / %</code></td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">%</code> is modulus</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Assignment</td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">= += -= *=</code></td>
                <td className="border border-border p-3">Shorthand</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Comparison</td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">== != &gt; &lt; &gt;= &lt;=</code></td>
                <td className="border border-border p-3">Returns <code className="bg-muted px-1 rounded">true/false</code></td>
              </tr>
              <tr>
                <td className="border border-border p-3">Logical</td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">&amp;&amp; || !</code></td>
                <td className="border border-border p-3">AND, OR, NOT</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Bitwise</td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">&amp; | ^ ~ &lt;&lt; &gt;&gt;</code></td>
                <td className="border border-border p-3">Bit operations</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Increment/Decrement</td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">i++ ++i i-- --i</code></td>
                <td className="border border-border p-3">Pre/Post</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold mb-4">3. Math Basics</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`int x = 10 % 3;           // Modulo = 1
int y = pow(2, 3);        // 2^3 = 8
int z = sqrt(16);         // = 4
int r = abs(-10);         // = 10
double pi = M_PI;         // 3.14159 (needs <cmath>)`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mb-4">4. String Basics</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`#include <string>

string s = "hello";

// Length
int len = s.length();

// Concatenation
string t = s + " world";

// Substring
string sub = s.substr(1, 3); // "ell"

// Find
int idx = s.find("lo"); // returns index or string::npos

// Replace
s.replace(1, 2, "ii");  // "hiilo"

// Iterate
for (char c : s) cout << c << ' ';`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mb-4">5. Array Basics</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`int arr[5] = {1, 2, 3, 4, 5};

// Access
arr[2] = 10;

// Size
int n = sizeof(arr) / sizeof(arr[0]);

// Loop
for (int i = 0; i < n; i++) cout << arr[i] << " ";`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mb-4">Vector (Dynamic Array)</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Vectors allocate memory on the heap (not stack like regular arrays)</li>
          <li>They automatically manage memory allocation and deallocation</li>
          <li>When you don't need the vector anymore, its destructor automatically frees the memory</li>
        </ul>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`#include <vector>
vector<int> v = {1, 2, 3}; // makes an array with mutable size

// Add
v.push_back(4);

// Size
int len = v.size();

// Sort
sort(v.begin(), v.end());

// Iterate
for (int x : v) cout << x << " ";`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mb-4">7. Functions</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`int add(int a, int b) {
    return a + b;
}

void greet() {
    cout << "Hello!\\n";
}`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mb-4">8. Conditionals</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`if (a > b) {
    cout << "A";
} else if (a == b) {
    cout << "Equal";
} else {
    cout << "B";
}`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mb-4">9. Loops</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`// For
for (int i = 0; i < 5; i++) cout << i;

// While
int i = 0;
while (i < 5) cout << i++;

// Do-While
do { cout << i; } while (i++ < 5);`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mb-4">10. STL Algorithms</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`sort(v.begin(), v.end());
reverse(v.begin(), v.end());
auto it = find(v.begin(), v.end(), 3);
int count = std::count(v.begin(), v.end(), 3);`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mb-4">11. Modern C++ Features (C++11+)</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border rounded-lg">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Feature</th>
                <th className="border border-border p-3 text-left font-semibold">Syntax</th>
                <th className="border border-border p-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">Range-based for</td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">for (auto x : v)</code></td>
                <td className="border border-border p-3">Clean loops</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Auto type</td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">auto x = 5;</code></td>
                <td className="border border-border p-3">Compiler deduces type</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Lambda functions</td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">[](int a, int b){"{ return a + b; }"}</code></td>
                <td className="border border-border p-3">Inline anonymous functions</td>
              </tr>
              <tr>
                <td className="border border-border p-3">nullptr</td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">int* p = nullptr;</code></td>
                <td className="border border-border p-3">Safer than <code className="bg-muted px-1 rounded">NULL</code></td>
              </tr>
              <tr>
                <td className="border border-border p-3">Smart Pointers</td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">std::unique_ptr, std::shared_ptr</code></td>
                <td className="border border-border p-3">Memory safety</td>
              </tr>
              <tr>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">to_string()</code></td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">string s = to_string(123);</code></td>
                <td className="border border-border p-3">Int to string</td>
              </tr>
              <tr>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">stoi()</code></td>
                <td className="border border-border p-3"><code className="bg-muted px-1 rounded">int x = stoi("456");</code></td>
                <td className="border border-border p-3">String to int</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold mb-4">12. Input/Output</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`int a;
cin >> a;
cout << "Value: " << a << endl;

string s;
getline(cin, s); // reads whole line`}</code>
        </pre>

        <h3 className="text-2xl font-semibold mb-4">13. Common Use Cases</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`// Swap
swap(a, b);

// Random
srand(time(0));
int r = rand() % 100;  // 0 to 99

// Max/Min
int mx = max(a, b);
int mn = min(a, b);`}</code>
        </pre>

        <h2 className="text-3xl font-bold mb-4">Tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use <code className="bg-muted px-1 rounded">std::</code> or add <code className="bg-muted px-1 rounded">using namespace std;</code> at the top.</li>
          <li>Prefer <code className="bg-muted px-1 rounded">vector</code> over arrays for most use cases.</li>
          <li>Use <code className="bg-muted px-1 rounded">const</code> to protect variables from being modified.</li>
          <li>Always compile with <code className="bg-muted px-1 rounded">std=c++17</code> or later (<code className="bg-muted px-1 rounded">g++ file.cpp -o file -std=c++17</code>).</li>
        </ul>
      </div>
    </BlogPost>
  );
};

export default CppLevelZero;