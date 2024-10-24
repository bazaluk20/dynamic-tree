-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: domsvoim.mysql.ukraine.com.ua:3306
-- Время создания: Окт 25 2024 г., 02:06
-- Версия сервера: 5.7.44-50-log
-- Версия PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `new_tree`
--

-- --------------------------------------------------------

--
-- Структура таблицы `app_tree`
--

CREATE TABLE `app_tree` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `app_tree`
--

INSERT INTO `app_tree` (`id`, `name`, `parent_id`) VALUES
(1, 'Root', NULL),
(2, 'Name 1', 1),
(3, 'Name 2', 1),
(4, 'Name 3', 1),
(5, 'Name 4', 1),
(6, 'Name 5', 1),
(7, 'Name 3.1', 4),
(8, 'Name 3.2', 4),
(9, 'Name 3.3', 4),
(10, 'Name 3.2.1', 8);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `app_tree`
--
ALTER TABLE `app_tree`
  ADD PRIMARY KEY (`id`),
  ADD KEY `parent_id` (`parent_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `app_tree`
--
ALTER TABLE `app_tree`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `app_tree`
--
ALTER TABLE `app_tree`
  ADD CONSTRAINT `app_tree_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `app_tree` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
