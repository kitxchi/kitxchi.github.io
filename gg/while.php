<h1 style="color:#37915d">Franek GG site</h1>
<br>
<?php
/* example 1 */

$i = 1;
while ($i <= 10) {
    echo $i++;  /* the printed value would be
                   $i before the increment
                   (post-increment) */
}

/* example 2 */

$i = 1;
while ($i <= 10):
    echo $i;
    $i++;
endwhile;
?>
<style>
          @font-face {
               font-family: matrix;
               src: url(font/kropki.ttf);
          }
          html{
               text-align:center;
               background-color:black;
               color:#c0fad8;
               font-family: "matrix", sans-serif;
               margin-top: 30px;
               font-size: 20px;
          }
          h1{
            font-size: 54px;
          }
          h3{
            color:#37915d;
            font-size: 30px;
            }
          a{
            color: #c0fad8;
            text-decoration: none;
          }
          </style>
<a href="https://github.com/kitxchi/kitxchi.github.io/blob/main/gg/while.php">Zobacz kod strony</a>