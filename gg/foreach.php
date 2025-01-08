<h1 style="color:#37915d">Franek GG site</h1>
<br>
<?php
$s=0;
$tab=[7,45,23,78,90,12,34,7,-4,3];
foreach ($tab as $w)
{
    echo $w."<br>";
    $s+=$w;
}
echo "Suma wartości w tablicy wynosi $s";
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