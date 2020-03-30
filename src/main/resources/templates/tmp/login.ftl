
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <script src="/jquery-2.1.3.min.js"></script>
    <title>单页系统</title>
    <style>
        html, body {
            width: 100%;
            height: 100%;
        }

        .login_page {
            width: 490px;
            margin: 0 auto;
        }

        .login_box {
            width: 488px;
            height: 380px;
            margin-top: 46px;
            box-shadow: 0 3px 12px -2px #bcd2e0;
            border-radius: 10px;
            border: 1px solid #bdd3e1;
            background: #fff;
        }

        .login_tit {
            font-size: 32px;
            color: #0095e2;
            width: 100%;
            text-align: center;
            margin-top: 80px;
            cursor: pointer;
        }

        .login_item {
            box-shadow: 0 3px 12px -2px #bcd2e0;
            border-radius: 8px;
            border: 1px solid #bdd3e1;
            background: #fff;
            width: 350px;
            box-sizing: border-box;
            height: 50px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            padding-right: 20px;
        }

        .login_item input {
            border: none;
            outline: none;
            font-size: 16px;
            width: 100%;
            color: #9a9a9a;
            background: none;
        }

        .login_item input:-webkit-autofill {
            background-color: rgba(255, 0, 0, 0) !important;
        }

        .login_user img {
            width: 50px;
            height: auto;
        }

        .login_user {
            margin-top: 60px;
        }

        .login_pwd {
            margin-top: 30px;
        }

        .login_pwd img {
            width: 25px;
            height: auto;
            margin-left: 13px;
            margin-right: 12px;
        }

        .login_bar {
            width: 100%;
            justify-content: center;
            display: flex;
            height: 45px;
            margin-top: 30px;
        }

        .login_bar a {
            background-color: #0095e2;
            width: 280px;
            font-size: 18px;
            color: #fff;
            border-radius: 5px;
            letter-spacing: 10px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            cursor: pointer;
        }
    </style>
</head>
<body style="background: #f6fafd;">
<script src="/canvas-nest.js"></script>
<canvas id="c_n1" width="1151" height="661"
        style="position: fixed;top: 0px;left: 0px;z-index: -1;opacity: 0.5;"></canvas>
<div class="wrapper">
    <div class="login_page">
        <div class="login_tit">单页电商管理平台</div>
        <div class="login_box">
            <div class="login_item login_user">
                <img src="/image/user.png">
                <input type="text" name="username" placeholder="用户名"
                       onkeyup="this.value=this.value.replace(/^ +| +$/g,'')">
            </div>
            <div class="login_item login_pwd">
                <img src="/image/password.png">
                <input type="password" name="password" placeholder="密码"
                       onkeyup="this.value=this.value.replace(/^ +| +$/g,'')">
            </div>
            <div class="login_bar">
                <a onclick="login()">登录</a>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    function login () {
        var username = $('input[name=username]').val()
        var password = $('input[name=password]').val()
        if (username == '') {
            alert('请输入用户名')
            return false
        }
        if (password == '') {
            alert('请输入密码')
            return false
        }
        $.ajax({
            method: 'POST',
            url: '/login',
            data: {'userName': username, 'password': password},
            dataType: 'json',
            success: function (data) {
                if (data.success) {
                    console.log(11)
                    window.location.href = '/main'
                } else {
                    alert(data.errorMsg)
                }
            }

        })
    }

    $(document).keydown(function (event) {
        if (event.keyCode == 13) {
            login()
        }
    })
</script>
</body>
</html>
