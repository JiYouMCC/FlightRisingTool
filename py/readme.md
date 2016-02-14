## fr tools python version / Flight Rising 工具 python 版本

脑子里想到这样的需求第一反应是用python写的脚本，可以参考[这里的代码，基本是所有一切的雏形](https://github.com/JiYouMCC/python-practice/blob/master/game/flight_rising.py)

后来因为抛弃了保存龙的属性等需求，django的view完全没有用武之地了，于是变成了各种ajax+jquery，后来就发现其实完全用js就行了。就是这样。

这里只保留的相关的代码，依赖项包括且不仅限于django1.9, bootstrap3, jquery.cookie, django-markdown（囧rz）...因为属于django的blog站点的一部分，所以耦合度有点高……
