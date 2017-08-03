[Sticky](http://foundation.zurb.com/sites/docs/sticky.html)
------
`fnSticky` directive

#### Module
Load the module in your application by adding it as a dependent module
```javascript
angular.module('app', ['fn-angular-sticky']);
```

#### Usage
The `fnSticky` directive can only be used as an attribute

```html 
<ANY 
    fn-sticky
    [fn-sticky-options="object"]
    ...
</ANY>
```

#### Arguments
| Param            | Type       | Details  |
| -------------    |------------| -----    |
| fnStickyOptions  | object     | Optional parameters to customize the instance of Sticky. This object follows the specification of the JavaScripit Foundation Sticky plugin options. See Foundation Sticky documentation [here](http://foundation.zurb.com/sites/docs/sticky.html)|

#### Events
The `fnSticky` directive will emit these events up the scope chain

| Event                         | Description   |
| -------                       | ------------- |
| stuckto.fn.sticky:top         | Fires when the directive element has become `position: fixed;` to the top    |
| stuckto.fn.sticky:bottom      | Fires when the directive element has become `position: fixed;` to the bottom |
| unstuckfrom.fn.sticky:top     | Fires when the directive element has become anchored                           |
| unstuckfrom.fn.sticky:bottom  | Fires when the directive element has become anchored                           |
