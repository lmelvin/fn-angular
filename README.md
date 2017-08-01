## fn-angular - [AngularJS](http://angularjs.org/) directives for [Foundation for Sites](http://foundation.zurb.com/sites.html)

### Dependencies
* AngularJS: 1.6.x
* Foundation-Sites: 6.4.1



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
| Param        | Type          | Details  |
| -------------|------------| -----|
| fnToggler    | expression | If the expression is truthy/falsy then the element is hidden/shown respectively. |
| dataToggler  | string     | The class you wish to apply when the element is in a hidden state. See foundation documentation [here](http://foundation.zurb.com/sites/docs/toggler.html)|