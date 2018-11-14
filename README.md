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

var table = html.Table({
    'border':1
  },
  html.THead(
    html.Tr(
      html.Th('Id'),
      html.Th('Name'),
      html.Th('Programming Language')
    )
  ),
  html.TBody(
    html.Tr(
      html.Td(1),
      html.Td('Hakkı'),
      html.Td('golang')
    ),
    html.Tr(
      html.Td(2),
      html.Td('Nafız'),
      html.Td('javascript')
    ),
  )
);

var hr = html.Hr();

var b = document.getElementsByTagName("body")[0];

b.appendChild(div);
b.appendChild(hr);
b.appendChild(table);
```
![Output](https://i.imgur.com/uemwRLw.png)
