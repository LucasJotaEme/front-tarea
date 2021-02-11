<template>
    <div id="test" class="marginDiv">
        <div class="container div shadow">
            <div class="divPadding">
                <div>
                    <h3 class="colorMain">Nueva tarea</h3>
                    <hr>
                </div>
                <div class="text-left">
                    <h6>Nombre</h6>
                    <input type="text" class="form-text" placeholder="Ej: Cocinar">
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>

import jQuery from 'jquery';

let $ = jQuery;

export default {

    name: 'Task',
    mounted: function () {
    var test = $('#test').hide();
    test.slideDown(600);

  }
}
</script>