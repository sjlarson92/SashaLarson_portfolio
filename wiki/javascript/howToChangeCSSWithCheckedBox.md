To add a css class when a checkbox is checked:

CSS:
`input[type=checkbox] + label {
  color: #ccc;
  font-style: italic;
}
input[type=checkbox]:checked + label {
  color: #f00;
  font-style: normal;
} `

HTML:
`<input type="checkbox" id="ossm" name="ossm">
<label for="ossm">CSS is Awesome</label> `
