# Algorithms-Data-Structures

sec 1 Introduction

    1. Ciriculum walkthrough

    2. What order should you watch in

    3. How I'm Running My Code

        Chrome snipit
            inspect > sources tab > Snippets subtab>
                i can run javascript here

sec 2 Big O Notation

    4. Intro to Big O

        OBJECTIVES
            motivate the need for something like big O Notation

            Describe what Big O Notation is

            Simplify Big O Expressions

            Define "time complexity and space complexity of diffrent algorithms using Bit O Notation

            Describe what a logarithm is

    5. Timing Our Code

        the problem with time
            diffrent machines will record diffrend times

            the same machine will record diffrent times

            for fast algorithms, speed measurements may not be precise enough

    6. Coundtin Operations

sec4. Algorithms and Problem Solving Patterns

            understanding the Problem
            Explore Concrete Examples
            Break it down
            Solve/Simplify
            Look Back and Refactor

        19. STEP 1
            Understand the Problem
                1 can i restate the problem in my own words
                2 what are the inputs
                3 outputs that come from the solution
                4 can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?(You may nit be able to answer the question untuk you set obout solving the problem. thats ok: its still worth considering the question at this early stage.)
                5 How should I label the imporntant pieces of data are a part of the problem

        20. STEP 2 Concrete Examples

            coming up with examples can help you understand the problem better

            examples also provide sanity checks that your eventual solution works how it should

            user stories, unit tests

            start with simple examples
            progress to more complex Examples
            explore examples with empty inputs
            explore exampes with invalid inputs

            challange: write a function which takes in a string and returns counts of each character in the string

            // i start with the inputs and outputs
                charCount('aaa'); // {a:4}

        21. STEP 3 Break It Down

            explicitly write down the steps you need to take.
                this forces uou to think about the code you'll write before you write it, and helps you catch any lingering conceptual Issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well

        22. Step 4: Solve Or Simplify

                solve the problem, if i cant, solve a simpler problem

                SIMPLIFY:
                find the core difficulty in what im trying to do
                temporarily ignore that difficulty
                write a simplified solution
                then incorporate that difficulty back in

        23. Step 5: Look Back and Refactor

                refactoring questions
                    - can i check the result?
                    - can i derive the result differently?
                    - can i understand it at a glance?
                    - can i use the result or method for some other problem
                    - can i improve the performance of my solution?
                    - can you think of other ways to refactor?
                    - How have other people solved this problem?

sec5: Problem Solving Patterns

    27. Frequency counter Pattern

        generally speaking we are breaking down an array into smaller objects that can be compared to objects in another array.

    28. Frequency Counter: Anagram Challenge

    29. Anagram Challange Solution

    30. Multiple Pointers Pattern

        Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certin condition

        very efficient for solving problems with minimal space complexity as well

        EXAMPLE:
        write a function called sumZero which accepts a stored array of indegers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

    31. Count Unique Values

        Implement a function called countUniqueValues, which accepts a sorted arrau, and counts the unique values in the array. There can be negative numbers in the array , but it will always be stored

## 32 Count unique values Solution

        right over my head

## 33 Sliding Window Pattern

this pattern involves creating a window which can either be an array or number from one position to another

depending on a certain condition, the window either increases or closes (and a new window is created)

very useful for keeping track of a subset of data in an array/string etc.
