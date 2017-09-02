<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Чистая страна</title>
  <link href="https://fonts.googleapis.com/css?family=Dosis:500" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <script>
  window.onload=function(){
    document.body.style.height = 8250 + window.innerHeight + "px";
    }
  </script>
  <div id="main">
    <div id="meetanim">
      <div id="animheader">
        Clean Country
      </div>
      <div id="loadbar">
        <div id="loaded">
        </div>
        <div id="circle">
        </div>
      </div>
      <div id="animtext">Пролистайте вниз, чтобы начать</div>
    </div>
    <div id="bg">
      <div id="wrapper2">
        <div id="op2">
          <h2 class="text" id="hdr2">Поощрение участников</h2>
          <div class="text" id="txt2">
			<div class="line"></div>
              <div id="arrow-left" class="material-icons" onclick="rotat('left')">chevron_left</div>
              <div id="wrapper">
              <div id="container_slider">
              <div id="d1" class="d">
                <img src="img/prize1.jpg" id="prize1" class="prize">
                <div class="description">
                  Наклейка с фирменным логотипом Clean Country
                  <div class="price">
                  <span class="name">Цена</span>
                  <span class="value">10 баллов</span>
                  </div>
                </div>
              </div>
              <div id="d2" class="d">
                <img src="img/prize2.jpg" id="prize1" class="prize">
                <div class="description">
                Значок Clean Country
                  <div class="price">
                  <span class="name">Цена</span>
                  <span class="value">45 баллов</span>
                  </div>
                </div>
              </div>
              <div id="d3" class="d">
                <img src="img/prize3.jpg" id="prize1" class="prize">
                <div class="description">
                  Брелок Clean Country
                  <div class="price">
                  <span class="name">Цена</span>
                  <span class="value">60 баллов</span>
                  </div>
                </div>
              </div>
              <div id="d4" class="d">
                <img src="img/prize4.jpg" id="prize1" class="prize">
                <div class="description">
                  Футболка с фирменным принтом Clean Country
                  <div class="price">
                  <span class="name">Цена</span>
                  <span class="value">110 баллов</span>
                  </div>
                </div>
              </div>
              </div>
              </div>
              <div id="arrow-right" class="material-icons" onclick="rotat('right')">chevron_right</div>
          </div>
        </div>
        <div id="op4">
          <h2 class="text" id="hdr4">Участие в проекте</h2>
          <div class="text" id="txt4">
          <div class="line" style="margin-left:-10px"></div>
          	Для того, чтобы стать участником проекта необходимо просто заполнить форму по ссылке ниже. Уведомления обо всех новостях проекта будут приходить на указанный e-mail. Для получения баллов за утилизацию обращайтесь к <a href="https://vk.com/hypertextpreproccesor">модераторам</a>.
          	<a href="login.html" style="text-decoration:none"><div id="regbtncounter">Принять участие. Уже <span id="count"><?php
          include "db.php";
          $res=mysql_query("SELECT COUNT(1) FROM users");
          $num=mysql_fetch_array($res);
          mysql_close($db);
          echo $num[0];
          ?></span> пользователей присоединились к нам!</div></a>
          </div>
        </div>
      </div>
      <img src="img/bg_small_24.png" id="ms">
      <div id="wrapper1">
        <div id="op1">
          <h2 class="text" id="hdr1">Чем мы занимаемся?</h2>
          <div id="txt1">
          <div class="line"></div>
          <ul id="ul1op1">
            <li id="p1">Призываем Вас выбрасывать мусор раздельно</li>
            <li id="p2">Вы присылаете любые доказательства этого, например фото или видео</li>
            <li id="p3">Получаете баллы</li>
            <li id="p4">Обмениваете заработанные баллы на различную аттрибутику нашего проекта</li>
          </ul>
          <img id="bug" src="img/bug.png">
          </div>
        </div>
        <div id="op3">
          <h2 class="text" id="hdr3">Кто мы?</h2>
          <div class="text" id="txt3">
          <div class="line"></div>
          <div id="cont3">
            <div id="pr1">
              <img src="img/ava1.jpg" class="ava1 ava">
              <div class="description">
                Паша<br />Тимлид, программист
              </div>
            </div>
            <div id="pr2">
              <img src="img/ava2.jpg" class="ava2 ava">
              <div class="description">
                Егор<br />Генератор идей
              </div>
            </div>
            <div id="pr3">
              <img src="img/ava3.jpg" class="ava3 ava">
              <div class="description">
                Влад<br />Программист
              </div>
            </div>
            <div id="pr4">
              <img src="img/ava.jpg" class="ava4 ava">
              <div class="description">
                Никита<br />Дизайнер
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="js/script.js" defer></script>
</body>

</html>