#include <common>
#include <packing>
#include <fog_pars_fragment>

varying vec2 vUv;
uniform sampler2D tDudv;
uniform float time;
uniform vec3 waterColor;

const float strength = 1.0;

void main() {
  
   

    gl_FragColor = vec4( waterColor , 1.0 );
    


    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
}
