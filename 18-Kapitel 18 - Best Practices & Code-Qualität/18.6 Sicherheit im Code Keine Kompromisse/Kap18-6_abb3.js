=require('sanitize-html');
constsanitizeHtml
dirty
<p>Hallo<script>alert("xSs")</script>Welt</p>'
const
const
clean = sanitizeHtml(dirty);
//Ergebnis:
<p>Ha11o
Welt</p>
