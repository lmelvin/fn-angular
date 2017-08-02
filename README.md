## fn-angular - [AngularJS](http://angularjs.org/) directives for [Foundation for Sites](http://foundation.zurb.com/sites.html)

#### Dependencies
* AngularJS: 1.6.x
* Foundation-Sites: 6.4.1

#### Installation

```
$ bower install fn-angular --save
```

#### Module
To load all `fn-angular` modules in your application
```javascript
angular.module('app', ['fn-angular']);
```
Otherwise you can load individual component modules

#### Components
* [Reveal](#reveal)
* [Toggler](#toggler)


[Reveal](http://foundation.zurb.com/sites/docs/reveal.html)
------
`fnReveal` directive

#### Module
Load the module in your application by adding it as a dependent module
```javascript
angular.module('app', ['fn-angular-reveal']);
```

#### Usage
The `fnReveal` directive can only be used as an attribute

```html 
<ANY 
    fn-reveal="expression" 
    [fn-reveal-options="object"]
    ...
</ANY>
```

#### Arguments
| Param            | Type       | Details  |
| -------------    |------------| -----    |
| fnReveal         | expression | If the expression is truthy/falsy then the element is hidden/shown respectively. |
| fnRevealOptions  | object     | Optional parameters to customize the instance of Reveal. See foundation documentation [here](http://foundation.zurb.com/sites/docs/reveal.html)|

#### Events
The `fnReveal` directive will emit these events up the scope chain

| Event            | Description   |
| -------          | ------------- |
| open.fn.reveal   | Fires when the modal has successfully opened. |
| closed.fn.reveal | Fires when the modal is done closing. |


[Toggler](http://foundation.zurb.com/sites/docs/toggler.html)
------
`fnToggler` directive
#### Module
load the module in your application by adding it as a dependent module
```javascript
angular.module('app', ['fn-angular-toggler']);
```

#### Usage
The `fnToggler` directive can only be used as an attribute

```html 
<ANY 
    fn-toggler="expression" 
    data-toggler="string">
    ...
</ANY>
```

#### Arguments
| Param        | Type       | Details  |
| -------------|------------| -----    |
| fnToggler    | expression | If the expression is truthy/falsy then the `dataToggler` class is added/removed from the element respectively. |
| dataToggler  | string     | The class you wish to toggle. See foundation documentation [here](http://foundation.zurb.com/sites/docs/toggler.html)|

