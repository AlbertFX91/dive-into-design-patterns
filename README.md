# dive-into-design-patterns
Implementations and examples of 'Dive into Design Patterns' book writen by Alexander Shvets

# Patterns classification
- **Creational patterns**: deals with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or in added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation, increasing flexibility and reusing of existing code
- **Structural patterns**: eases the design by identifying a simple way to realize relationships among entities, explaining how assemble and connect objects and classes into larger structures, while keeping the structures flexibles and efficient.
- **Behavioral patterns**: identifies common communication patterns among objects. By doing so, these patterns increase flexibility in carrying out communication. 

## Creational patterns

### Factory method
Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created

- Use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with.
- Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components (extend a UI element and override the createUI method)
- Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components. (on createConnection, check if a connection is not being used and provide it as a pool)

### Abstract Factory
It's a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

- Use the Abstract Factory when your code needs to work with various families of related products, but you don’t want it to depend on the concrete classes of those products—they might be unknown beforehand or you simply want to allow for future extensibility.
- Consider implementing the Abstract Factory when you have a class with a set of Factory Methods that blur its primary responsibility

### Builder
Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

- Use the Builder pattern to get rid of a "telescopic constructor"
- Use the Builder pattern when you want your code to be able to create different representations of some product (various representation of the same class)

