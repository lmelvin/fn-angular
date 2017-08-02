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

