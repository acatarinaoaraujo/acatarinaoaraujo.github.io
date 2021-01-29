---
layout: project
type: project
image: images/sudoku.png
title: Hexadecimal Sudoku Solver
permalink: projects/sudoku
# All dates must be YYYY-MM-DD format!
date: 2020-05-10
labels:
  - Java
  - JUnit
  - Sudoku
summary: A program made for ICS 211 that finds a solution to a Hexadecimal Sudoku problem.
---

<hr>

<pre>

This program is a recursive strategy to find a solution for a hexadecimal sudoku
problem. As you might know already, a Sudoku is a 9x9 grid with numbers from 1 to
9. However, in this program we have a 16x16 grid with values starting from 0 to F. 
A Sudoku is correct when the 16 rows and 16 columns in the grid has exactly one 
possible value, with a total of 16 unique values. Each small grid must also not
contain any duplicates. The problem starts with some of the grid cells already 
filled with values. After the program fills the remaining cells, it will give a
valid Sudoku. 

</pre>

<hr>

## Strategy to the solution: 
We must recursively try to find a solution that fills the empty cells.
If a value is accepted, we move the value in the cell. If the attempt is not
successful, the program must replace the Sudoku grid with the old value. We 
do the same process for all the remaining cells.

  <div class="ui medium rounded images">
  <img class="ui image" src="../images/sudoku-page1.png">
  <img class="ui image" src="../images/sudoku-page2.png">
  <img class="ui image" src="../images/sudoku-page3.png">
  </div>

## Lessons Learn From this Project
The most trivial part of this project was the usage of nested for loops
to minutiously examine the values to be set in the empty cells. Nested 
for loops can be difficul to trace when we are dealing with many of them. 
Another important part was to test the program using JUnit. Test cases 
were created To make sure it was working the way it should.

  
  *Source code to be released soon.*

