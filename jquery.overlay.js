/**
 * Created by gitkv on 02.03.16.
 */
'use strict';

;(function($){
    $.overlay = {
        /**
         * настройки по умолчанию
         */
        settings:{
            element:'overlay',
            time:300
        },
        /**
         * показываем
         * @param className
         */
        show:function(className){
            if(className != '' && className != undefined)
                $(document).find('.'+this.settings.element).addClass(className).fadeIn(this.settings.time);
            else
                $(document).find('.'+this.settings.element).fadeIn(this.settings.time);
        },
        /**
         * скрываем
         * @param className
         */
        hide:function(className){
            if(className != '' && className != undefined)
                $(document).find('.'+this.settings.element).fadeOut(this.settings.time).removeClass(className);
            else
                $(document).find('.'+this.settings.element).fadeOut(this.settings.time);
        },
        /**
         * инициализация
         * @param options
         * @returns {$.overlay}
         */
        init:function(options){
            //настройки
            this.settings = $.extend(this.settings, options);

            //элемент
            if(!$(document).find('.'+this.settings.element).length) {
                $('body').append('<div class="' + this.settings.element + '"></div>');
            }

            return this;
        },
        /**
         * отключаем
         */
        destroy:function(){
            $('body .'+this.settings.element).remove();
        }
    };
})(jQuery);