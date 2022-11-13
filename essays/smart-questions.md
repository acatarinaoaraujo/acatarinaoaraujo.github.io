---
layout: essay
type: essay
title: How to Ask Smart Questions
# All dates must be YYYY-MM-DD format!
date: 2021-01-28
published: false
labels:
  - Software Engineering
  - Learning
  - Stack Overflow
  - Smart Questions 
---


Have you ever thought that a bad answer may be the result of a poorly formulated question?
If you participate in forums, you know that the chances of a good question appearing are low.
And this is bad for everyone.  
 
First, try to read and understand the error message. It often gives the answer accompanied by 
the line number. Why waste your time — and of others — with unnecessary questions? If you
are unable to understand the error message, do a research with it before asking your question. 
It is likely that someone has had the question as you. The answer will come in the first Google
result and, almost always, it will be an answer from Stack Overflow. 

### Asking Smart Question

If you still have not found an answer to your problem. Maybe, it is time to ask your question.
But how to ask a smart question?

1. Understand the problem. After all, how to ask the right question without first knowing the 
problem you need to solve?
2. Be clear in your question. The reader needs to understand exactly what you 
asked. A poorly written question causes confusion, and if it is too long, it can be difficult
for the reader to understand. 
3. Ask specific questions. To have specific answers, questions must also be specific. 
4. Explain what you are trying to do and what you have tried already.
5. Give a sample of the code showing how you are doing. But make sure the size of the source
code is not too long. Very long questions tend to discourage the reader.
6. Explain what error you received and give the complete error message, not just the line you
think is the wrong one.

### Do Not Forget

And most important, no matter what happens, be nice to everybody. No one is forced to answer 
your questions, but people will try to do it to the best of their ability. Thank whoever tried
to help you.


### Examples: Smart Questions

Asked by Walker on [StackOverflow Page](https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array).
#### I. *"How can I remove a specific item from an array?"*

I have an array of numbers and I'm using the .push() method to add elements to it.
Is there a simple way to remove a specific element from an array?
I'm looking for the equivalent of something like:

>`array.remove(number);`

________________________________________________________________________________________________________

Asked by Brad on [StackOverflow Page](https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript).
#### II. *"What is the most concise and efficient way to find out if a JavaScript array contains a value?"*

This is the only way I know to do it:
```
  function contains(a, obj) {
      for (var i = 0; i < a.length; i++) {
          if (a[i] === obj) {
              return true;
          }
      }
      return false;
  }
```
Is there a better and more concise way to accomplish this?

Both questions one and two are very objective. The title of the question is clear and
they ask specifically one thing. Question one is very simple and it only asks
for a method. This question received 9043 upvotes, which means it contributed to the 
community. Question two involves code, but the person clearly already has one answer.
He is only asking for help on how to improve it. 

________________________________________________________________________________________________________


### Examples: Not Smart Questions

Asked by Nikolay on [StackOverflow Page](https://stackoverflow.com/questions/65950175/why-cant-i-use-map-in-props-of-function#65950175).

#### I. *“Why can't I use map in props of function?"*
I got an error

>Cannot read property 'map' of undefined

in props props.doubleArray. However, when I print it, it shows me a double array in the console. Why can't I use map in props?
```
class Menu extends Component {

render() {
...
}

function ListItems(props) {
  return (
<div className="listItems">
  {props.doubleArray.map((array) => (
    <ul className="listItems__column" key={array.id} value={array}>
      <li className="listItems__title"> {array[0]}</li>
      {array.map((item, index) =>
        index > 0 ? (
          <li className="listItems__text" key={item.id} value={item}>
            {item}
          </li>
        ) : null
      )}
    </ul>
  ))}
</div>
  );
}

export default Menu;
  ```
________________________________________________________________________________________________________
  
#### II. *"400 rows and 1000 column table using HTML and Javascript"*

*The question was deleted from StackOverflow*

1. What I am asking you to do is to create such a table with atleast 1000 columns and 400 rows filled.
2. Code should be based on javascript/html
3. Evaluation criteria: Coding style, Use of Object Oriented and Load Performance of the table in the browser (chrome)

________________________________________________________________________________________________________

Those are examples of bad questions. The question one asks: *"Why can't I use map in props of function?"*.
The question is not very clear and objective. But the main problem is that the person who asked it is not 
only asking for help, but he wants his homeworkto be done. He also gives instructions of how it should be done.

