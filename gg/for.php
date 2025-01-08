<h1 style="color:#37915d">Franek GG site</h1>
<br>
<?php
$people = array(
    array('name' => 'Kalle', 'salt' => 856412),
    array('name' => 'Pierre', 'salt' => 215863)
);

for($i = 0, $size = count($people); $i < $size; ++$i) {
    $people[$i]['salt'] = mt_rand(000000, 999999);
}
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
<a href="https://github.com/kitxchi/kitxchi.github.io/blob/main/gg/for.php">Zobacz kod strony</a>