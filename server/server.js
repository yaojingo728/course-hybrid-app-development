"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var Course = /** @class */ (function () {
    function Course(id, courseName, images, task, person, contain, time) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
        this.contain = contain;
        this.time = time;
    }
    return Course;
}());
var courses = [
    new Course(1, '2016级混合应用开发', "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 10, 90, 'Hybrid App（混合模式移动应用）是指介于web-app、native-app这两者之间的app，兼具“Native App良好用户交互体验的优势”和“Web App跨平台开发的优势"', 4),
    new Course(2, 'HTML5与css设计', "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130", 3, 95, '超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。', 5),
    new Course(3, 'JavaScript进阶', "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130", 7, 77, 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言。', 7),
    new Course(4, '软件过程', "http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130", 16, 23, '软件工程是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。它涉及程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。', 9),
    new Course(5, '2016级混合应用开发', "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 10, 90, 'Hybrid App（混合模式移动应用）是指介于web-app、native-app这两者之间的app，兼具“Native App良好用户交互体验的优势”和“Web App跨平台开发的优势"', 4),
    new Course(6, 'HTML5与css设计', "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130", 3, 95, '超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。', 5),
    new Course(7, 'JavaScript进阶', "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130", 7, 77, 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言。', 7),
    new Course(8, '软件过程', "http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130", 16, 23, '软件工程是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。它涉及程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。', 9),
    new Course(9, '2016级混合应用开发', "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 10, 90, 'Hybrid App（混合模式移动应用）是指介于web-app、native-app这两者之间的app，兼具“Native App良好用户交互体验的优势”和“Web App跨平台开发的优势"', 4),
    new Course(10, 'HTML5与css设计', "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130", 3, 95, '超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。', 5),
    new Course(11, 'JavaScript进阶', "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130", 7, 77, 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言。', 7),
    new Course(12, '软件过程', "http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130", 16, 23, '软件工程是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。它涉及程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。', 9),
];
var Lesson = /** @class */ (function () {
    function Lesson(id, lessonName, images, time, person, contain, sperson, member, src) {
        this.id = id;
        this.lessonName = lessonName;
        this.images = images;
        this.time = time;
        this.person = person;
        this.contain = contain;
        this.sperson = sperson;
        this.member = member;
        this.src = src;
    }
    return Lesson;
}());
var lessons = [
    new Lesson(1, 'CSS3基础', "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190", 10, 90, 'Hybrid App（混合模式移动应用）是指介于web-app、native-app这两者之间的app，兼具“Native App良好用户交互体验的优势”和“Web App跨平台开发的优势"', 44, '张三  李四 王五', 'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Lesson(2, 'HTML5基础', "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190", 3, 95, '超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。', 50, '李飞 王鹏 赵天', 'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Lesson(3, '网页制作与开发', "http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190", 7, 77, 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言。', 79, '小明 小红 小兰', 'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Lesson(4, 'github', "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190", 16, 23, '软件工程是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。它涉及程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。', 59, '迈克 艾力 莉莉', 'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Lesson(5, '自动化测试', "http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190", 10, 90, 'Hybrid App（混合模式移动应用）是指介于web-app、native-app这两者之间的app，兼具“Native App良好用户交互体验的优势”和“Web App跨平台开发的优势"', 44, '张三  李四 王五', 'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Lesson(6, 'ICONIX', "http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190", 3, 95, '超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。', 50, '李飞 王鹏 赵天', 'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Lesson(7, '产品交互设计', "http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190", 7, 77, 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言。', 79, '小明 小红 小兰', 'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Lesson(8, 'ProcessOn', "http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190", 16, 23, '软件工程是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。它涉及程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。', 59, '迈克 艾力 莉莉', 'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Lesson(9, 'CSS3基础', "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190", 10, 90, 'Hybrid App（混合模式移动应用）是指介于web-app、native-app这两者之间的app，兼具“Native App良好用户交互体验的优势”和“Web App跨平台开发的优势"', 44, '张三  李四 王五', 'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Lesson(10, 'HTML5基础', "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190", 3, 95, '超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。', 50, '李飞 王鹏 赵天', 'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Lesson(11, '网页制作与开发', "http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190", 7, 77, 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言。', 79, '小明 小红 小兰', 'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
    new Lesson(12, 'github', "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190", 16, 23, '软件工程是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。它涉及程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。', 59, '迈克 艾力 莉莉', 'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
];
var Shequ = /** @class */ (function () {
    function Shequ(id, head, img, name, contain, fabuname, time, read, write) {
        this.id = id;
        this.head = head;
        this.img = img;
        this.name = name;
        this.contain = contain;
        this.fabuname = fabuname;
        this.time = time;
        this.read = read;
        this.write = write;
    }
    return Shequ;
}());
var shequs = [
    new Shequ(1, 'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg', 'web开发二——函数', "（一）函数三要素</p><p>函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用</p><p>函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式注： 不需要在函数声明的后面添加一个分号，并且添加一个分号完全是浪费性能。大括号是函数声明的必须的语法元素之一，同时它也是一个复合语句，可以用来组织语句，右侧的花括弧( </强>} <strong>)本身就意味着复合语句的结束，所以不用添加分号，如果添加分号的话，就相当于重新建立了一个空语句。"
        + "2．函数表达式形式所以一般写成下列形式：注： 函数表达式和声明变量原理相同，只不过变量的值是一个函数对象，这个时候就建议使用分号结尾。3．匿名函数匿名函数需要立即调用或者立即赋值给一个变量，上述代码为立即调用，而函数表达式为匿名函数立即赋值给一个变量的形式，事件也是。（三）匿名函数匿名函数为什么要加一对小括号呢？这样使用有什么好处么？1．在function前面加！、+、 - 甚至是逗号等到都可以起到函数定义后立即执行的效果，而（）、！、+、-、=等运算符，"
        + "<strong>都将函数声明转换成函数表达式，消除了javascript引擎识别函数表达式和函数声明的歧义</强>，告诉javascript引擎这是一个函数表达式，不是函数声明，可以在后面加括号，并立即执行函数的代码。2．函数是有返回值的，返回我们指定的值或者undefined。函数的返回值我们可能需要在后续中使用。在函数前面加上不同的运算符，这些运算符还会和函数的返回值进行运算，有时造成不必要的麻烦。"
        + "在这些运算符中加括号是最安全的做法，因为它不会改变函数的返回值。至此，我们回答了第一个问题。接下来我们回答第二个问题：匿名函数的好处。javascript中没用私有作用域的概念，在ES5中只用全局作用域和局部作用域"
        + "在函数内通过var关键字声明的变量为局部变量。如果在多人开发的项目上，你在全局或局部作用域中声明了一些变量，可能会被其他人不小心用同名的变量给覆盖掉。那么我们可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突，俗称“匿名包裹器”或“命名空间”。</p><p>jQuery使用的就是这种方法，将jQuery代码包裹在<strong>&nbsp;( function (window,undefined){…jquery代码…} "
        + "(window))</强>中，在全局作用域中调用jQuery代码时，可以达到保护jQuery内部变量的作用。（四）函数声明与函数表达式通过前面代码我们知道函数声明与函数表达式两种定义方式的调用形式是一样的， 那么这两种定义方式有什么不同呢？1．变量提升首先JavaScript引擎在读取JavaScript代码时会进行两个步骤，第一个步骤是解释，第二个步骤是<strong>执行</强>。&nbsp;<br>所谓解释就是会先通篇扫描所有的JavaScript代码，然后把<strong>所有声明提升到顶</强>端，第二步是执行，"
        + "执行就是操作一类的。</p><p><strong>所有声明提升到顶端的意思是把变量声明提升到变量作用域（全局或者函数）的顶端。量提升只有变量声明提升，"
        + "而变量赋值留在原地。所以书写代码要养成好的习惯，先声明后使用。特别的注意函数声明和函数表达式的不同点。2．关于return语句我们知道return语句有两个作用，第一个是返回指定的值，第二个是结束函数的执行，写在return语句后面的代码不会执行。另外了解到JavaScript代码运行分两步："
        + "第一是提升变量，第二是执行JavaScript语句。这两个知识点结合在一起，我们看下列代码：调用add(1,2) 语句执行结果为：我们看到add函数运行时没有报错，"
        + "并且只有第一个console.log（c）执行，且输出为undefined。<br>结果分析：因为第一步为变量提升，所以相当于为如下代码：在第二步add函数代码运行到第一个console.log(c)时，变量c已经声明但是没有赋值，所以输出undefined，而return语句后面的c=5;console.log(c)语句不会被执行。注：如有疑问，欢迎指正", '刘秀梅', '2018-10-11 15:10', 344, 2),
    new Shequ(2, 'http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg', '数据结构', "（一）函数三要素</p><p>函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用</p><p>函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式注： 不需要在函数声明的后面添加一个分号，并且添加一个分号完全是浪费性能。大括号是函数声明的必须的语法元素之一，同时它也是一个复合语句，可以用来组织语句，右侧的花括弧( </强>} <strong>)本身就意味着复合语句的结束，所以不用添加分号，如果添加分号的话，就相当于重新建立了一个空语句。"
        + "2．函数表达式形式所以一般写成下列形式：注： 函数表达式和声明变量原理相同，只不过变量的值是一个函数对象，这个时候就建议使用分号结尾。3．匿名函数匿名函数需要立即调用或者立即赋值给一个变量，上述代码为立即调用，而函数表达式为匿名函数立即赋值给一个变量的形式，事件也是。（三）匿名函数匿名函数为什么要加一对小括号呢？这样使用有什么好处么？1．在function前面加！、+、 - 甚至是逗号等到都可以起到函数定义后立即执行的效果，而（）、！、+、-、=等运算符，"
        + "<strong>都将函数声明转换成函数表达式，消除了javascript引擎识别函数表达式和函数声明的歧义</强>，告诉javascript引擎这是一个函数表达式，不是函数声明，可以在后面加括号，并立即执行函数的代码。2．函数是有返回值的，返回我们指定的值或者undefined。函数的返回值我们可能需要在后续中使用。在函数前面加上不同的运算符，这些运算符还会和函数的返回值进行运算，有时造成不必要的麻烦。"
        + "在这些运算符中加括号是最安全的做法，因为它不会改变函数的返回值。至此，我们回答了第一个问题。接下来我们回答第二个问题：匿名函数的好处。javascript中没用私有作用域的概念，在ES5中只用全局作用域和局部作用域"
        + "在函数内通过var关键字声明的变量为局部变量。如果在多人开发的项目上，你在全局或局部作用域中声明了一些变量，可能会被其他人不小心用同名的变量给覆盖掉。那么我们可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突，俗称“匿名包裹器”或“命名空间”。</p><p>jQuery使用的就是这种方法，将jQuery代码包裹在<strong>&nbsp;( function (window,undefined){…jquery代码…} "
        + "(window))</强>中，在全局作用域中调用jQuery代码时，可以达到保护jQuery内部变量的作用。（四）函数声明与函数表达式通过前面代码我们知道函数声明与函数表达式两种定义方式的调用形式是一样的， 那么这两种定义方式有什么不同呢？1．变量提升首先JavaScript引擎在读取JavaScript代码时会进行两个步骤，第一个步骤是解释，第二个步骤是<strong>执行</强>。&nbsp;<br>所谓解释就是会先通篇扫描所有的JavaScript代码，然后把<strong>所有声明提升到顶</强>端，第二步是执行，"
        + "执行就是操作一类的。</p><p><strong>所有声明提升到顶端的意思是把变量声明提升到变量作用域（全局或者函数）的顶端。量提升只有变量声明提升，"
        + "而变量赋值留在原地。所以书写代码要养成好的习惯，先声明后使用。特别的注意函数声明和函数表达式的不同点。2．关于return语句我们知道return语句有两个作用，第一个是返回指定的值，第二个是结束函数的执行，写在return语句后面的代码不会执行。另外了解到JavaScript代码运行分两步："
        + "第一是提升变量，第二是执行JavaScript语句。这两个知识点结合在一起，我们看下列代码：调用add(1,2) 语句执行结果为：我们看到add函数运行时没有报错，"
        + "并且只有第一个console.log（c）执行，且输出为undefined。<br>结果分析：因为第一步为变量提升，所以相当于为如下代码：在第二步add函数代码运行到第一个console.log(c)时，变量c已经声明但是没有赋值，所以输出undefined，而return语句后面的c=5;console.log(c)语句不会被执行。注：如有疑问，欢迎指正", '杨伟斌', '2018-10-21 17:10', 34, 266),
    new Shequ(3, 'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg', '栈和队列之间的相互转换', "（一）函数三要素</p><p>函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用</p><p>函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式注： 不需要在函数声明的后面添加一个分号，并且添加一个分号完全是浪费性能。大括号是函数声明的必须的语法元素之一，同时它也是一个复合语句，可以用来组织语句，右侧的花括弧( </强>} <strong>)本身就意味着复合语句的结束，所以不用添加分号，如果添加分号的话，就相当于重新建立了一个空语句。"
        + "2．函数表达式形式所以一般写成下列形式：注： 函数表达式和声明变量原理相同，只不过变量的值是一个函数对象，这个时候就建议使用分号结尾。3．匿名函数匿名函数需要立即调用或者立即赋值给一个变量，上述代码为立即调用，而函数表达式为匿名函数立即赋值给一个变量的形式，事件也是。（三）匿名函数匿名函数为什么要加一对小括号呢？这样使用有什么好处么？1．在function前面加！、+、 - 甚至是逗号等到都可以起到函数定义后立即执行的效果，而（）、！、+、-、=等运算符，"
        + "<strong>都将函数声明转换成函数表达式，消除了javascript引擎识别函数表达式和函数声明的歧义</强>，告诉javascript引擎这是一个函数表达式，不是函数声明，可以在后面加括号，并立即执行函数的代码。2．函数是有返回值的，返回我们指定的值或者undefined。函数的返回值我们可能需要在后续中使用。在函数前面加上不同的运算符，这些运算符还会和函数的返回值进行运算，有时造成不必要的麻烦。"
        + "在这些运算符中加括号是最安全的做法，因为它不会改变函数的返回值。至此，我们回答了第一个问题。接下来我们回答第二个问题：匿名函数的好处。javascript中没用私有作用域的概念，在ES5中只用全局作用域和局部作用域"
        + "在函数内通过var关键字声明的变量为局部变量。如果在多人开发的项目上，你在全局或局部作用域中声明了一些变量，可能会被其他人不小心用同名的变量给覆盖掉。那么我们可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突，俗称“匿名包裹器”或“命名空间”。</p><p>jQuery使用的就是这种方法，将jQuery代码包裹在<strong>&nbsp;( function (window,undefined){…jquery代码…} "
        + "(window))</强>中，在全局作用域中调用jQuery代码时，可以达到保护jQuery内部变量的作用。（四）函数声明与函数表达式通过前面代码我们知道函数声明与函数表达式两种定义方式的调用形式是一样的， 那么这两种定义方式有什么不同呢？1．变量提升首先JavaScript引擎在读取JavaScript代码时会进行两个步骤，第一个步骤是解释，第二个步骤是<strong>执行</强>。&nbsp;<br>所谓解释就是会先通篇扫描所有的JavaScript代码，然后把<strong>所有声明提升到顶</强>端，第二步是执行，"
        + "执行就是操作一类的。</p><p><strong>所有声明提升到顶端的意思是把变量声明提升到变量作用域（全局或者函数）的顶端。量提升只有变量声明提升，"
        + "而变量赋值留在原地。所以书写代码要养成好的习惯，先声明后使用。特别的注意函数声明和函数表达式的不同点。2．关于return语句我们知道return语句有两个作用，第一个是返回指定的值，第二个是结束函数的执行，写在return语句后面的代码不会执行。另外了解到JavaScript代码运行分两步："
        + "第一是提升变量，第二是执行JavaScript语句。这两个知识点结合在一起，我们看下列代码：调用add(1,2) 语句执行结果为：我们看到add函数运行时没有报错，"
        + "并且只有第一个console.log（c）执行，且输出为undefined。<br>结果分析：因为第一步为变量提升，所以相当于为如下代码：在第二步add函数代码运行到第一个console.log(c)时，变量c已经声明但是没有赋值，所以输出undefined，而return语句后面的c=5;console.log(c)语句不会被执行。注：如有疑问，欢迎指正", '7-李建涛', '2018-10-01 12:51', 42, 2),
    new Shequ(4, 'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg', 'web开发二——函数', "（一）函数三要素</p><p>函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用</p><p>函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式注： 不需要在函数声明的后面添加一个分号，并且添加一个分号完全是浪费性能。大括号是函数声明的必须的语法元素之一，同时它也是一个复合语句，可以用来组织语句，右侧的花括弧( </强>} <strong>)本身就意味着复合语句的结束，所以不用添加分号，如果添加分号的话，就相当于重新建立了一个空语句。"
        + "2．函数表达式形式所以一般写成下列形式：注： 函数表达式和声明变量原理相同，只不过变量的值是一个函数对象，这个时候就建议使用分号结尾。3．匿名函数匿名函数需要立即调用或者立即赋值给一个变量，上述代码为立即调用，而函数表达式为匿名函数立即赋值给一个变量的形式，事件也是。（三）匿名函数匿名函数为什么要加一对小括号呢？这样使用有什么好处么？1．在function前面加！、+、 - 甚至是逗号等到都可以起到函数定义后立即执行的效果，而（）、！、+、-、=等运算符，"
        + "<strong>都将函数声明转换成函数表达式，消除了javascript引擎识别函数表达式和函数声明的歧义</强>，告诉javascript引擎这是一个函数表达式，不是函数声明，可以在后面加括号，并立即执行函数的代码。2．函数是有返回值的，返回我们指定的值或者undefined。函数的返回值我们可能需要在后续中使用。在函数前面加上不同的运算符，这些运算符还会和函数的返回值进行运算，有时造成不必要的麻烦。"
        + "在这些运算符中加括号是最安全的做法，因为它不会改变函数的返回值。至此，我们回答了第一个问题。接下来我们回答第二个问题：匿名函数的好处。javascript中没用私有作用域的概念，在ES5中只用全局作用域和局部作用域"
        + "在函数内通过var关键字声明的变量为局部变量。如果在多人开发的项目上，你在全局或局部作用域中声明了一些变量，可能会被其他人不小心用同名的变量给覆盖掉。那么我们可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突，俗称“匿名包裹器”或“命名空间”。</p><p>jQuery使用的就是这种方法，将jQuery代码包裹在<strong>&nbsp;( function (window,undefined){…jquery代码…} "
        + "(window))</强>中，在全局作用域中调用jQuery代码时，可以达到保护jQuery内部变量的作用。（四）函数声明与函数表达式通过前面代码我们知道函数声明与函数表达式两种定义方式的调用形式是一样的， 那么这两种定义方式有什么不同呢？1．变量提升首先JavaScript引擎在读取JavaScript代码时会进行两个步骤，第一个步骤是解释，第二个步骤是<strong>执行</强>。&nbsp;<br>所谓解释就是会先通篇扫描所有的JavaScript代码，然后把<strong>所有声明提升到顶</强>端，第二步是执行，"
        + "执行就是操作一类的。</p><p><strong>所有声明提升到顶端的意思是把变量声明提升到变量作用域（全局或者函数）的顶端。量提升只有变量声明提升，"
        + "而变量赋值留在原地。所以书写代码要养成好的习惯，先声明后使用。特别的注意函数声明和函数表达式的不同点。2．关于return语句我们知道return语句有两个作用，第一个是返回指定的值，第二个是结束函数的执行，写在return语句后面的代码不会执行。另外了解到JavaScript代码运行分两步："
        + "第一是提升变量，第二是执行JavaScript语句。这两个知识点结合在一起，我们看下列代码：调用add(1,2) 语句执行结果为：我们看到add函数运行时没有报错，"
        + "并且只有第一个console.log（c）执行，且输出为undefined。<br>结果分析：因为第一步为变量提升，所以相当于为如下代码：在第二步add函数代码运行到第一个console.log(c)时，变量c已经声明但是没有赋值，所以输出undefined，而return语句后面的c=5;console.log(c)语句不会被执行。注：如有疑问，欢迎指正", '刘秀梅', '2018-10-11 15:10', 344, 2),
    new Shequ(5, 'http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg', '数据结构', "（一）函数三要素</p><p>函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用</p><p>函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式注： 不需要在函数声明的后面添加一个分号，并且添加一个分号完全是浪费性能。大括号是函数声明的必须的语法元素之一，同时它也是一个复合语句，可以用来组织语句，右侧的花括弧( </强>} <strong>)本身就意味着复合语句的结束，所以不用添加分号，如果添加分号的话，就相当于重新建立了一个空语句。"
        + "2．函数表达式形式所以一般写成下列形式：注： 函数表达式和声明变量原理相同，只不过变量的值是一个函数对象，这个时候就建议使用分号结尾。3．匿名函数匿名函数需要立即调用或者立即赋值给一个变量，上述代码为立即调用，而函数表达式为匿名函数立即赋值给一个变量的形式，事件也是。（三）匿名函数匿名函数为什么要加一对小括号呢？这样使用有什么好处么？1．在function前面加！、+、 - 甚至是逗号等到都可以起到函数定义后立即执行的效果，而（）、！、+、-、=等运算符，"
        + "<strong>都将函数声明转换成函数表达式，消除了javascript引擎识别函数表达式和函数声明的歧义</强>，告诉javascript引擎这是一个函数表达式，不是函数声明，可以在后面加括号，并立即执行函数的代码。2．函数是有返回值的，返回我们指定的值或者undefined。函数的返回值我们可能需要在后续中使用。在函数前面加上不同的运算符，这些运算符还会和函数的返回值进行运算，有时造成不必要的麻烦。"
        + "在这些运算符中加括号是最安全的做法，因为它不会改变函数的返回值。至此，我们回答了第一个问题。接下来我们回答第二个问题：匿名函数的好处。javascript中没用私有作用域的概念，在ES5中只用全局作用域和局部作用域"
        + "在函数内通过var关键字声明的变量为局部变量。如果在多人开发的项目上，你在全局或局部作用域中声明了一些变量，可能会被其他人不小心用同名的变量给覆盖掉。那么我们可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突，俗称“匿名包裹器”或“命名空间”。</p><p>jQuery使用的就是这种方法，将jQuery代码包裹在<strong>&nbsp;( function (window,undefined){…jquery代码…} "
        + "(window))</强>中，在全局作用域中调用jQuery代码时，可以达到保护jQuery内部变量的作用。（四）函数声明与函数表达式通过前面代码我们知道函数声明与函数表达式两种定义方式的调用形式是一样的， 那么这两种定义方式有什么不同呢？1．变量提升首先JavaScript引擎在读取JavaScript代码时会进行两个步骤，第一个步骤是解释，第二个步骤是<strong>执行</强>。&nbsp;<br>所谓解释就是会先通篇扫描所有的JavaScript代码，然后把<strong>所有声明提升到顶</强>端，第二步是执行，"
        + "执行就是操作一类的。</p><p><strong>所有声明提升到顶端的意思是把变量声明提升到变量作用域（全局或者函数）的顶端。量提升只有变量声明提升，"
        + "而变量赋值留在原地。所以书写代码要养成好的习惯，先声明后使用。特别的注意函数声明和函数表达式的不同点。2．关于return语句我们知道return语句有两个作用，第一个是返回指定的值，第二个是结束函数的执行，写在return语句后面的代码不会执行。另外了解到JavaScript代码运行分两步："
        + "第一是提升变量，第二是执行JavaScript语句。这两个知识点结合在一起，我们看下列代码：调用add(1,2) 语句执行结果为：我们看到add函数运行时没有报错，"
        + "并且只有第一个console.log（c）执行，且输出为undefined。<br>结果分析：因为第一步为变量提升，所以相当于为如下代码：在第二步add函数代码运行到第一个console.log(c)时，变量c已经声明但是没有赋值，所以输出undefined，而return语句后面的c=5;console.log(c)语句不会被执行。注：如有疑问，欢迎指正", '杨伟斌', '2018-10-21 17:10', 34, 266),
    new Shequ(6, 'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg', '栈和队列之间的相互转换', "（一）函数三要素</p><p>函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用</p><p>函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式注： 不需要在函数声明的后面添加一个分号，并且添加一个分号完全是浪费性能。大括号是函数声明的必须的语法元素之一，同时它也是一个复合语句，可以用来组织语句，右侧的花括弧( </强>} <strong>)本身就意味着复合语句的结束，所以不用添加分号，如果添加分号的话，就相当于重新建立了一个空语句。"
        + "2．函数表达式形式所以一般写成下列形式：注： 函数表达式和声明变量原理相同，只不过变量的值是一个函数对象，这个时候就建议使用分号结尾。3．匿名函数匿名函数需要立即调用或者立即赋值给一个变量，上述代码为立即调用，而函数表达式为匿名函数立即赋值给一个变量的形式，事件也是。（三）匿名函数匿名函数为什么要加一对小括号呢？这样使用有什么好处么？1．在function前面加！、+、 - 甚至是逗号等到都可以起到函数定义后立即执行的效果，而（）、！、+、-、=等运算符，"
        + "<strong>都将函数声明转换成函数表达式，消除了javascript引擎识别函数表达式和函数声明的歧义</强>，告诉javascript引擎这是一个函数表达式，不是函数声明，可以在后面加括号，并立即执行函数的代码。2．函数是有返回值的，返回我们指定的值或者undefined。函数的返回值我们可能需要在后续中使用。在函数前面加上不同的运算符，这些运算符还会和函数的返回值进行运算，有时造成不必要的麻烦。"
        + "在这些运算符中加括号是最安全的做法，因为它不会改变函数的返回值。至此，我们回答了第一个问题。接下来我们回答第二个问题：匿名函数的好处。javascript中没用私有作用域的概念，在ES5中只用全局作用域和局部作用域"
        + "在函数内通过var关键字声明的变量为局部变量。如果在多人开发的项目上，你在全局或局部作用域中声明了一些变量，可能会被其他人不小心用同名的变量给覆盖掉。那么我们可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突，俗称“匿名包裹器”或“命名空间”。</p><p>jQuery使用的就是这种方法，将jQuery代码包裹在<strong>&nbsp;( function (window,undefined){…jquery代码…} "
        + "(window))</强>中，在全局作用域中调用jQuery代码时，可以达到保护jQuery内部变量的作用。（四）函数声明与函数表达式通过前面代码我们知道函数声明与函数表达式两种定义方式的调用形式是一样的， 那么这两种定义方式有什么不同呢？1．变量提升首先JavaScript引擎在读取JavaScript代码时会进行两个步骤，第一个步骤是解释，第二个步骤是<strong>执行</强>。&nbsp;<br>所谓解释就是会先通篇扫描所有的JavaScript代码，然后把<strong>所有声明提升到顶</强>端，第二步是执行，"
        + "执行就是操作一类的。</p><p><strong>所有声明提升到顶端的意思是把变量声明提升到变量作用域（全局或者函数）的顶端。量提升只有变量声明提升，"
        + "而变量赋值留在原地。所以书写代码要养成好的习惯，先声明后使用。特别的注意函数声明和函数表达式的不同点。2．关于return语句我们知道return语句有两个作用，第一个是返回指定的值，第二个是结束函数的执行，写在return语句后面的代码不会执行。另外了解到JavaScript代码运行分两步："
        + "第一是提升变量，第二是执行JavaScript语句。这两个知识点结合在一起，我们看下列代码：调用add(1,2) 语句执行结果为：我们看到add函数运行时没有报错，"
        + "并且只有第一个console.log（c）执行，且输出为undefined。<br>结果分析：因为第一步为变量提升，所以相当于为如下代码：在第二步add函数代码运行到第一个console.log(c)时，变量c已经声明但是没有赋值，所以输出undefined，而return语句后面的c=5;console.log(c)语句不会被执行。注：如有疑问，欢迎指正", '7-李建涛', '2018-10-01 12:51', 42, 2),
];
app.get('/api/courses', function (req, res) {
    res.json(courses);
});
app.get('/api/courses/:id', function (req, res) {
    req.params;
    res.json(courses.find(function (ele) { return ele.id == req.params.id; })); //获得当前元素集合中每个元素的后代
});
app.get('/api/lessons', function (req, res) {
    res.json(lessons);
});
app.get('/api/lessons/:id', function (req, res) {
    req.params;
    res.json(lessons.find(function (ele) { return ele.id == req.params.id; }));
});
app.get('/api/shequs', function (req, res) {
    res.json(shequs);
});
app.get('/api/shequs/:id', function (req, res) {
    req.params;
    res.json(shequs.find(function (ele) { return ele.id == req.params.id; }));
});
app.listen(8000);
