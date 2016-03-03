# jQuery.overlay

jQuery скрипт для блокировки экрана наложеным слоем, например при ajax запросах

#### Пример использования: 
*простое использование*
<pre>$.overlay.show(); // показать слой
$.overlay.hide(); // скрыть слой</pre>

*установка параметров*
<pre>var overlay = $.overlay({
    'element' : 'overlay', // селектор класса блока
    'time' : 300 // время за которое отобразится или скроется слой
});
overlay.show();
overlay.hide();</pre>

*Добавление класса слою перед показом, удобно при ajax запросах отображать прелоадер*
<pre>var overlay = $.overlay();
overlay.show('some_class');
overlay.hide('some_class');</pre>

#### CSS пример
*более расширеный пример можно взять в demo*
<pre>.overlay {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.5);
}</pre>