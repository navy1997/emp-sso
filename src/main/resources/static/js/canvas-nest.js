/**

 * Created by Administrator on 2017-3-5.

 */

/**

 * Copyright (c) 2016 hustcc

 * License: MIT

 * Version: %%GULP_INJECT_VERSION%%

 * GitHub: https://github.com/hustcc/canvas-nest.js

 **/

(function() {

    //灏佽鏂规硶锛屽帇缂╀箣鍚庡噺灏戞枃浠跺ぇ灏�

    function get_attribute(node, attr, default_value) {

        return node.getAttribute(attr) || default_value;

    }

    //灏佽鏂规硶锛屽帇缂╀箣鍚庡噺灏戞枃浠跺ぇ灏�

    function get_by_tagname(name) {

        return document.getElementsByTagName(name);

    }

    //鑾峰彇閰嶇疆鍙傛暟

    function get_config_option() {

        var scripts = get_by_tagname("script"),

            script_len = scripts.length,

            script = scripts[script_len - 1]; //褰撳墠鍔犺浇鐨剆cript

        return {

            l: script_len, //闀垮害锛岀敤浜庣敓鎴恑d鐢�

            z: get_attribute(script, "zIndex", -1), //z-index

            o: get_attribute(script, "opacity", 0.5), //opacity

            c: get_attribute(script, "color", "0,0,0"), //color

            n: get_attribute(script, "count", 99) //count

        };

    }

    //璁剧疆canvas鐨勯珮瀹�

    function set_canvas_size() {

        canvas_width = the_canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,

            canvas_height = the_canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    }



    //缁樺埗杩囩▼

    function draw_canvas() {

        context.clearRect(0, 0, canvas_width, canvas_height);

        //闅忔満鐨勭嚎鏉″拰褰撳墠浣嶇疆鑱斿悎鏁扮粍

        var e, i, d, x_dist, y_dist, dist; //涓存椂鑺傜偣

        //閬嶅巻澶勭悊姣忎竴涓偣

        random_points.forEach(function(r, idx) {

            r.x += r.xa,

                r.y += r.ya, //绉诲姩

                r.xa *= r.x > canvas_width || r.x < 0 ? -1 : 1,

                r.ya *= r.y > canvas_height || r.y < 0 ? -1 : 1, //纰板埌杈圭晫锛屽弽鍚戝弽寮�

                context.fillRect(r.x - 0.5, r.y - 0.5, 1, 1); //缁樺埗涓€涓楂樹负1鐨勭偣

            //浠庝笅涓€涓偣寮€濮�

            for (i = idx + 1; i < all_array.length; i++) {

                e = all_array[i];

                // 褰撳墠鐐瑰瓨鍦�

                if (null !== e.x && null !== e.y) {

                    x_dist = r.x - e.x; //x杞磋窛绂� l

                    y_dist = r.y - e.y; //y杞磋窛绂� n

                    dist = x_dist * x_dist + y_dist * y_dist; //鎬昏窛绂�, m



                    dist < e.max && (e === current_point && dist >= e.max / 2 && (r.x -= 0.03 * x_dist, r.y -= 0.03 * y_dist), //闈犺繎鐨勬椂鍊欏姞閫�

                        d = (e.max - dist) / e.max,

                        context.beginPath(),

                        context.lineWidth = d / 2,

                        context.strokeStyle = "rgba(" + config.c + "," + (d + 0.2) + ")",

                        context.moveTo(r.x, r.y),

                        context.lineTo(e.x, e.y),

                        context.stroke());

                }

            }

        }), frame_func(draw_canvas);

    }

    //鍒涘缓鐢诲竷锛屽苟娣诲姞鍒癰ody涓�

    var the_canvas = document.createElement("canvas"), //鐢诲竷

        config = get_config_option(), //閰嶇疆

        canvas_id = "c_n" + config.l, //canvas id

        context = the_canvas.getContext("2d"), canvas_width, canvas_height,

        frame_func = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(func) {

            window.setTimeout(func, 1000 / 45);

        }, random = Math.random,

        current_point = {

            x: null, //褰撳墠榧犳爣x

            y: null, //褰撳墠榧犳爣y

            max: 20000 // 鍦堝崐寰勭殑骞虫柟

        },

        all_array;

    the_canvas.id = canvas_id;

    the_canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + config.z + ";opacity:" + config.o;

    get_by_tagname("body")[0].appendChild(the_canvas);



    //鍒濆鍖栫敾甯冨ぇ灏�

    set_canvas_size();

    window.onresize = set_canvas_size;

    //褰撴椂榧犳爣浣嶇疆瀛樺偍锛岀寮€鐨勬椂鍊欙紝閲婃斁褰撳墠浣嶇疆淇℃伅

    window.onmousemove = function(e) {

        e = e || window.event;

        current_point.x = e.clientX;

        current_point.y = e.clientY;

    }, window.onmouseout = function() {

        current_point.x = null;

        current_point.y = null;

    };

    //闅忔満鐢熸垚config.n鏉＄嚎浣嶇疆淇℃伅

    for (var random_points = [], i = 0; config.n > i; i++) {

        var x = random() * canvas_width, //闅忔満浣嶇疆

            y = random() * canvas_height,

            xa = 2 * random() - 1, //闅忔満杩愬姩鏂瑰悜

            ya = 2 * random() - 1;

        // 闅忔満鐐�

        random_points.push({

            x: x,

            y: y,

            xa: xa,

            ya: ya,

            max: 6000 //娌鹃檮璺濈

        });

    }

    all_array = random_points.concat([current_point]);

    //0.1绉掑悗缁樺埗

    setTimeout(function() {

        draw_canvas();

    }, 100);

})();