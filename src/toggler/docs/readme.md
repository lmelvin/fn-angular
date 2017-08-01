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