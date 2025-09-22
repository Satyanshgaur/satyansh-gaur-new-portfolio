import React from 'react';

import { BlogPost } from '../../components/BlogPost';

// If the file does not exist, create it at src/components/BlogPost.tsx or adjust the path accordingly.





const CppVectors = () => {


  return (


    <BlogPost


      title="VECTORS IN C++: DYNAMIC ARRAYS MADE EASY"


      date="July 30, 2025"


      readTime="12 min read"


      tags={['C++', 'Programming', 'Basics', 'Learning']}


    >


      <div className="space-y-8">


        <p className="text-base text-muted-foreground mb-4">
  A vector is a dynamic array — it can grow or shrink during runtime. Unlike plain arrays, you don’t need to know the size in advance.
</p>



        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">


          <code className="text-sm">{`//Declaration :

 vector <int> vector_name(size, value);
 // Example:
vector<int> v1;                      // Empty vector
vector<int> v2(5);                   // Vector with 5 elements (default 0)
vector<int> v3(5, 100);              // Vector with 5 elements, all initialized to 100
vector<int> v4 = {1, 2, 3, 4, 5};    // Initializer list
`}</code>


        </pre>
        <div className="space-y-8">
  {/* Section Heading */}
  <h2 className="text-2xl font-bold">🔸 Common Functions for DSA</h2>

  {/* Function: push_back */}
  <div>
    <h3 className="text-lg font-semibold mb-2">🔹 <code>push_back(x)</code></h3>
    <p className="text-muted-foreground mb-2">Adds element <code>x</code> to the end.</p>
    <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
      <code className="text-sm">{`v.push_back(5);`}</code>
    </pre>
  </div>

  {/* Function: pop_back */}
  <div>
    <h3 className="text-lg font-semibold mb-2">🔹 <code>pop_back()</code></h3>
    <p className="text-muted-foreground mb-2">Removes the last element.</p>
    <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
      <code className="text-sm">{`v.pop_back();`}</code>
    </pre>
  </div>

  {/* Function: size */}
  <div>
    <h3 className="text-lg font-semibold mb-2">🔹 <code>size()</code></h3>
    <p className="text-muted-foreground mb-2">Returns current number of elements.</p>
    <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
      <code className="text-sm">{`cout << v.size();`}</code>
    </pre>
  </div>

  {/* Function: resize */}
  <div>
    <h3 className="text-lg font-semibold mb-2">🔹 <code>resize(n)</code></h3>
    <p className="text-muted-foreground mb-2">Resizes the vector to <code>n</code> elements.</p>
    <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
      <code className="text-sm">{`v.resize(10); // Adds default 0s if size increases`}</code>
    </pre>
  </div>

  {/* Function: clear */}
  <div>
    <h3 className="text-lg font-semibold mb-2">🔹 <code>clear()</code></h3>
    <p className="text-muted-foreground mb-2">Removes all elements.</p>
    <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
      <code className="text-sm">{`v.clear();`}</code>
    </pre>
  </div>

  {/* Function: empty */}
  <div>
    <h3 className="text-lg font-semibold mb-2">🔹 <code>empty()</code></h3>
    <p className="text-muted-foreground mb-2">Checks if vector is empty.</p>
    <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
      <code className="text-sm">{`if (v.empty()) cout << "Empty!";`}</code>
    </pre>
  </div>

  {/* Function: at(i) */}
  <div>
    <h3 className="text-lg font-semibold mb-2">🔹 <code>at(i)</code></h3>
    <p className="text-muted-foreground mb-2">Returns element at index <code>i</code> with bounds checking.</p>
    <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
      <code className="text-sm">{`cout << v.at(2);  // Safer than v[2]`}</code>
 {/* Function: front() / back()*/}
 <div>      
    <h3 className="text-lg font-semibold mb-2">🔹 <code>front() / back ()</code></h3>
    <p className="text-muted-foreground mb-2">Returns the first or last element.</p>
    <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
      <code className="text-sm">{`cout << v.front(); // v[0]
cout << v.back();  // v[v.size()-1]`}</code>
    </pre>
    
 </div>
 
    </pre>
  </div>
</div>

<div className="space-y-8"> 
    {/* Section Heading */}
    <h2 className = "text-2xl font-bold">🔸 Traversing Vectors</h2>
    {/*Using index*/} 
    <div>   
        <h3 className='text-lg font-semibold mb-2'>🔹 Using index:</h3>
        <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
      <code className="text-sm">{`for (int i = 0; i < v.size(); i++)
    cout << v[i] << " ";`}</code>
    </pre>
    {/*Using Range-based for loop*/}
    <h3 className='text-lg font-semibold mb-2'>🔹 Using Range-based for loop</h3>
        <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
      <code className="text-sm">{`for (int x : v)
    cout << x << " ";`}</code>
    </pre>
    



    </div>


</div>

<div className="space-y-10">
  {/* 🔸 Sorting and Searching */}
  <section>
    <h2 className="text-2xl font-bold mb-4">🔸 Sorting and Searching</h2>
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
      <code className="text-sm">{`#include <algorithm> // Required for sort, reverse

sort(v.begin(), v.end());         // Sort ascending
sort(v.rbegin(), v.rend());       // Sort descending

reverse(v.begin(), v.end());      // Reverse

int index = find(v.begin(), v.end(), 3) - v.begin();  // Search for 3
if (index != v.size()) cout << "Found at index: " << index;`}</code>
    </pre>

    <div className="overflow-x-auto mt-4">
      <table className="w-full text-sm text-left border border-border rounded-lg">
        <thead className="bg-muted font-semibold">
          <tr>
            <th className="px-4 py-2 border">Function</th>
            <th className="px-4 py-2 border">What it does</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['v.begin()', 'Iterator to first element'],
            ['v.end()', 'Iterator just past last element'],
            ['v.rbegin()', 'Reverse iterator to last element'],
            ['v.rend()', 'Reverse iterator just before first element'],
            ['find(a, b, x)', 'Returns iterator to x in [a, b), else returns b'],
            ['iterator - iterator', 'Gives index or distance between iterators'],
          ].map(([func, desc], i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2 border font-mono">{func}</td>
              <td className="px-4 py-2 border text-muted-foreground">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>

  {/* 🔸 2D Vector */}
  <section>
    <h2 className="text-2xl font-bold mb-4">🔸 2D Vector (Matrix-style)</h2>
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
      <code className="text-sm">{`vector<vector<int>> matrix(3, vector<int>(4, 0)); // 3x4 zero matrix

matrix[1][2] = 7;  // Set value

for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        cout << matrix[i][j] << " ";
    }
    cout << endl;
}`}</code>
    </pre>
  </section>

  {/* 🔸 Real DSA Usage: Stack */}
  <section>
    <h2 className="text-2xl font-bold mb-4">🔸 Real DSA Usage</h2>

    <h3 className="text-lg font-semibold mb-2">🔹 Stack (LIFO)</h3>
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-6">
      <code className="text-sm">{`vector<int> stack;
stack.push_back(10);
stack.push_back(20);
stack.pop_back();       // removes 20
cout << stack.back();   // prints 10`}</code>
    </pre>

    <h3 className="text-lg font-semibold mb-2">🔹 Dynamic Input</h3>
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
      <code className="text-sm">{`int n, x;
cin >> n;
vector<int> arr;
for (int i = 0; i < n; i++) {
    cin >> x;
    arr.push_back(x);
}`}</code>
    </pre>
  </section>

  {/* 🔹 Memory Optimization */}
  <section>
    <h3 className="text-lg font-semibold mb-2">🔹 Memory Optimization Tip</h3>
    <p className="text-muted-foreground mb-2">
      Use <code className="font-mono">.shrink_to_fit()</code> to reduce unused capacity:
    </p>
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
      <code className="text-sm">{`v.shrink_to_fit();`}</code>
    </pre>
  </section>

  {/* ✅ Summary Table */}
  <section>
    <h2 className="text-2xl font-bold mb-4">✅ Summary Table</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border border-border rounded-lg">
        <thead className="bg-muted font-semibold">
          <tr>
            <th className="px-4 py-2 border">Function</th>
            <th className="px-4 py-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['push_back(x)', 'Add to end'],
            ['pop_back()', 'Remove last'],
            ['size()', 'Number of elements'],
            ['capacity()', 'Current storage capacity'],
            ['resize(n)', 'Resize to n elements'],
            ['clear()', 'Delete all elements'],
            ['at(i) / [i]', 'Access element at index'],
            ['front() / back()', 'First / Last element'],
            ['sort()', 'Sort elements'],
            ['find()', 'Search for an element'],
            ['vector<vector<int>>', '2D vector'],
          ].map(([func, desc], i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2 border font-mono">{func}</td>
              <td className="px-4 py-2 border text-muted-foreground">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
</div>

      </div>


    </BlogPost>


  );


};





export default CppVectors;