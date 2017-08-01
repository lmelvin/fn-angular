## fn-angular - [AngularJS](http://angularjs.org/) directives for [Foundation for Sites](http://foundation.zurb.com/sites.html)

### Dependencies
* AngularJS: 1.6.x
* Foundation-Sites: 6.4.1

[Reveal](http://foundation.zurb.com/sites/docs/reveal.html)
------
`fnReveal` directive

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