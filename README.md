# html.js
Javascript, HTML builder

Example

```javascript
var div = html.Div({
    class: ["content","row"],
    style: {
      "background-color": "#DDDD",
      "width": "100%",
      "font-size": "14px"
    },
    'data-role':'action'
  },
  html.P("Hello From ", html.Strong("HTML Generator"))
);

var b = document.getElementsByTagName("body")[0];

b.appendChild(div);
```
