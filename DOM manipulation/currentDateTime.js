

const now = new Date();
localtime = now.toString();
utcTime = now.toGMTString();
document.write("<strong>Local time:</strong>"
+ localtime + "<br/>"); 
document.write("<strong>UTC time:</strong> " + utcTime);

hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
document.write("<h1>");
document.write(hours + ":" + mins + ":" + secs);
document.write("</h1>");
