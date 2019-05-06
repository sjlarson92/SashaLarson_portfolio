
### Change styling when mouse is hovering over
```css
.container header nav a:hover {
/*======= create a background property and set it to white.  Then create a color property and set it's value to pink. */
  background-color: white;
  color: pink;
}
```

### CSS Animation

```css
@keyframes changeColor {
  from {color: pink;}
  to {color: yellow;}
}

h1 {
  font-family: 'Gaegu', cursive;
  margin: 20px 0;
  font-size: 60px;
  text-align: center;
  animation-name: changeColor;
  animation-duration: 4s;
}
```
