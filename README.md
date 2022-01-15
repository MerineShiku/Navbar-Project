# This projects demonstrates the use of the classList.
Definition and Usage
The classList property returns the class name(s) of an element, as a DOMTokenList object.

This property is useful to add, remove and toggle CSS classes on an element.

add(class1, class2, ...)  -	Adds one or more class names to an element.

If the specified class already exist, the class will not be added

contains(class)	Returns a Boolean value, indicating whether an element has the specified class name.
Possible values:

true - the element contains the specified class name
false - the element does not contain the specified class name



toggle(class, true|false)	Toggles between a class name for an element.

The first parameter removes the specified class from an element, and returns false.
If the class does not exist, it is added to the element, and the return value is true.


length -	Returns the number of classes in the list.

This property is read-only
