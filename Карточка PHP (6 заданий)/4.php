<?php
// Создание ассоциативного массива Студент с ключами Иванов, Петров, Сидоров и значениями стипендии
$students = array(
    "Иванов" => 200,
    "Петров" => 340,
    "Сидоров" => 800
);

// Вывод массива на экран
echo "Массив студентов и их стипендии:<br>";
foreach ($students as $name => $stipend) {
    echo "Студент: $name, Стипендия: $stipend<br>";
}

// Подсчет суммарной величины начисленной стипендии
$total_stipend = array_sum($students);

echo "<br>Суммарная величина начисленной стипендии: $total_stipend";
?>