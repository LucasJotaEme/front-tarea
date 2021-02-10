<template>
    <div>
        <div class="marginDiv divPadding">
            <h1 class="bigFont color" id="welcome" >¡Bienvenido a tus tareas!</h1>
        </div>
        <div id="div1" class="container-fluid">
            <div class="divPadding">
                <h2><b class="color">Mi cuenta</b> fue creado para organizarte</h2>
                <h6 style="margin-top:15px;">Para comenzar, necesitarás crear una tarea</h6>
                <button id="next" style="margin-top:15px;" @click="changeDiv" class="btn btn-light">Siguiente</button>
            </div>
        </div>
        <div id="div2" class="container-fluid">
            <div class="divPadding">
                <h2>Podrás crear tus <b class="color">rutinas</b></h2>
                <h6 style="margin-top:15px;">Organizarás tus rutinas como te pinte, y en el horario que quieras</h6>
                <button id="next2" style="margin-top:15px;" @click="changeDiv2" class="btn btn-light">Siguiente</button>
            </div>
        </div>
        <div id="div3" class="container-fluid">
            <div class="divPadding">
                <h2>Llevarás al día tus <b class="color">cuentas y deudas</b></h2>
                <h6 style="margin-top:15px;">Nunca más deudas gordo puto, esto te lo lleva al día</h6>
                <button id="next" style="margin-top:15px;" @click="showButtons" class="btn btn-light">Siguiente</button>
            </div>
        </div>
        <div id="div4" class="container-fluid">
            <div class="divPadding">
                <h2>Crea tu<b class="color"> nueva tarea y organizá tu día!</b></h2>
                <router-link to="/task" style="margin-top:15px;" class="btn btn-light">Comenzar</router-link>
            </div>
        </div>
    </div>
</template>

<script>

import jQuery from 'jquery';


let $ = jQuery;
export default {
    methods: {
        changeDiv(){
            var div1 = $('#div1');
            var div2 = $('#div2');

            div1.hide(300);
            div2.show(300);
        },
        changeDiv2(){
            var div2 = $('#div2');
            var div3 = $('#div3');

            div2.hide(300);
            div3.show(300);
        },
        showButtons(){
            var div3 = $('#div3');
            var div4 = $('#div4');

            div3.hide(300);
            div4.show(600);
        }
    },
    mounted() {
        var div2 = $('#div2');
        var div3 = $('#div3');
        var div4 = $('#div4');

        div2.hide();
        div3.hide();
        div4.hide();
    }
}
</script>