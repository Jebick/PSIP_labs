<?php
// Фамилия и Имя
$surname = "Масловский";
$name = "Артём";
// Номер варианта
$n = 12;

// Используем цикл for для вывода Фамилии и Имени (n+5) раз
for ($i = 0; $i < $n + 5; $i++) {
    echo $surname . " " . $name . "<br>";
}
?>