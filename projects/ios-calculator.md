---
layout: project
type: project
image: img/projects/mobile/iOS-calculator-icon.png
title: Calculator 
permalink: projects/iOS-calculator
# All dates must be YYYY-MM-DD format!
date: 2022-07-04
published: false
labels:
  - Swift 5
  - Xcode
  - iOS Development
summary: Simple iOS calculator that performs basic calculations with ease.
---

A calculator that performs the four most basic mathematical operations - addition, subtraction, multiplication and division. In addition to sine, cos, tan and square-root. 

### What I Learned

- UIView Controller:
I experienced the primary duties of a view controller: update the views' content, typically in response to changes made to the data, interact with the user and respond to it though the view, control the entire interface's design, and collaborate with other app components. The architecture of a program is built on view controllers. The majority of apps have many view controllers, but every app has at least one. Each view controller controls a given area of the interface and controls how that interface communicates with the data provided. 

- Computed Properties (Getters/Setters):
In Swift, a getter and a setter allow access to and setting of respective properties. Computed properties offer a getter and an optional setter so that users can access and change other properties and values. 

Here is some code that shows how to use computed properties in Swift:

```swift
@IBOutlet weak var calculatonLabel: UILabel!
    
private var didFinishTypingNum: Bool = true
    
private var displayValue: Double {
  get {
    guard let number = Double(calculatonLabel.text!) else {
      fatalError("Cannot convert label text to a Double.")
    }
    return number
  }

  set {
    calculatonLabel.text = String(newValue)
  }
}
```

- Optionals: 

The Optionals type deals with the lack of a value. We can see that either "there is no value" or "there is a value and it is of type x, such as String." Now, if you made a variable optional, you will need to unwrap it in order to get its value. This is called *Forced Unwrapping*. Simply add an exclamation mark to the end of the variable to accomplish this. However, Forced Unwrapping can lead to major errors and headache. For this reason it is beter to do *Optional Binding*. It determines whether an optional includes a value and, if it does, to make that value available as a constant or variable. 

Example:
```swift
if let constantName = someOptional {
   statements
}
```

<div class="text-center p-4">
  <img width="200px" src="../img/projects/mobile/calculator.gif" class="img-thumbnail" >
  <img width="400px" src="../img/projects/mobile/landscape-calculator.png" class="img-thumbnail" >
</div>

To see more about the app visit the link below:
- [Source Code](https://github.com/acatarinaoaraujo/iOS-calculator)
