## 💡 TypeScript Interview Questions – Explained Simply

### 🔹 1. What are some differences between **interfaces** and **types** in TypeScript?

In TypeScript, both `interface` and `type` are used to define the shape of an object. However, there are key differences between the two:

| Feature             | Interface                                                            | Type Alias                                                       |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Extension           | Can extend another interface or multiple interfaces using `extends`. | Can use `extends` and intersections with `&`.                    |
| Declaration Merging | Supported – multiple declarations are merged.                        | Not supported – duplicate declarations will cause an error.      |
| Use Cases           | Best for defining object shapes and class contracts.                 | More flexible – can define primitives, unions, tuples, and more. |

**When to use what?**

* Use `interface` when you want to define the structure of an object or class.
* Use `type` when you need more flexibility (like unions, primitives, or tuples).

---

### 🔹 2. Explain the difference between **any**, **unknown**, and **never** types in TypeScript.

Understanding these three special types helps avoid bugs and write safer code.

| Type      | Meaning                                                                   | Use Case                                                     |
| --------- | ------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `any`     | Disables type checking completely.                                        | Use with caution; ideal during migration from JS.            |
| `unknown` | Like `any`, but safer – must check type before use.                       | Use when the value is uncertain but needs type safety.       |
| `never`   | Represents values that never occur (e.g., a function that never returns). | Use in functions that throw errors or have unreachable code. |

---

### 🔹 3. What is the use of the **keyof** keyword in TypeScript?

`keyof` হল একটি TypeScript কিওয়ার্ড যা একটি অবজেক্ট টাইপের সমস্ত প্রপার্টির নাম (key) গুলোর একটি ইউনিয়ন টাইপ তৈরি করে। এটি জেনেরিক ফাংশনে প্রপার্টির নামগুলো টাইপ-সেইফ উপায়ে ব্যবহার করার জন্য দরকারি।

উদাহরণস্বরূপ, ধরুন আপনার কাছে একটি অবজেক্ট টাইপ আছে যার মধ্যে `name` এবং `age` নামে দুটি প্রপার্টি আছে, তাহলে `keyof` এই দুইটি প্রপার্টিকে "name" | "age" আকারে বের করবে।

---

### 🔹 4. What is the use of **enums** in TypeScript? Provide an example of a numeric and string enum.

Enums ব্যবহৃত হয় একাধিক নির্দিষ্ট কনস্ট্যান্ট মানকে নামসহ গ্রুপ করে রাখার জন্য। এতে কোড বেশি পাঠযোগ্য হয় এবং ভুল কম হয়।

* **Numeric Enum**: প্রতিটি মানের জন্য সংখ্যাগুলো স্বয়ংক্রিয়ভাবে বরাদ্দ হয়, যেমন 0, 1, 2 ইত্যাদি।
* **String Enum**: প্রতিটি মানের জন্য একটি নির্দিষ্ট string মান নির্ধারিত থাকে।

Enums কোডকে বেশি মেইন্টেইনেবল করে এবং মানে বোঝায় স্পষ্টতা আনে।

---

### 🔹 5. What is **type inference** in TypeScript? Why is it helpful?

Type inference মানে TypeScript যখন স্বয়ংক্রিয়ভাবে একটি ভেরিয়েবলের টাইপ বুঝে ফেলে, আপনাকে আলাদাভাবে টাইপ উল্লেখ না করেও।

**উদাহরণ:** `let name = "John"` এখানে TypeScript নিজে থেকেই বুঝে নেয় `name` এর টাইপ হচ্ছে `string`।

এটা সাহায্য করে:

* কোডকে ছোট ও পরিষ্কার রাখতে,
* টাইপ সেফটি নিশ্চিত করতে,
* ডেভেলপমেন্টে গতি আনতে।

---

### 🔹 6. How does **TypeScript** help in improving code quality and project maintainability?

TypeScript টাইপ চেকিং করে বলে রানটাইম এরর অনেক কম হয়। এতে কোড লেখার সময়ই ভুল ধরা পড়ে যায়। বড় প্রজেক্টে টিমে কাজ করার সময় টাইপ সিস্টেম ডকুমেন্টেশনের মতো কাজ করে, ফলে নতুন ডেভেলপাররা সহজে বুঝতে পারে কোন ভেরিয়েবল বা ফাংশন কী করে।

**অতিরিক্ত সুবিধা:**

* ✅ IntelliSense (Auto-complete) ভালোভাবে কাজ করে।
* ✅ কোড রিফ্যাক্টর করা সহজ হয়।
* ✅ Bugs কম হয় এবং ডিবাগিং সহজ হয়।

---

### 🔹 7. Provide an example of using **union** and **intersection** types in TypeScript.

* **Union Type**: একটি ভেরিয়েবল একাধিক টাইপের একটি হতে পারে। উদাহরণ: `string | number`
* **Intersection Type**: একটি ভেরিয়েবল একাধিক টাইপকে একত্রে মেনে চলে। উদাহরণ: `TypeA & TypeB`

উদাহরণ ছাড়াই, শুধু এই সংজ্ঞাগুলো README ফাইলের জন্য যথেষ্ট এবং পরিষ্কারভাবে বিষয়টা তুলে ধরে।

---

> 📄 এই উত্তরগুলো README.md ফাইলের জন্য সাজানো হয়েছে — সরল, বোধগম্য এবং ডেভেলপার-ফ্রেন্ডলি।
